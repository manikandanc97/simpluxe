"use client";

import { ECOMMERCE_COPY } from "@/lib/data/service-mockups";

import { AnimatePresence, m as motion } from "motion/react";
import { useEffect, useState } from "react";
import { MockupWrapper } from "./mockup-wrapper";

// Animation stages
type Stage = "browse" | "selected" | "payment" | "success";

const STAGE_DURATION: Record<Stage, number> = {
  browse:   2400,
  selected: 2200,
  payment:  2000,
  success:  2800,
};

const PRODUCTS = [
  { color: "bg-rose-300", label: ECOMMERCE_COPY.text2499, name: ECOMMERCE_COPY.wirelessHeadset },
  { color: "bg-sky-300", label: ECOMMERCE_COPY.text1199, name: ECOMMERCE_COPY.smartWatch },
  { color: "bg-orange-300", label: ECOMMERCE_COPY.text899,   name: ECOMMERCE_COPY.airBuds },
] as const;

const SELECTED_PRODUCT = 0; // always animate the first product being selected

export function EcommerceMockup({ isActive }: { isActive?: boolean }) {
  return <EcommerceSequence isActive={isActive} />;
}

function EcommerceSequence({ isActive }: { isActive?: boolean }) {
  const [stage, setStage] = useState<Stage>("browse");

  useEffect(() => {
    if (!isActive) return;

    const CYCLE: Stage[] = ["browse", "selected", "payment", "success"];
    let currentIdx = CYCLE.indexOf(stage);

    const timer = setTimeout(() => {
      currentIdx = (currentIdx + 1) % CYCLE.length;
      setStage(CYCLE[currentIdx]);
    }, STAGE_DURATION[stage]);

    return () => clearTimeout(timer);
  }, [stage, isActive]);

  return (
    <MockupWrapper
      gradientClass="bg-rose-50"
      innerClassName="gap-3 overflow-hidden p-3.5"
      outerChildren={
        <motion.div
          animate={isActive ? { opacity: [0.85, 1, 0.85] } : { opacity: 1 }}
          transition={{ duration: 3, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
          className="absolute top-2 right-2 z-10 text-white text-2xs font-bold px-2 py-1 rounded-full shadow-lg sm:-top-3 sm:-right-3"
          style={{
            backgroundColor: stage === "success" ? "#BE123C" : "#DC2626",
            transition: "background-color 0.4s ease",
          }}
        >
          {stage === "success" ? ECOMMERCE_COPY.orderDone : ECOMMERCE_COPY.text42Conv}
        </motion.div>
      }
    >
        {/* ── STAGE CONTENT ── */}
        <AnimatePresence mode="wait">

          {/* ── BROWSE + SELECTED ── */}
          {(stage === "browse" || stage === "selected") && (
            <motion.div
              key="browse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex min-h-0 flex-1 flex-col justify-between gap-3"
            >
              {/* Browser bar */}
              <div className="flex items-center justify-between border-b border-black/4 pb-1">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                  <div className="w-2 h-2 rounded-full bg-rose-400" />
                  <div className="w-2 h-2 rounded-full bg-orange-300" />
                </div>
                {/* Cart badge */}
                <div className="relative">
                  <div className="w-6 h-6 rounded-lg bg-orange-700/10 flex items-center justify-center text-orange-700">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                  </div>
                  <motion.div
                    animate={stage === "selected" ? { scale: [1, 1.5, 1], backgroundColor: ["#DC2626", "#BE123C", "#DC2626"] } : { scale: 1 }}
                    transition={{ duration: 0.5, repeat: stage === "selected" ? 2 : 0 }}
                    className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-orange-700 flex items-center justify-center"
                  >
                    <motion.span
                      animate={stage === "selected" ? { opacity: [0, 1] } : { opacity: 1 }}
                      className="text-micro text-white font-bold"
                    >
                      {stage === "selected" ? ECOMMERCE_COPY.cartCountSelected : ECOMMERCE_COPY.cartCountEmpty}
                    </motion.span>
                  </motion.div>
                </div>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-3 gap-2">
                {PRODUCTS.map((product, i) => (
                  <motion.div
                    key={i}
                    animate={
                      stage === "selected" && i === SELECTED_PRODUCT
                        ? { scale: [1, 1.04, 1.02] }
                        : stage === "selected" && i !== SELECTED_PRODUCT
                        ? { opacity: 0.5, scale: 0.95 }
                        : { scale: 1, opacity: 1 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col gap-1 relative"
                  >
                    <div className={`aspect-square rounded-xl ${product.color} border border-white/70 flex items-center justify-center relative overflow-hidden`}>
                      <div className="w-5 h-5 rounded-lg bg-white/60" />
                      {/* Selected glow ring */}
                      {stage === "selected" && i === SELECTED_PRODUCT && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 rounded-xl border-2 border-orange-700"
                        />
                      )}
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-200" />
                    <span className="text-2xs font-bold text-foreground">{product.label}</span>

                    {/* "Tap" ripple on selected */}
                    {stage === "selected" && i === SELECTED_PRODUCT && (
                      <motion.div
                        initial={{ scale: 0.3, opacity: 0.8 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-orange-700/30 pointer-events-none"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Add to cart row */}
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-slate-50 border border-black/5 rounded-lg p-1.5 flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-lg bg-rose-200 flex-shrink-0" />
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span className="text-2xs font-semibold text-foreground leading-none">{PRODUCTS[SELECTED_PRODUCT].name}</span>
                    <span className="text-3xs text-orange-700 font-bold">{PRODUCTS[SELECTED_PRODUCT].label}</span>
                  </div>
                </div>
                <motion.div
                  animate={stage === "selected"
                    ? { scale: [1, 0.88, 1.06, 1], backgroundColor: ["#DC2626", "#BE123C", "#BE123C"] }
                    : { scale: 1, backgroundColor: "#DC2626" }
                  }
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="h-10 px-3.5 rounded-lg flex items-center justify-center text-white text-xs font-bold gap-1"
                >
                  {stage === "selected" ? (
                    <>
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 400 }}
                        width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </motion.svg>
                      {ECOMMERCE_COPY.added}</>
                  ) : (
                    <>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                      {ECOMMERCE_COPY.add}</>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ── PAYMENT STAGE ── */}
          {stage === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="flex min-h-0 flex-1 flex-col justify-between gap-3"
            >
              {/* Header */}
              <div className="flex items-center gap-2 border-b border-black/4 pb-1.5">
                <div className="w-5 h-5 rounded-lg bg-orange-700/10 flex items-center justify-center text-orange-700">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-foreground">{ECOMMERCE_COPY.secureCheckout}</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="text-3xs text-rose-600 font-semibold">{ECOMMERCE_COPY.ssl}</span>
                </div>
              </div>

              {/* Order summary */}
              <div className="bg-slate-50 rounded-xl p-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-200 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-2xs font-semibold text-foreground">{PRODUCTS[SELECTED_PRODUCT].name}</div>
                  <div className="text-2xs text-muted-foreground">{ECOMMERCE_COPY.qty1}</div>
                </div>
                <span className="text-xs font-black text-foreground">{PRODUCTS[SELECTED_PRODUCT].label}</span>
              </div>

              {/* Card input (mock) */}
              <div className="flex flex-col gap-1.5">
                <div className="bg-white border border-black/7 rounded-lg px-2 py-1.5 flex items-center gap-2">
                  <svg width="16" height="10" viewBox="0 0 32 20" fill="none">
                    <rect width="32" height="20" rx="3" fill="#9F1239"/>
                    <rect x="2" y="7" width="10" height="6" rx="1" fill="#FDA4AF"/>
                  </svg>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-200" />
                  <span className="text-3xs font-mono text-muted-foreground">{ECOMMERCE_COPY.symbol}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-white border border-black/7 rounded-lg px-2 py-1.5 h-5 flex items-center">
                    <div className="w-full h-1.5 rounded-full bg-slate-200" />
                  </div>
                  <div className="bg-white border border-black/7 rounded-lg px-2 py-1.5 h-5 flex items-center">
                    <div className="w-8 h-1.5 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>

              {/* Pay button with loading */}
              <div className="relative w-full h-8 rounded-xl overflow-hidden flex items-center justify-center gap-2 text-white text-xs font-bold bg-orange-700">
                {/* GPU-friendly shimmer effect */}
                <motion.div
                  animate={isActive ? { x: ["-100%", "200%"] } : { x: "-100%" }}
                  transition={{ duration: 1.5, repeat: isActive ? Infinity : 0, ease: "linear" }}
                  className="absolute inset-0 z-0 bg-orange-600/30 w-full"
                />
                <div className="relative z-10 flex items-center gap-2">
                  {/* Spinner */}
                  <motion.div
                    animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.8, repeat: isActive ? Infinity : 0, ease: "linear" }}
                    className="w-3 h-3 rounded-full border-2 border-white/40 border-t-white"
                  />
                  {ECOMMERCE_COPY.processingPayment}</div>
              </div>

              {/* Security badges */}
              <div className="flex items-center justify-center gap-3">
                {[ECOMMERCE_COPY.razorpay, ECOMMERCE_COPY.stripe, ECOMMERCE_COPY.upi].map((p) => (
                  <span key={p} className="text-3xs font-semibold text-muted-foreground bg-slate-100 px-1.5 py-0.5 rounded">{p}</span>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── SUCCESS STAGE ── */}
          {stage === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 py-2"
            >
              {/* Big checkmark */}
              <div className="relative flex items-center justify-center">
                {/* Pulse rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    initial={{ scale: 0.5, opacity: 0.6 }}
                    animate={isActive ? { scale: 1 + ring * 0.35, opacity: 0 } : { scale: 0.5, opacity: 0 }}
                    transition={{ duration: 1.2, delay: ring * 0.18, repeat: isActive ? Infinity : 0, ease: "easeOut" }}
                    className="absolute w-14 h-14 rounded-full bg-rose-400/30 pointer-events-none"
                  />
                ))}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.1 }}
                  className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg relative z-10"
                >
                  <motion.svg
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  >
                    <motion.polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                </motion.div>
              </div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-1 text-center"
              >
                <span className="text-sm font-extrabold tracking-tight text-foreground">{ECOMMERCE_COPY.orderPlaced}</span>
                <span className="text-2xs text-muted-foreground font-medium">{PRODUCTS[SELECTED_PRODUCT].name} {ECOMMERCE_COPY.symbol2}{PRODUCTS[SELECTED_PRODUCT].label}</span>
              </motion.div>

              {/* Order ID + ETA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="w-full bg-rose-50 border border-rose-100 rounded-xl p-2 flex items-center justify-between"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-3xs text-muted-foreground">{ECOMMERCE_COPY.orderId}</span>
                  <span className="text-2xs font-mono font-bold text-foreground">{ECOMMERCE_COPY.orderNumber}</span>
                </div>
                <div className="flex flex-col gap-0.5 items-end">
                  <span className="text-3xs text-muted-foreground">{ECOMMERCE_COPY.deliveryEta}</span>
                  <span className="text-2xs font-bold text-rose-600">{ECOMMERCE_COPY.text23Days}</span>
                </div>
              </motion.div>

              {/* Floating confetti dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: [0, (i % 2 === 0 ? 1 : -1) * (10 + i * 6)],
                    opacity: [1, 0],
                    scale: [1, 0.4],
                  }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                  className="absolute w-2 h-2 rounded-full pointer-events-none"
                  style={{
                    backgroundColor: ["#DC2626", "#BE123C", "#F43F5E", "#F97316", "#E11D48", "#FB7185"][i],
                    top: "40%",
                    left: `${20 + i * 12}%`,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
    </MockupWrapper>
  );
}


