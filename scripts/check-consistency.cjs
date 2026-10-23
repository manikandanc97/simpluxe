// Validate project conventions without reading private environment values.
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const ts = require("typescript");

function files(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? files(file) : [file];
  });
}

const sources = ["app", "components", "hooks", "lib", "types", "scripts"]
  .flatMap(files).filter((file) => /\.(?:tsx?|cjs|mjs|css)$/.test(file));
const failures = [];
const referencedAssets = new Set();
const publicFiles = files("public");
const assetHashes = new Map();
const content = sources.map((file) => fs.readFileSync(file, "utf8")).join("\n");

for (const file of sources) {
  if (!/^[a-z0-9]+(?:[.-][a-z0-9]+)*\.(?:tsx?|cjs|mjs|css)$/.test(path.basename(file))) {
    failures.push(`${file}: use lowercase kebab-case filenames`);
  }
  if (!/\.tsx?$/.test(file)) continue;
  const ast = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true);
  function visit(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)
      || ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node)) {
      const tokens = node.text.split(/\s+/);
      const responsiveTextSizes = new Map();
      for (const token of tokens) {
        // CSS selectors such as [role='button'] are not Tailwind class strings.
        if (/^[\w:/.-]+\[.+\][\w:/.-]*$/.test(token)) {
          const line = ast.getLineAndCharacterOfPosition(node.getStart()).line + 1;
          failures.push(`${file}:${line}: replace arbitrary Tailwind class ${token}`);
        }
        if (/^(?:[a-z-]+:)*(?:m[trblxy]?|space-[xy])-/.test(token)) {
          const line = ast.getLineAndCharacterOfPosition(node.getStart()).line + 1;
          failures.push(`${file}:${line}: replace directional spacing utility ${token} with flex/grid gap, parent padding, or a named layout utility`);
        }
        const textSize = token.match(/^((?:[a-z-]+:)*)text-(?:xs|sm|base|lg|xl|[2-9]xl)$/);
        if (textSize) {
          const breakpoint = textSize[1] || "base";
          const previous = responsiveTextSizes.get(breakpoint);
          if (previous && previous !== token) {
            const line = ast.getLineAndCharacterOfPosition(node.getStart()).line + 1;
            failures.push(`${file}:${line}: conflicting typography utilities ${previous} and ${token}`);
          }
          responsiveTextSizes.set(breakpoint, token);
        }
      }
      // Template fragments can be suffixes of remote URLs, not public paths.
      if (!ts.isStringLiteral(node) && !ts.isNoSubstitutionTemplateLiteral(node)) return;
      const value = node.text.split(/[?#]/)[0];
      if (value.startsWith("/")) {
        const asset = path.join("public", value.slice(1));
        if (path.extname(value) && !value.endsWith(".xml") && !value.endsWith(".txt")) {
          if (!fs.existsSync(asset)) failures.push(`${file}: missing public asset ${value}`);
          else referencedAssets.add(path.normalize(asset));
        }
      } else if (value.includes("public/")) {
        const asset = path.resolve(path.dirname(file), value);
        if (!fs.existsSync(asset)) failures.push(`${file}: missing local asset ${value}`);
        else referencedAssets.add(path.relative(process.cwd(), asset));
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
}

for (const file of publicFiles) {
  if (!/^[a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z0-9]+$/.test(path.basename(file))) {
    failures.push(`${file}: use lowercase kebab-case asset filenames`);
  }
  if (!referencedAssets.has(file)) failures.push(`${file}: public asset has no source reference`);
  const hash = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
  if (assetHashes.has(hash)) failures.push(`${file}: duplicates ${assetHashes.get(hash)}`);
  else assetHashes.set(hash, file);
}

const example = fs.readFileSync(".env.example", "utf8");
const documentedKeys = new Set([...example.matchAll(/^([A-Z][A-Z0-9_]*)=/gm)].map((match) => match[1]));
for (const match of content.matchAll(/process\.env\.((?:NEXT_PUBLIC_|SUPABASE_)[A-Z0-9_]+)/g)) {
  if (!documentedKeys.has(match[1])) failures.push(`.env.example: missing ${match[1]}`);
}

if (failures.length) {
  console.error([...new Set(failures)].join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Consistency check passed: ${sources.length} source files, ${publicFiles.length} referenced assets, filenames, Tailwind classes, and environment documentation.`);
}
