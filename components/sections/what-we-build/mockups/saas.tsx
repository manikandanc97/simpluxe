"use client";

import { SAAS_COPY } from "@/lib/data/service-mockups";
import { AnimatePresence, m as motion } from "motion/react";
import { useEffect, useState } from "react";
import { MockupWrapper } from "./mockup-wrapper";

type SaasScreen = "overview" | "tenants" | "billing";
const SCREENS: SaasScreen[] = ["overview", "tenants", "billing"];
const SCREEN_DURATIONS: Record<SaasScreen, number> = {
  overview: 3000,
  tenants: 2800,
  billing: 2800,
};

export function SaaSProductsMockup({ isActive }: { isActive?: boolean }) {
  const [currentScreen, setCurrentScreen] = useState<SaasScreen>("overview");

  useEffect(() => {
    if (!isActive) {
      const resetTimer = setTimeout(() => {
        setCurrentScreen("overview");
      }, 0);
      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(() => {
      setCurrentScreen((prev) => {
        const nextIdx = (SCREENS.indexOf(prev) + 1) % SCREENS.length;
        return SCREENS[nextIdx];
      });
    }, SCREEN_DURATIONS[currentScreen]);

    return () => clearTimeout(timer);
  }, [isActive, currentScreen]);

  return (
    <MockupWrapper
      gradientClass="bg-indigo-50"
      innerClassName="gap-2.5 p-3.5 sm:p-4"
    >
      {/* Top Application Bar */}
      <div className="flex items-center justify-between pb-1.5 border-b border-black/5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="ps-1 text-2xs font-mono text-muted-foreground">{SAAS_COPY.appName}</span>
        </div>
        <div className="flex items-center gap-1">
          <motion.div
            animate={isActive ? { scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] } : { scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
          />
          <span className="text-3xs font-medium text-emerald-600">{SAAS_COPY.liveStatus}</span>
        </div>
      </div>

      {/* Screen Selector Tabs */}
      <div className="flex items-center gap-1 bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60">
        {SAAS_COPY.tabs.map((tab) => {
          const isCurrent = currentScreen === tab.id;
          return (
            <button
              type="button"
              key={tab.id}
              onClick={() => setCurrentScreen(tab.id as SaasScreen)}
              className={`flex-1 text-3xs font-semibold py-1 rounded-md transition-all relative ${
                isCurrent ? "text-indigo-900 font-bold" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {isCurrent && (
                <motion.div
                  layoutId="saas-tab-pill"
                  className="absolute inset-0 bg-white rounded-md shadow-2xs border border-black/5"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area with Smooth Screen Switching */}
      <div className="relative min-h-0 w-full flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {currentScreen === "overview" && <OverviewScreen key="overview" isActive={isActive} />}
          {currentScreen === "tenants" && <TenantsScreen key="tenants" isActive={isActive} />}
          {currentScreen === "billing" && <BillingScreen key="billing" isActive={isActive} />}
        </AnimatePresence>
      </div>
    </MockupWrapper>
  );
}

// ── Screen 1: Overview & Telemetry Dashboard ──────────────────────────────────
function OverviewScreen({ isActive }: { isActive?: boolean }) {
  const barHeights = [40, 65, 30, 80, 95, 55, 85, 45, 75, 90, 65];

  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col gap-2"
    >
      {/* Dark Enterprise Telemetry Card */}
      <div className="rounded-xl bg-slate-900 p-2.5 text-white flex flex-col gap-2 border border-slate-800 shadow-sm flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded bg-indigo-500 flex items-center justify-center text-3xs font-black text-white">
              ⚡
            </div>
            <span className="text-2xs font-bold text-white">{SAAS_COPY.enterpriseSaas}</span>
          </div>
          <span className="text-3xs font-semibold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            {SAAS_COPY.multiTenantCloudSync.trim()}
          </span>
        </div>

        {/* Metric Row */}
        <div className="grid grid-cols-2 gap-1.5 bg-slate-800/80 rounded-lg p-1.5 border border-slate-700/60">
          <div>
            <div className="text-3xs text-slate-400">{SAAS_COPY.monthlyRevenue}</div>
            <div className="text-xs font-black text-white">{SAAS_COPY.revenue}</div>
          </div>
          <div className="text-right">
            <div className="text-3xs text-slate-400">{SAAS_COPY.cloudLatency}</div>
            <div className="text-xs font-mono font-bold text-emerald-400">{SAAS_COPY.latency}</div>
          </div>
        </div>

        {/* Live Data Throughput Waveform */}
        <div className="push-block-end flex flex-col gap-0.5">
          <div className="flex items-center justify-between text-3xs text-slate-400">
            <span>{SAAS_COPY.throughput}</span>
            <span className="font-mono text-indigo-300">{SAAS_COPY.throughputValue}</span>
          </div>
          <div className="flex items-end gap-1 h-5 pt-0.5">
            {barHeights.map((baseH, idx) => (
              <motion.div
                key={idx}
                className="flex-1 rounded-sm bg-indigo-500"
                animate={isActive ? {
                  height: [
                    `${baseH}%`,
                    `${Math.min(100, Math.max(25, baseH + (idx % 2 === 0 ? 25 : -20)))}%`,
                    `${baseH}%`
                  ],
                  opacity: [0.75, 1, 0.75]
                } : { height: `${baseH}%`, opacity: 0.8 }}
                transition={{
                  duration: 2,
                  repeat: isActive ? Infinity : 0,
                  ease: "easeInOut",
                  delay: idx * 0.08,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Infrastructure Tier */}
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-white border border-slate-200/90 rounded-lg p-1.5 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-2xs font-bold text-slate-800">{SAAS_COPY.postgresDb}</span>
          </div>
          <span className="text-3xs font-mono text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded font-semibold">{SAAS_COPY.okStatus}</span>
        </div>
        <div className="bg-white border border-slate-200/90 rounded-lg p-1.5 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span className="text-2xs font-bold text-slate-800">{SAAS_COPY.edgeApi}</span>
          </div>
          <span className="text-3xs font-mono text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded font-semibold">{SAAS_COPY.edge}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Screen 2: Multi-tenant Cloud Sync ─────────────────────────────────────────
function TenantsScreen({ isActive }: { isActive?: boolean }) {
  const tenants = [
    { name: "Acme Corp", region: "US-East", status: "Synced", ping: "4ms", color: "text-emerald-600 bg-emerald-50" },
    { name: "Starlight Labs", region: "EU-West", status: "Active", ping: "9ms", color: "text-sky-600 bg-sky-50" },
    { name: "Nexus Systems", region: "AP-South", status: "Replica", ping: "12ms", color: "text-indigo-600 bg-indigo-50" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col gap-1.5"
    >
      <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 flex flex-col gap-2 shadow-2xs flex-1">
        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="text-xs">🌐</span>
            <span className="text-2xs font-bold text-slate-800">{SAAS_COPY.multiTenantCloudSync.trim()}</span>
          </div>
          <span className="text-3xs font-mono text-emerald-600 font-bold">{SAAS_COPY.clustersOnline}</span>
        </div>

        {/* Tenant Rows */}
        <div className="flex flex-col gap-1.5">
          {tenants.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-200/60"
            >
              <div className="flex items-center gap-1.5">
                <motion.div
                  animate={isActive ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                />
                <span className="text-2xs font-bold text-slate-800">{t.name}</span>
                <span className="text-3xs text-slate-400 font-mono">({t.region})</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-3xs font-mono text-slate-400">{t.ping}</span>
                <span className={`text-3xs font-semibold px-1 py-0.5 rounded ${t.color}`}>{t.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cluster Footer */}
      <div className="bg-slate-900 rounded-lg p-1.5 flex items-center justify-between text-white text-3xs font-medium">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400">{SAAS_COPY.symbol}</span>
          <span>{SAAS_COPY.replication}</span>
        </div>
        <span className="font-mono text-slate-300">{SAAS_COPY.syncStatus}</span>
      </div>
    </motion.div>
  );
}

// ── Screen 3: Automated Stripe Billing ────────────────────────────────────────
function BillingScreen({ isActive }: { isActive?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col gap-1.5"
    >
      <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 flex flex-col gap-2 shadow-2xs flex-1">
        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="text-xs">💳</span>
            <span className="text-2xs font-bold text-slate-800">{SAAS_COPY.automatedStripeBilling.trim()}</span>
          </div>
          <span className="text-3xs font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">{SAAS_COPY.stripeLive}</span>
        </div>

        {/* Billing Plan Details */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-lg p-2 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-2xs font-bold text-slate-700">{SAAS_COPY.cloudTier}</span>
            <span className="text-xs font-black text-indigo-700">{SAAS_COPY.price}<span className="text-3xs font-normal text-slate-400">{SAAS_COPY.priceSuffix}</span></span>
          </div>
          <div className="flex items-center justify-between text-3xs text-slate-500">
            <span>{SAAS_COPY.activeLicenses}</span>
            <span className="text-emerald-600 font-semibold font-mono">{SAAS_COPY.invoicePaid}</span>
          </div>
        </div>

        {/* Live Reconcile Status */}
        <div className="push-block-end flex items-center justify-between rounded-lg border border-emerald-200/60 bg-emerald-50/70 p-1.5">
          <div className="flex items-center gap-1.5">
            <motion.div
              animate={isActive ? { scale: [1, 1.4, 1] } : { scale: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            />
            <span className="text-3xs font-bold text-emerald-800">{SAAS_COPY.reconciliation}</span>
          </div>
          <span className="text-3xs font-mono font-bold text-emerald-700">{SAAS_COPY.webhookStatus}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 rounded-lg p-1.5 flex items-center justify-between text-white text-3xs font-medium">
        <div className="flex items-center gap-1.5">
          <span className="text-indigo-400">⚡</span>
          <span>{SAAS_COPY.meteredBilling}</span>
        </div>
        <span className="font-mono text-emerald-400">{SAAS_COPY.automated}</span>
      </div>
    </motion.div>
  );
}
