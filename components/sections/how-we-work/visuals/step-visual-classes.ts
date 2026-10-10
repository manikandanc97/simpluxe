// Shared Tailwind utilities keep the four process scenes aligned.
// Container units scale the artwork with its panel rather than the viewport.
export const scene = {
  scene: "@container/process pointer-events-none relative w-full max-w-188.75 select-none",
  canvas: "relative isolate aspect-process w-full @max-scene-sm/process:aspect-process-tall",
  blueprint: "absolute top-1/5 left-3/100 z-0 h-49/100 w-43/100 rounded-scene-3-2 border border-white/90 bg-white/88 shadow-card scene-tilt-negative-1 animate-process-float float-duration-8s motion-reduce:animate-none @max-scene-sm/process:top-29/100 @max-scene-sm/process:left-1/50 @max-scene-sm/process:h-41/100 @max-scene-sm/process:w-23/50",
  blueprintHeader: "absolute top-2/25 left-7/100 flex items-center gap-scene-1 text-scene-9 font-bold tracking-tight whitespace-nowrap text-zinc-500 icon:size-scene-icon-2-4cqw icon:shrink-0",
  ideas: "absolute top-1/50 left-3/200 z-2 w-6/25 motion-reduce:-rotate-8 rounded-scene-1-8 border border-yellow-300 bg-yellow-100 px-scene-1-9 py-scene-1-65 shadow-card scene-tilt-negative-6 animate-process-float float-duration-6s float-delay-negative-0-2s motion-reduce:animate-none @max-scene-sm/process:top-3/100 @max-scene-sm/process:w-8/25",
  ideasHeader: "flex items-center gap-scene-1 icon:size-scene-2-1 icon:text-amber-600 span:text-scene-8 span:font-bold span:text-zinc-800",
  ideasList: "mt-scene-0-6 flex flex-col gap-scene-0-45 text-scene-5 leading-tight text-yellow-800",
  ideasArrow: "absolute right-scene-0-8 -bottom-scene-2-4 size-scene-3-7 text-primary path:stroke-current path:stroke-soft path:stroke-cap-round path:stroke-join-round",
  annotation: "absolute top-17/100 right-37/100 z-2 motion-reduce:-rotate-3 text-right text-scene-8 leading-none font-bold text-primary scene-tilt-negative-2 animate-process-float float-duration-5s float-delay-negative-1s motion-reduce:animate-none icon:ml-auto icon:block icon:size-scene-3-7 icon:rotate-12 path:stroke-current path:stroke-soft path:stroke-cap-round path:stroke-join-round @max-scene-sm/process:top-23/100 @max-scene-sm/process:right-19/50 @max-scene-xs/process:right-23/50",
  market: "absolute top-1/20 right-21/1000 z-4 w-17/50 rounded-scene-2-65 border px-scene-2-5 pt-scene-2-4 pb-scene-3 scene-tilt-1 animate-process-float float-duration-7s float-delay-negative-0-5s motion-reduce:animate-none @max-scene-sm/process:top-1/25 @max-scene-sm/process:w-9/25 @max-scene-xs/process:top-1/50 @max-scene-xs/process:w-21/50",
  marketSurface: "border-zinc-100 bg-white/96 shadow-card",
  marketHeader: "flex items-center justify-between gap-scene-1 text-scene-5 font-bold whitespace-nowrap text-zinc-800 icon:size-scene-2-4 icon:shrink-0 @max-scene-sm/process:whitespace-normal",
  marketArrow: "absolute -bottom-scene-7 left-scene-8-8 h-scene-6-4 w-scene-4-2 -rotate-12 text-primary path:stroke-current path:stroke-soft path:stroke-cap-round path:stroke-join-round",
  result: "absolute top-29/50 right-13/250 z-4 motion-reduce:rotate-2 rounded-scene-2 border border-zinc-200 bg-white/96 px-scene-1-65 py-scene-1 text-scene-7 leading-tight font-bold text-zinc-800 shadow-elevated scene-tilt-2 animate-process-float float-duration-5-5s float-delay-negative-1-2s motion-reduce:animate-none @max-scene-xs/process:top-16/25 @max-scene-xs/process:right-1/50",
  character: "absolute bottom-27/500 left-53/1000 z-3 w-911/1000 animate-process-bob motion-reduce:animate-none",
  image: "block h-auto w-full drop-shadow-elevated",
} as const;
