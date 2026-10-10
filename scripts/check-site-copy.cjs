// Catch presentation copy added outside lib/content without importing the app.
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

function sourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(file) : /\.tsx?$/.test(file) ? [file] : [];
  });
}

const textAttributes = new Set(["alt", "title", "placeholder", "aria-label", "aria-description", "eyebrow", "description", "text", "label", "badge", "highlightedText", "subtitle", "prefix", "suffix"]);
const textProperties = new Set(["label", "title", "description", "headline", "subtitle", "text", "message", "commandName", "user", "time", "val"]);
const failures = [];

function hasText(node) {
  const value = ts.isTemplateExpression(node)
    ? [node.head.text, ...node.templateSpans.map((span) => span.literal.text)].join("")
    : node.text;
  return !!value?.trim() && /[\p{L}\p{N}]/u.test(value) && !/^(?:&nbsp;)+$/.test(value);
}

function isPresentationCopy(node) {
  if (ts.isJsxText(node)) return hasText(node);
  if (!ts.isStringLiteral(node) && !ts.isNoSubstitutionTemplateLiteral(node) && !ts.isTemplateExpression(node)) return false;
  if (!hasText(node)) return false;
  const parent = node.parent;
  if (ts.isLiteralTypeNode(parent)) return false;
  if (ts.isBinaryExpression(parent) && [ts.SyntaxKind.EqualsEqualsToken, ts.SyntaxKind.EqualsEqualsEqualsToken, ts.SyntaxKind.ExclamationEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken].includes(parent.operatorToken.kind)) return false;
  if (ts.isJsxAttribute(parent)) return textAttributes.has(parent.name.getText());
  if (ts.isPropertyAssignment(parent) && parent.initializer === node && textProperties.has(parent.name.getText())) {
    // Some visual objects use `text` for a Tailwind color class.
    return !/^(?:text-|bg-|border-)/.test(node.text ?? "");
  }
  if (ts.isCallExpression(parent) && /\.(min|max|email)$/.test(parent.expression.getText())) {
    return parent.arguments.indexOf(node) > 0 || parent.expression.getText().endsWith(".email");
  }
  if (ts.isVariableDeclaration(parent) && parent.name.getText() === "alt") return true;
  for (let ancestor = parent; ancestor && !ts.isStatement(ancestor); ancestor = ancestor.parent) {
    if (ts.isJsxAttribute(ancestor)) return textAttributes.has(ancestor.name.getText());
    if (ts.isPropertyAssignment(ancestor)) return false;
    if (ts.isCallExpression(ancestor) && !ancestor.expression.getText().endsWith(".map")) return false;
    if (ts.isJsxExpression(ancestor)) {
      if (ts.isJsxAttribute(ancestor.parent)) return textAttributes.has(ancestor.parent.name.getText());
      const value = node.text ?? node.head?.text ?? "";
      if (/^(?:#[\da-f]{3,8}|[\d.]+ [\d.]+)$/i.test(value)) return false;
      if (/(?:^|\s)(?:[\w-]+:)*(?:text-|bg-|border-|h-|w-|px-|py-|max-w-|from-|to-|col-span-|dark:)/.test(value)) return false;
      return true;
    }
  }
  return false;
}

for (const file of ["app", "components", "hooks", "lib/leads"].flatMap(sourceFiles)) {
  const ast = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true);
  function visit(node) {
    if (isPresentationCopy(node)) {
      const line = ast.getLineAndCharacterOfPosition(node.getStart()).line + 1;
      failures.push(`${file}:${line}: ${node.getText().trim().replace(/\s+/g, " ")}`);
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
}

// Shared labels must be referenced through COMMON rather than copied into pages.
const commonFile = "lib/content/common.ts";
const commonAst = ts.createSourceFile(commonFile, fs.readFileSync(commonFile, "utf8"), ts.ScriptTarget.Latest, true);
const sharedLabels = new Set();
function collectSharedLabels(node) {
  if (ts.isStringLiteral(node) && ts.isPropertyAssignment(node.parent) && node.parent.initializer === node) {
    sharedLabels.add(node.text);
  }
  ts.forEachChild(node, collectSharedLabels);
}
collectSharedLabels(commonAst);
for (const file of sourceFiles("lib/content")) {
  if (file.replaceAll("\\", "/") === commonFile) continue;
  const ast = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true);
  function checkSharedLabel(node) {
    if (ts.isStringLiteral(node) && sharedLabels.has(node.text)
      && !ts.isLiteralTypeNode(node.parent)
      && !(ts.isPropertyAssignment(node.parent) && node.parent.name === node)) {
      const line = ast.getLineAndCharacterOfPosition(node.getStart()).line + 1;
      failures.push(`${file}:${line}: reuse COMMON for ${JSON.stringify(node.text)}`);
    }
    ts.forEachChild(node, checkSharedLabel);
  }
  checkSharedLabel(ast);
}

if (failures.length) {
  console.error("Keep presentation strings in lib/content and reuse shared labels:\n" + failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Site copy check passed: no inline presentation strings or repeated shared labels found.");
}
