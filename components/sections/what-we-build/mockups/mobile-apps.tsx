"use client";

import { MOBILE_APPS_COPY } from "@/lib/content/services";

import { AnimatePresence, m as motion } from "motion/react";
import { useEffect, useState } from "react";
import { MockupWrapper } from "./mockup-wrapper";

type Screen = "home" | "feed" | "profile" | "activity";
const SCREENS: Screen[] = ["home", "feed", "profile", "activity"];
const DURATIONS: Record<Screen, number> = { home: 2000, feed: 2000, profile: 2200, activity: 2200 };

// ── Bottom Tab Bar ─────────────────────────────────────────
const TABS = [
  { icon: "⊞", label: MOBILE_APPS_COPY.home },
  { icon: "◎", label: MOBILE_APPS_COPY.explore },
  { icon: "♡", label: MOBILE_APPS_COPY.saved },
  { icon: "◷", label: MOBILE_APPS_COPY.activity },
] as const;

function TabBar({ active }: { active: number }) {
  return (
    <div className="flex items-center justify-around border-t border-black/[0.05] pt-2 pb-0.5 bg-white">
      {TABS.map((tab, i) => (
        <motion.div
          key={i}
          animate={{ color: i === active ? "#922F55" : "#9ca3af" }}
          className="flex flex-col items-center gap-0.5"
        >
          <span className="text-sm leading-none">{tab.icon}</span>
          <span className="text-micro font-semibold">{tab.label}</span>
          {i === active && (
            <motion.div layoutId="tab-dot" className="w-1 h-1 rounded-full bg-primary" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ── Home Screen ────────────────────────────────────────────
function HomeScreen() {
  return (
    <motion.div key="home" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} className="absolute inset-0 flex flex-col gap-2.5 overflow-hidden">
      {/* Top greeting */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xs text-muted-foreground font-medium">{MOBILE_APPS_COPY.goodMorning}</div>
          <div className="text-xs font-extrabold text-foreground tracking-tight">{MOBILE_APPS_COPY.hiArjun}</div>
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center">
          <span className="text-3xs text-white font-bold">{MOBILE_APPS_COPY.ak}</span>
        </div>
      </div>

      {/* Hero card */}
      <div className="w-full rounded-2xl p-3 flex flex-col gap-2 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #922F55, #D23D78 60%, #6C2BB8)" }}>
        <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }} className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
        <span className="text-3xs text-white/70 font-semibold">{MOBILE_APPS_COPY.premiumPlan}</span>
        <span className="text-xs text-white font-black leading-tight">{MOBILE_APPS_COPY.unlockAllProFeatures}</span>
        <div className="flex items-center gap-1.5">
          <div className="px-2 py-0.5 bg-white rounded-full text-3xs font-bold text-primary">{MOBILE_APPS_COPY.upgradeNow}</div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: MOBILE_APPS_COPY.orders, value: MOBILE_APPS_COPY.text24, color: "#0891B2" },
          { label: MOBILE_APPS_COPY.points, value: MOBILE_APPS_COPY.text12k, color: "#7C3AED" },
          { label: MOBILE_APPS_COPY.saved, value: MOBILE_APPS_COPY.text480, color: "#059669" },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07 }} className="bg-slate-50 border border-black/[0.04] rounded-xl p-2 flex flex-col gap-0.5 items-center">
            <span className="text-xs font-black" style={{ color: s.color }}>{s.value}</span>
            <span className="text-micro text-muted-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Feed Screen ────────────────────────────────────────────
function FeedScreen() {
  const posts = [
    { user: MOBILE_APPS_COPY.feedFirstUser, time: MOBILE_APPS_COPY.feedFirstTime, dot: "#D23D78", text: MOBILE_APPS_COPY.justLaunchedTheNewApp },
    { user: MOBILE_APPS_COPY.feedSecondUser, time: MOBILE_APPS_COPY.feedSecondTime, dot: "#0891B2", text: MOBILE_APPS_COPY.checkOutThisFeatureUpdate },
  ];
  return (
    <motion.div key="feed" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} className="absolute inset-0 flex flex-col gap-2 overflow-hidden">
      <div className="text-xs font-extrabold text-foreground tracking-tight">{MOBILE_APPS_COPY.feed}</div>
      {posts.map((post, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="bg-slate-50 border border-black/[0.04] rounded-xl p-2.5 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: post.dot }} />
            <div>
              <div className="text-3xs font-bold text-foreground">{post.user}</div>
              <div className="text-micro text-muted-foreground">{post.time}</div>
            </div>
          </div>
          <div className="text-3xs text-zinc-800 leading-snug">{post.text}</div>
          {/* Image placeholder */}
          <div className="w-full h-8 rounded-lg bg-gradient-to-r from-slate-100 to-slate-200" />
          <div className="flex items-center gap-2">
            {[MOBILE_APPS_COPY.text48, MOBILE_APPS_COPY.text12, MOBILE_APPS_COPY.share].map((a, j) => (
              <span key={j} className="text-micro text-muted-foreground font-medium">{a}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Profile Screen ─────────────────────────────────────────
function ProfileScreen() {
  return (
    <motion.div key="profile" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} className="absolute inset-0 flex flex-col gap-2.5 items-center overflow-hidden">
      {/* Avatar */}
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 400, damping: 22 }} className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-violet-700 flex items-center justify-center shadow-md">
        <span className="text-sm text-white font-black">{MOBILE_APPS_COPY.ak}</span>
      </motion.div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-xs font-extrabold text-foreground">{MOBILE_APPS_COPY.arjunKumar}</span>
        <span className="text-3xs text-muted-foreground">{MOBILE_APPS_COPY.arjunProMember}</span>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4">
        {[[MOBILE_APPS_COPY.profileStats[0], MOBILE_APPS_COPY.posts], [MOBILE_APPS_COPY.profileStats[1], MOBILE_APPS_COPY.followers], [MOBILE_APPS_COPY.profileStats[2], MOBILE_APPS_COPY.following]].map(([v, l], i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 + i * 0.07 }} className="flex flex-col items-center gap-0.5">
            <span className="text-xs font-black text-foreground">{v}</span>
            <span className="text-micro text-muted-foreground">{l}</span>
          </motion.div>
        ))}
      </div>

      {/* Edit profile button */}
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="w-full py-1.5 rounded-xl border border-primary flex items-center justify-center">
        <span className="text-3xs font-bold text-primary">{MOBILE_APPS_COPY.editProfile}</span>
      </motion.div>

      {/* Mini grid */}
      <div className="grid grid-cols-3 gap-1 w-full">
        {[
          "from-primary/20 to-pink-600/30",
          "from-chart-3/20 to-chart-3/30",
          "from-chart-2/20 to-chart-2/30",
        ].map((g, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35 + i * 0.06 }} className={`aspect-square rounded-lg bg-gradient-to-br ${g}`} />
        ))}
      </div>
    </motion.div>
  );
}

// ── Activity Screen ────────────────────────────────────────
function ActivityScreen() {
  const activities = [
    { icon: "♡", label: MOBILE_APPS_COPY.priyaLikedYourPost, time: MOBILE_APPS_COPY.activityTimes[0], color: "#D23D78" },
    { icon: "✦", label: MOBILE_APPS_COPY.newFollowerRahulS, time: MOBILE_APPS_COPY.activityTimes[1], color: "#7C3AED" },
    { icon: "◎", label: MOBILE_APPS_COPY.yourPostGot48Views, time: MOBILE_APPS_COPY.activityTimes[2], color: "#0891B2" },
  ];
  return (
    <motion.div key="activity" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} className="absolute inset-0 flex flex-col gap-2 overflow-hidden">
      <div className="text-xs font-extrabold text-foreground">{MOBILE_APPS_COPY.activity}</div>
      {activities.map((a, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-2 bg-slate-50 border border-black/[0.04] rounded-xl px-2.5 py-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs" style={{ backgroundColor: `${a.color}18`, color: a.color }}>{a.icon}</div>
          <span className="text-3xs text-zinc-800 flex-1 leading-snug">{a.label}</span>
          <span className="text-3xs text-muted-foreground flex-shrink-0">{a.time}</span>
        </motion.div>
      ))}

      {/* Progress bar */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="bg-slate-50 border border-black/[0.04] rounded-xl p-2.5 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-3xs font-semibold text-foreground">{MOBILE_APPS_COPY.profileCompletion}</span>
          <span className="text-3xs font-bold text-primary">{MOBILE_APPS_COPY.text82}</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #922F55, #D23D78)" }} />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main Mockup ────────────────────────────────────────────
export function MobileAppsMockup({ isActive }: { isActive?: boolean }) {
  const [screen, setScreen] = useState<Screen>("home");

  useEffect(() => {
    if (!isActive) { setScreen("home"); return; }
    let idx = SCREENS.indexOf(screen);
    const timer = setTimeout(() => {
      idx = (idx + 1) % SCREENS.length;
      setScreen(SCREENS[idx]);
    }, DURATIONS[screen]);
    return () => clearTimeout(timer);
  }, [screen, isActive]);

  const tabIndex = SCREENS.indexOf(screen);

  return (
    <MockupWrapper
      isActive={isActive}
      gradientClass="bg-gradient-to-tr from-pink-100/60 via-pink-50/50 to-violet-100/60"
      innerClassName="max-w-64 p-2 overflow-hidden"
    >
        {/* Status bar */}
        <div className="flex items-center justify-between px-3.5 pt-2.5 pb-1 bg-white">
          <span className="text-3xs font-bold text-foreground">{MOBILE_APPS_COPY.text941}</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5 items-end h-2.5">
              {[3, 5, 7, 9].map((h, i) => <div key={i} className="w-0.5 rounded-full bg-foreground" style={{ height: h }} />)}
            </div>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#121114" strokeWidth="2"><path d="M1 6s4-4 11-4 11 4 11 4M5 10s2.5-2 7-2 7 2 7 2M9 14s1-1 3-1 3 1 3 1M11 18h2"/></svg>
            <div className="flex items-center gap-0.5">
              <div className="w-4 h-2 rounded-xs border border-foreground/50 p-0.25">
                <div className="h-full w-4/5 rounded-xs bg-foreground/80" />
              </div>
            </div>
          </div>
        </div>

        {/* Screen content — fixed height so card never resizes */}
        <div className="px-3.5 py-2 relative overflow-hidden" style={{ height: 176 }}>
          <AnimatePresence mode="wait">
            {screen === "home"     && <HomeScreen />}
            {screen === "feed"     && <FeedScreen />}
            {screen === "profile"  && <ProfileScreen />}
            {screen === "activity" && <ActivityScreen />}
          </AnimatePresence>
        </div>

        {/* Bottom tab bar */}
        <TabBar active={tabIndex} />
      </MockupWrapper>
  );
}


