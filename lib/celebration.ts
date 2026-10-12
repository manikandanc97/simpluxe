import { prefersReducedMotion } from "@/lib/motion";

type Spark = {
  x: number; y: number; vx: number; vy: number;
  age: number; lifetime: number; color: string; size: number;
};

/** A brief, card-local sparkler and firework sequence; returns complete cleanup. */
export function startSparklerCelebration(canvas: HTMLCanvasElement) {
  if (prefersReducedMotion()) return () => {};
  const context = canvas.getContext("2d");
  if (!context) return () => {};
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  const colors = ["#932f56", "#c87999", "#e4b972", "#f3d6a1"];
  const compact = canvas.clientWidth < 480;
  let width = 0;
  let height = 0;
  let frame = 0;
  let stopped = false;
  let previous = 0;
  let started = 0;
  let wave = 0;
  let emission = 0;
  const sparks: Spark[] = [];

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  const addSpark = (x: number, y: number, angle: number, speed: number) => {
    if (sparks.length >= (compact ? 140 : 220)) return;
    sparks.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      age: 0, lifetime: 0.65 + Math.random() * 0.7,
      color: colors[Math.floor(Math.random() * colors.length)], size: 0.8 + Math.random() * 1.2 });
  };
  const burst = (x: number, y: number) => {
    const count = compact ? 22 : 34;
    for (let index = 0; index < count; index++) {
      addSpark(x, y, (index / count) * Math.PI * 2, 35 + Math.random() * 100);
    }
  };
  const stop = () => {
    stopped = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    media.removeEventListener("change", handleMotionChange);
    context.clearRect(0, 0, width, height);
    sparks.length = 0;
  };
  function handleMotionChange() {
    if (media.matches) stop();
  }
  media.addEventListener("change", handleMotionChange);

  const paint = (now: number) => {
    if (stopped) return;
    if (!started) started = now;
    const elapsed = (now - started) / 1000;
    const delta = Math.min((now - (previous || now)) / 1000, 0.04);
    previous = now;
    context.clearRect(0, 0, width, height);

    const timings = [0.12, 0.48, 0.84];
    if (wave < timings.length && elapsed >= timings[wave]) {
      const positions = [[0.25, 0.4], [0.76, 0.3], [0.5, 0.34]];
      burst(width * positions[wave][0], height * positions[wave][1]);
      wave++;
    }
    // Two short fountains add sparkler trails around the confirmation emblem.
    if (elapsed < 1.3) {
      emission += delta;
      while (emission > 0.035) {
        for (const side of [-1, 1]) {
          addSpark(width / 2 + side * 46, height * 0.68,
            -Math.PI / 2 + side * (0.25 + Math.random() * 0.7), 45 + Math.random() * 100);
        }
        emission -= 0.035;
      }
    }

    for (let index = sparks.length - 1; index >= 0; index--) {
      const spark = sparks[index];
      spark.age += delta;
      if (spark.age >= spark.lifetime) { sparks.splice(index, 1); continue; }
      const previousX = spark.x;
      const previousY = spark.y;
      spark.vx *= Math.exp(-1.7 * delta);
      spark.vy += 65 * delta;
      spark.x += spark.vx * delta;
      spark.y += spark.vy * delta;
      context.globalAlpha = Math.max(0, 1 - spark.age / spark.lifetime);
      context.strokeStyle = spark.color;
      context.fillStyle = spark.color;
      context.lineWidth = spark.size;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(previousX, previousY);
      context.lineTo(spark.x + spark.vx * 0.035, spark.y + spark.vy * 0.035);
      context.stroke();
      // Small star-shaped highlights, rather than a full-screen flash.
      if (index % 5 === 0) {
        const ray = spark.size * 2;
        context.beginPath();
        context.moveTo(spark.x - ray, spark.y); context.lineTo(spark.x + ray, spark.y);
        context.moveTo(spark.x, spark.y - ray); context.lineTo(spark.x, spark.y + ray);
        context.stroke();
      }
    }
    context.globalAlpha = 1;
    if (elapsed < 3) frame = requestAnimationFrame(paint);
    else stop();
  };
  frame = requestAnimationFrame(paint);
  return stop;
}
