export type ScreenType = "home" | "work" | "services" | "about" | "contact" | "subpage";

export interface OrbConfig {
  top: string;
  left?: string;
  right?: string;
  size: string;
  color: "purple" | "pink" | "blue" | "white";
}

export interface TinyOrbConfig {
  top: string;
  left?: string;
  right?: string;
  color: string;
  size: string;
}

export interface DotGridConfig {
  top: string;
  left?: string;
  right?: string;
}

export interface WaveCurveConfig {
  d: string;
  stroke: string;
  width: string;
  dashed?: boolean;
}

// 1. Curated Randomized 3D Spheres (Pearls) per screen
export const ORB_CONFIGURATIONS: Record<ScreenType, OrbConfig[]> = {
  // ── HOME: Long Multi-section layout ──
  home: [
    { top: "1%", left: "1%", size: "w-16 h-16 sm:w-28 sm:h-28 lg:w-40 lg:h-40", color: "purple" },
    { top: "6%", right: "2%", size: "w-14 h-14 sm:w-24 sm:h-24 lg:w-32 lg:h-32", color: "pink" },
    { top: "14%", right: "6%", size: "w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24", color: "white" },
    { top: "24%", left: "2%", size: "w-18 h-18 sm:w-32 sm:h-32 lg:w-48 lg:h-48", color: "blue" },
    { top: "38%", left: "4%", size: "w-12 h-12 sm:w-20 sm:h-20 lg:w-28 lg:h-28", color: "pink" },
    { top: "46%", right: "1%", size: "w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36", color: "purple" },
    { top: "58%", left: "1%", size: "w-16 h-16 sm:w-30 sm:h-30 lg:w-44 lg:h-44", color: "purple" },
    { top: "72%", right: "2%", size: "w-20 h-20 sm:w-36 sm:h-36 lg:w-56 lg:h-56", color: "pink" },
    { top: "84%", left: "2%", size: "w-16 h-16 sm:w-28 sm:h-28 lg:w-40 lg:h-40", color: "blue" },
    { top: "94%", right: "3%", size: "w-14 h-14 sm:w-22 sm:h-22 lg:w-32 lg:h-32", color: "purple" },
  ],

  // ── WORK: Prominent pearls floating in Hero & along card gutters ──
  work: [
    { top: "2%", left: "1%", size: "w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44", color: "purple" },
    { top: "6%", right: "2%", size: "w-18 h-18 sm:w-30 sm:h-30 lg:w-40 lg:h-40", color: "pink" },
    { top: "14%", left: "7%", size: "w-12 h-12 sm:w-18 sm:h-18 lg:w-26 lg:h-26", color: "blue" },
    { top: "20%", right: "6%", size: "w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28", color: "white" },
    { top: "34%", left: "0.5%", size: "w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44", color: "blue" },
    { top: "52%", right: "0.5%", size: "w-22 h-22 sm:w-36 sm:h-36 lg:w-48 lg:h-48", color: "purple" },
    { top: "70%", left: "1%", size: "w-18 h-18 sm:w-28 sm:h-28 lg:w-38 lg:h-38", color: "pink" },
    { top: "86%", right: "1.5%", size: "w-18 h-18 sm:w-30 sm:h-30 lg:w-42 lg:h-42", color: "blue" },
    { top: "96%", left: "3%", size: "w-14 h-14 sm:w-22 sm:h-22 lg:w-28 lg:h-28", color: "white" },
  ],

  // ── SERVICES: Asymmetric distribution, focused around Architecture Blueprint ──
  services: [
    { top: "3%", right: "2%", size: "w-22 h-22 sm:w-36 sm:h-36 lg:w-48 lg:h-48", color: "blue" },
    { top: "7%", left: "2%", size: "w-18 h-18 sm:w-28 sm:h-28 lg:w-38 lg:h-38", color: "pink" },
    { top: "15%", right: "8%", size: "w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24", color: "white" },
    { top: "22%", left: "5%", size: "w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32", color: "purple" },
    { top: "40%", right: "0.5%", size: "w-20 h-20 sm:w-34 sm:h-34 lg:w-46 lg:h-46", color: "purple" },
    { top: "58%", left: "0.5%", size: "w-18 h-18 sm:w-30 sm:h-30 lg:w-42 lg:h-42", color: "pink" },
    { top: "74%", right: "1.5%", size: "w-18 h-18 sm:w-28 sm:h-28 lg:w-38 lg:h-38", color: "blue" },
    { top: "88%", left: "1.5%", size: "w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44", color: "purple" },
    { top: "96%", right: "4%", size: "w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28", color: "white" },
  ],

  // ── ABOUT: Floating alongside Ethos, 3 Principles & Agency Matrix ──
  about: [
    { top: "2%", left: "2%", size: "w-20 h-20 sm:w-32 sm:h-32 lg:w-46 lg:h-46", color: "pink" },
    { top: "6%", right: "2%", size: "w-18 h-18 sm:w-30 sm:h-30 lg:w-42 lg:h-42", color: "purple" },
    { top: "13%", left: "8%", size: "w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28", color: "blue" },
    { top: "23%", right: "6%", size: "w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24", color: "white" },
    { top: "36%", left: "0.5%", size: "w-18 h-18 sm:w-28 sm:h-28 lg:w-40 lg:h-40", color: "white" },
    { top: "52%", right: "0.5%", size: "w-22 h-22 sm:w-34 sm:h-34 lg:w-48 lg:h-48", color: "pink" },
    { top: "68%", left: "1%", size: "w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44", color: "blue" },
    { top: "82%", right: "1%", size: "w-18 h-18 sm:w-28 sm:h-28 lg:w-38 lg:h-38", color: "purple" },
    { top: "95%", left: "3%", size: "w-14 h-14 sm:w-22 sm:h-22 lg:w-30 lg:h-30", color: "pink" },
  ],

  // ── CONTACT: Framing Direct Channels, 3-Step Process & Lead Form ──
  contact: [
    { top: "3%", right: "2%", size: "w-22 h-22 sm:w-34 sm:h-34 lg:w-48 lg:h-48", color: "purple" },
    { top: "7%", left: "2%", size: "w-18 h-18 sm:w-30 sm:h-30 lg:w-40 lg:h-40", color: "blue" },
    { top: "16%", right: "6%", size: "w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28", color: "pink" },
    { top: "25%", left: "4%", size: "w-12 h-12 sm:w-18 sm:h-18 lg:w-26 lg:h-26", color: "white" },
    { top: "41%", left: "0.5%", size: "w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44", color: "purple" },
    { top: "60%", right: "0.5%", size: "w-18 h-18 sm:w-30 sm:h-30 lg:w-42 lg:h-42", color: "white" },
    { top: "76%", left: "1%", size: "w-18 h-18 sm:w-28 sm:h-28 lg:w-38 lg:h-38", color: "pink" },
    { top: "88%", right: "2%", size: "w-16 h-16 sm:w-26 sm:h-26 lg:w-36 lg:h-36", color: "blue" },
    { top: "96%", left: "4%", size: "w-14 h-14 sm:w-20 sm:h-20 lg:w-26 lg:h-26", color: "purple" },
  ],

  // Fallback subpage
  subpage: [
    { top: "2%", left: "1%", size: "w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44", color: "purple" },
    { top: "7%", right: "2%", size: "w-18 h-18 sm:w-30 sm:h-30 lg:w-40 lg:h-40", color: "pink" },
    { top: "22%", left: "2%", size: "w-16 h-16 sm:w-28 sm:h-28 lg:w-40 lg:h-40", color: "blue" },
    { top: "40%", right: "1%", size: "w-18 h-18 sm:w-30 sm:h-30 lg:w-42 lg:h-42", color: "purple" },
    { top: "62%", left: "1%", size: "w-18 h-18 sm:w-28 sm:h-28 lg:w-38 lg:h-38", color: "pink" },
    { top: "82%", right: "2%", size: "w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44", color: "blue" },
    { top: "96%", left: "3%", size: "w-14 h-14 sm:w-22 sm:h-22 lg:w-28 lg:h-28", color: "white" },
  ],
};

