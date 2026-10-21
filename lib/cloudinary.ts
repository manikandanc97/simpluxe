const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim() || "drdl4pdnx";
const deliveryBaseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;

interface CloudinaryAsset {
  publicId: string;
  version?: string;
}

interface CloudinaryDeliveryOptions {
  width: number;
  format?: "auto" | "png";
  quality?: "auto" | "auto:eco";
}

export function cloudinaryImageUrl(
  { publicId, version }: CloudinaryAsset,
  options?: CloudinaryDeliveryOptions
) {
  const normalizedPublicId = publicId.replace(/^\/+/, "");
  const versionSegment = version ? `${version.replace(/^v?/, "v")}/` : "";
  const transformation = options
    ? `c_limit,w_${options.width}/f_${options.format ?? "auto"}/q_${options.quality ?? "auto:eco"}/`
    : "";
  return `${deliveryBaseUrl}/${transformation}${versionSegment}${normalizedPublicId}`;
}

export const CLOUDINARY_BRAND_MARK = {
  publicId: "simpluxe/favicon/Bright_Blue_S_Monogram_Logo_spudvz.png",
  version: "1791901666",
  width: 883,
  height: 858,
} as const;

const TECH_PUBLIC_ID_OVERRIDES: Record<string, string> = {
  godaddy: "godaddy_uege9k",
  hostinger: "hostinger_znba5r",
  hostingervps: "hostingervps_xdifsu",
  jwt: "jwt_lp0clz",
  oauth: "oauth_iqrb3x",
  supabaseauth: "supabaseauth_yg9rfn",
};

export function cloudinaryTechLogoUrl(slug: string) {
  const publicId = TECH_PUBLIC_ID_OVERRIDES[slug] || slug;
  return cloudinaryImageUrl({ publicId: `simpluxe/tech/${publicId}` });
}
