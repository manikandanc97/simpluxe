import Image from "next/image";
import { cloudinaryImageUrl } from "@/lib/cloudinary";
import { HERO_SHOWCASE_COPY } from "@/lib/data/hero";

const HERO_SHOWCASE_IMAGES = {
  storefront: {
    publicId: "simpluxe/banner/storefront-3d.jpg",
    version: "1792726363",
  },
  cyberMatrix: {
    publicId: "simpluxe/banner/cyber-matrix.jpg",
    version: "1792726365",
  },
  pagoda: {
    publicId: "simpluxe/banner/pagoda-art.jpg",
    version: "1792726367",
  },
  studio: {
    publicId: "simpluxe/banner/b1_rrfigj.png",
    version: "1792726106",
  },
  gradient: {
    publicId: "simpluxe/banner/gradient-3d.jpg",
    version: "1792726368",
  },
  creator: {
    publicId: "simpluxe/banner/creator-photo.jpg",
    version: "1792726401",
  },
  storyboard: {
    publicId: "simpluxe/banner/story-sketch.jpg",
    version: "1792726407",
  },
} as const;

interface ShowcaseSideCardProps {
  src: {
    publicId: string;
    version: string;
  };
  alt: string;
  className: string;
  loading?: "eager" | "lazy";
}

function ShowcaseSideCard({
  src,
  alt,
  className,
  loading = "lazy",
}: ShowcaseSideCardProps) {
  return (
    <div
      className={`absolute overflow-hidden rounded-3xl border border-white/60 bg-white transition-transform duration-300 hover:scale-105 ${className}`}
      aria-hidden="true"
    >
      <Image
        src={cloudinaryImageUrl(src)}
        alt={alt}
        fill
        sizes="(max-width: 1023px) 240px, 320px"
        className="object-cover object-center"
        loading={loading}
      />
    </div>
  );
}

export function WorkbenchHeroCollage() {
  return (
    <div className="relative w-full max-w-7xl overflow-hidden">
      <div className="hero-showcase-stage relative w-full select-none">
        <ShowcaseSideCard
          src={HERO_SHOWCASE_IMAGES.storefront}
          alt={HERO_SHOWCASE_COPY.cardTitles.storefront}
          className="hero-card-outer-left z-0"
        />
        <ShowcaseSideCard
          src={HERO_SHOWCASE_IMAGES.cyberMatrix}
          alt={HERO_SHOWCASE_COPY.cardTitles.cyberMatrix}
          className="hero-card-mid-left z-10"
        />
        <ShowcaseSideCard
          src={HERO_SHOWCASE_IMAGES.pagoda}
          alt={HERO_SHOWCASE_COPY.cardTitles.pagoda}
          className="hero-card-inner-left z-20"
          loading="eager"
        />

        <div className="hero-card-center absolute z-30 overflow-hidden rounded-3xl border border-slate-200/90 bg-white sm:rounded-4xl">
          <Image
            src={cloudinaryImageUrl(HERO_SHOWCASE_IMAGES.studio)}
            alt={HERO_SHOWCASE_COPY.cardTitles.studio}
            fill
            preload
            sizes="(max-width: 1023px) 100vw, 960px"
            className="object-cover object-center"
          />
        </div>

        <ShowcaseSideCard
          src={HERO_SHOWCASE_IMAGES.gradient}
          alt={HERO_SHOWCASE_COPY.cardTitles.gradient}
          className="hero-card-inner-right z-20"
          loading="eager"
        />
        <ShowcaseSideCard
          src={HERO_SHOWCASE_IMAGES.creator}
          alt={HERO_SHOWCASE_COPY.cardTitles.creator}
          className="hero-card-mid-right z-10"
        />
        <ShowcaseSideCard
          src={HERO_SHOWCASE_IMAGES.storyboard}
          alt={HERO_SHOWCASE_COPY.cardTitles.storyboard}
          className="hero-card-outer-right z-0"
        />
      </div>
    </div>
  );
}