// 2. Randomized Tiny Scattered Beads per screen
export const TINY_ORB_CONFIGURATIONS: Record<ScreenType, TinyOrbConfig[]> = {
  home: [
    { top: "8%", left: "15%", color: "#fca5a5", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "12%", right: "25%", color: "#c084fc", size: "w-1.5 h-1.5 sm:w-2 sm:h-2" },
    { top: "22%", left: "22%", color: "#fca5a5", size: "w-2.5 h-2.5 sm:w-4 sm:h-4" },
    { top: "45%", left: "30%", color: "#a78bfa", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "65%", left: "18%", color: "#93c5fd", size: "w-1.5 h-1.5 sm:w-2 sm:h-2" },
    { top: "88%", left: "25%", color: "#c084fc", size: "w-2 h-2 sm:w-3 sm:h-3" },
  ],
  work: [
    { top: "4%", left: "12%", color: "#fca5a5", size: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" },
    { top: "9%", right: "16%", color: "#c084fc", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "18%", left: "20%", color: "#93c5fd", size: "w-2 h-2 sm:w-2.5 sm:h-2.5" },
    { top: "32%", right: "10%", color: "#fca5a5", size: "w-2.5 h-2.5 sm:w-4 sm:h-4" },
    { top: "50%", left: "12%", color: "#a78bfa", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "68%", right: "14%", color: "#fca5a5", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "84%", left: "15%", color: "#93c5fd", size: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" },
    { top: "94%", right: "18%", color: "#c084fc", size: "w-2 h-2 sm:w-3 sm:h-3" },
  ],
  services: [
    { top: "5%", right: "14%", color: "#c084fc", size: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" },
    { top: "11%", left: "14%", color: "#fca5a5", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "20%", right: "20%", color: "#93c5fd", size: "w-2 h-2 sm:w-2.5 sm:h-2.5" },
    { top: "35%", left: "10%", color: "#a78bfa", size: "w-2.5 h-2.5 sm:w-4 sm:h-4" },
    { top: "54%", right: "11%", color: "#fca5a5", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "72%", left: "12%", color: "#c084fc", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "87%", right: "16%", color: "#93c5fd", size: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" },
  ],
  about: [
    { top: "4%", left: "16%", color: "#fca5a5", size: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" },
    { top: "8%", right: "12%", color: "#c084fc", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "17%", right: "24%", color: "#fca5a5", size: "w-2 h-2 sm:w-2.5 sm:h-2.5" },
    { top: "30%", left: "12%", color: "#93c5fd", size: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" },
    { top: "48%", right: "14%", color: "#a78bfa", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "66%", left: "10%", color: "#fca5a5", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "85%", right: "12%", color: "#c084fc", size: "w-2.5 h-2.5 sm:w-4 sm:h-4" },
  ],
  contact: [
    { top: "5%", right: "15%", color: "#c084fc", size: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" },
    { top: "10%", left: "12%", color: "#fca5a5", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "21%", left: "18%", color: "#93c5fd", size: "w-2 h-2 sm:w-2.5 sm:h-2.5" },
    { top: "36%", right: "12%", color: "#a78bfa", size: "w-2.5 h-2.5 sm:w-4 sm:h-4" },
    { top: "52%", left: "14%", color: "#fca5a5", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "70%", right: "10%", color: "#c084fc", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "89%", left: "16%", color: "#93c5fd", size: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" },
  ],
  subpage: [
    { top: "6%", left: "14%", color: "#fca5a5", size: "w-2 h-2 sm:w-3 sm:h-3" },
    { top: "10%", right: "22%", color: "#c084fc", size: "w-1.5 h-1.5 sm:w-2 sm:h-2" },
    { top: "25%", left: "18%", color: "#fca5a5", size: "w-2.5 h-2.5 sm:w-4 sm:h-4" },
    { top: "60%", left: "15%", color: "#93c5fd", size: "w-1.5 h-1.5 sm:w-2 sm:h-2" },
    { top: "88%", right: "18%", color: "#c084fc", size: "w-2 h-2 sm:w-3 sm:h-3" },
  ],
};

// 3. Dot Grids randomized per screen
export const DOT_GRID_CONFIGURATIONS: Record<ScreenType, DotGridConfig[]> = {
  home: [
    { top: "5%", right: "10%" },
    { top: "15%", left: "5%" },
    { top: "30%", right: "5%" },
    { top: "45%", left: "8%" },
    { top: "65%", right: "8%" },
    { top: "80%", left: "10%" },
    { top: "90%", right: "12%" },
  ],
  work: [
    { top: "5%", left: "5%" },
    { top: "18%", right: "4%" },
    { top: "40%", left: "2%" },
    { top: "64%", right: "3%" },
    { top: "86%", left: "4%" },
  ],
  services: [
    { top: "4%", right: "6%" },
    { top: "16%", left: "4%" },
    { top: "38%", right: "2%" },
    { top: "60%", left: "3%" },
    { top: "84%", right: "5%" },
  ],
  about: [
    { top: "5%", left: "6%" },
    { top: "24%", right: "4%" },
    { top: "48%", left: "3%" },
    { top: "72%", right: "4%" },
    { top: "91%", left: "5%" },
  ],
  contact: [
    { top: "4%", left: "7%" },
    { top: "20%", right: "5%" },
    { top: "44%", left: "3%" },
    { top: "68%", right: "4%" },
    { top: "89%", left: "6%" },
  ],
  subpage: [
    { top: "4%", right: "8%" },
    { top: "22%", left: "4%" },
    { top: "45%", right: "6%" },
    { top: "68%", left: "6%" },
    { top: "88%", right: "8%" },
  ],
};

// 4. Wave Paths randomized per screen
export const WAVE_CURVES: Record<ScreenType, WaveCurveConfig[]> = {
  home: [
    { d: "M-10,18 C 30,8 70,28 110,18", stroke: "#d8b4e2", width: "0.2", dashed: true },
    { d: "M-10,34 C 40,44 60,14 110,24", stroke: "#fbcfe8", width: "0.1" },
    { d: "M-10,58 C 25,48 75,68 110,58", stroke: "#c4b5fd", width: "0.2", dashed: true },
    { d: "M-10,82 C 30,92 80,72 110,82", stroke: "#fbcfe8", width: "0.1" },
  ],
  work: [
    { d: "M-10,14 C 25,24 65,4 110,16", stroke: "#d8b4e2", width: "0.22", dashed: true },
    { d: "M-10,32 C 35,20 75,42 110,28", stroke: "#fbcfe8", width: "0.12" },
    { d: "M-10,54 C 30,64 70,44 110,56", stroke: "#c4b5fd", width: "0.2", dashed: true },
    { d: "M-10,78 C 40,68 80,88 110,76", stroke: "#fbcfe8", width: "0.12" },
  ],
  services: [
    { d: "M-10,20 C 35,10 75,32 110,18", stroke: "#c4b5fd", width: "0.22", dashed: true },
    { d: "M-10,38 C 25,48 65,18 110,30", stroke: "#fbcfe8", width: "0.12" },
    { d: "M-10,62 C 40,50 80,72 110,60", stroke: "#d8b4e2", width: "0.2", dashed: true },
    { d: "M-10,84 C 20,94 70,74 110,86", stroke: "#fbcfe8", width: "0.12" },
  ],
  about: [
    { d: "M-10,16 C 40,6 60,26 110,14", stroke: "#fbcfe8", width: "0.14" },
    { d: "M-10,36 C 20,46 80,24 110,34", stroke: "#d8b4e2", width: "0.22", dashed: true },
    { d: "M-10,58 C 35,46 65,70 110,56", stroke: "#c4b5fd", width: "0.2", dashed: true },
    { d: "M-10,80 C 45,90 75,70 110,82", stroke: "#fbcfe8", width: "0.12" },
  ],
  contact: [
    { d: "M-10,15 C 30,25 70,5 110,17", stroke: "#d8b4e2", width: "0.2", dashed: true },
    { d: "M-10,34 C 45,22 65,44 110,30", stroke: "#fbcfe8", width: "0.12" },
    { d: "M-10,56 C 20,68 80,48 110,60", stroke: "#c4b5fd", width: "0.2", dashed: true },
    { d: "M-10,82 C 35,72 75,92 110,80", stroke: "#fbcfe8", width: "0.12" },
  ],
  subpage: [
    { d: "M-10,18 C 30,8 70,28 110,18", stroke: "#d8b4e2", width: "0.2", dashed: true },
    { d: "M-10,34 C 40,44 60,14 110,24", stroke: "#fbcfe8", width: "0.1" },
    { d: "M-10,58 C 25,48 75,68 110,58", stroke: "#c4b5fd", width: "0.2", dashed: true },
    { d: "M-10,82 C 30,92 80,72 110,82", stroke: "#fbcfe8", width: "0.1" },
  ],
};
