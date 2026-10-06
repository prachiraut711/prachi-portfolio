import React from 'react';
import { 
  Activity, ShieldCheck, MessageSquare, LineChart, 
  Wallet, Scan, Sparkles, CheckCircle2, 
  Terminal, Database, Calendar
} from 'lucide-react';

interface ProjectVisualProps {
  type: string;
  name: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type }) => {
  switch (type) {
    case 'telemetry':
      // SignalFlow: Event intelligence & anomaly detection (Purple Studio style)
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#120B22] rounded-2xl overflow-hidden border border-purple-500/20 p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between text-ink-muted border-b border-purple-500/15 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-violet animate-pulse"></span>
              <span className="text-[#F5F3FF] font-semibold tracking-wide">REDIS STREAM TELEMETRY</span>
            </div>
            <span className="text-[10px] bg-purple-500/15 text-brand-lavender px-2.5 py-0.5 rounded-full border border-purple-500/25">
              DuckDB + Isolation Forest
            </span>
          </div>

          <div className="space-y-2 my-auto">
            {/* Anomaly wave visual with purple/pink gradient */}
            <div className="relative h-14 w-full bg-[#0B0616]/90 rounded-xl border border-purple-500/10 p-2 flex items-end justify-between gap-1">
              {[32, 40, 36, 45, 90, 96, 82, 44, 38, 42, 36, 46, 39, 41].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    style={{ height: `${h}%` }}
                    className={`w-full rounded-t-sm transition-all duration-500 ${
                      h > 80 
                        ? 'bg-gradient-to-t from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.6)]' 
                        : 'bg-violet-500/40'
                    }`}
                  />
                </div>
              ))}
              <div className="absolute top-1.5 left-2 text-[10px] text-brand-soft flex items-center gap-1.5 font-sans">
                <Activity className="w-3 h-3 text-pink-400" />
                <span className="text-pink-300 font-medium">Telemetry Spike Correlated: Database Latency</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-ink-secondary bg-[#170E2B]/80 p-2 rounded-lg border border-purple-500/15">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-lavender" />
                <span>AI Root Cause Diagnosis:</span>
              </span>
              <span className="text-brand-soft font-sans truncate max-w-[210px]">
                DB pool exhaustion in us-east
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-ink-muted pt-2 border-t border-purple-500/15">
            <span>Throughput: 14.8k events/s</span>
            <span className="text-brand-lavender font-medium">Auto-Correlated (99.2%)</span>
          </div>
        </div>
      );

    case 'data-quality':
      // DataTrust: Data quality intelligence
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#120B22] rounded-2xl overflow-hidden border border-purple-500/20 p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between text-ink-muted border-b border-purple-500/15 pb-2.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-violet" />
              <span className="text-[#F5F3FF] font-semibold tracking-wide">DATA QUALITY HEALTH</span>
            </div>
            <span className="text-[10px] bg-purple-500/15 text-brand-lavender px-2.5 py-0.5 rounded-full border border-purple-500/25">
              DuckDB Engine
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="bg-[#0B0616]/90 p-2.5 rounded-xl border border-purple-500/15 text-center">
              <span className="text-[10px] text-ink-muted uppercase tracking-wider block">Reliability</span>
              <span className="text-xl font-bold font-display text-gradient-vibrant">96.8</span>
              <span className="text-[9px] text-brand-soft block mt-0.5">Reliable</span>
            </div>
            <div className="bg-[#0B0616]/90 p-2.5 rounded-xl border border-purple-500/15 text-center">
              <span className="text-[10px] text-ink-muted uppercase tracking-wider block">Completeness</span>
              <span className="text-xl font-bold font-display text-[#F5F3FF]">99.4%</span>
              <span className="text-[9px] text-ink-muted block mt-0.5">0.6% Nulls</span>
            </div>
            <div className="bg-[#0B0616]/90 p-2.5 rounded-xl border border-purple-500/15 text-center">
              <span className="text-[10px] text-ink-muted uppercase tracking-wider block">Outliers</span>
              <span className="text-xl font-bold font-display text-pink-400">12</span>
              <span className="text-[9px] text-ink-muted block mt-0.5">IsoForest</span>
            </div>
          </div>

          <div className="bg-[#1A1030]/80 border border-purple-500/20 p-2 rounded-lg text-[11px] text-brand-soft flex items-center gap-2 font-sans">
            <Sparkles className="w-3.5 h-3.5 text-brand-lavender shrink-0" />
            <span className="truncate">Gemini Synthesis: Schema consistent across 1.2M rows</span>
          </div>
        </div>
      );

    case 'support-ai':
      // SmartSupport AI: Ticket triage & sentiment
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#120B22] rounded-2xl overflow-hidden border border-purple-500/20 p-4 flex flex-col justify-between text-xs select-none">
          <div className="flex items-center justify-between border-b border-purple-500/15 pb-2.5">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-brand-violet" />
              <span className="text-[#F5F3FF] font-semibold font-mono tracking-wide">INTELLIGENT TRIAGE</span>
            </div>
            <span className="text-[10px] font-mono bg-pink-500/15 text-pink-300 px-2.5 py-0.5 rounded-full border border-pink-500/25 font-medium">
              High Priority
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="bg-[#0B0616]/90 p-2.5 rounded-xl border border-purple-500/15">
              <div className="flex items-center justify-between text-[11px] text-ink-secondary mb-1">
                <span className="font-medium text-[#F5F3FF]">Auth Token Expired on Checkout</span>
                <span className="text-[10px] font-mono text-brand-lavender bg-purple-500/15 px-2 py-0.5 rounded-full">Gemini Analyzed</span>
              </div>
              <div className="flex gap-1.5 mt-2">
                <span className="text-[10px] bg-purple-900/30 text-brand-soft px-2 py-0.5 rounded-md">Sentiment: Frustrated</span>
                <span className="text-[10px] bg-purple-900/30 text-brand-soft px-2 py-0.5 rounded-md">Billing API</span>
              </div>
            </div>

            <div className="bg-[#1A1030]/80 border border-purple-500/20 p-2 rounded-lg flex items-center justify-between text-[11px] text-brand-soft">
              <span className="flex items-center gap-1.5 truncate">
                <Sparkles className="w-3.5 h-3.5 text-brand-lavender shrink-0" />
                <span>Suggested Response Ready</span>
              </span>
              <span className="text-[10px] font-mono text-brand-lavender">1-click approve</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-ink-muted font-mono pt-2 border-t border-purple-500/15">
            <span>Agent Queue: Neon PostgreSQL</span>
            <span className="text-brand-lavender">JWT Role-Guarded</span>
          </div>
        </div>
      );

    case 'dev-analytics':
      // DevPulse AI: Velocity & PR telemetry
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#120B22] rounded-2xl overflow-hidden border border-purple-500/20 p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-purple-500/15 pb-2.5">
            <div className="flex items-center gap-2">
              <LineChart className="w-4 h-4 text-brand-lavender" />
              <span className="text-[#F5F3FF] font-semibold tracking-wide">CI/CD & VELOCITY METRICS</span>
            </div>
            <span className="text-[10px] bg-purple-500/15 text-brand-soft px-2.5 py-0.5 rounded-full border border-purple-500/25">
              FastAPI + React 19
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between bg-[#0B0616]/90 p-2 rounded-xl border border-purple-500/15">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-violet" />
                <span className="text-[#F5F3FF] text-[11px]">pr-audit-pipeline #89</span>
              </div>
              <span className="text-[10px] text-brand-lavender">PASSED • 42s</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#0B0616]/90 p-2 rounded-xl border border-purple-500/15">
                <span className="text-[9px] text-ink-muted uppercase block">Review Velocity</span>
                <span className="text-sm font-bold text-[#F5F3FF] font-display">2.4h turnaround</span>
              </div>
              <div className="bg-[#0B0616]/90 p-2 rounded-xl border border-purple-500/15">
                <span className="text-[9px] text-ink-muted uppercase block">Risk Assessment</span>
                <span className="text-sm font-bold text-brand-lavender font-display">Low Risk (0.12)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-ink-muted pt-2 border-t border-purple-500/15">
            <span>Workflow: GitHub Actions CI</span>
            <span className="text-brand-lavender">Docker Ready</span>
          </div>
        </div>
      );

    case 'finance-ai':
      // SpendWise AI: Expense Tracker + Gemini
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#120B22] rounded-2xl overflow-hidden border border-purple-500/20 p-4 flex flex-col justify-between text-xs select-none">
          <div className="flex items-center justify-between border-b border-purple-500/15 pb-2.5">
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-brand-lavender" />
              <span className="text-[#F5F3FF] font-semibold font-mono tracking-wide">SPENDWISE DASHBOARD</span>
            </div>
            <span className="text-[10px] font-mono bg-purple-500/15 text-brand-soft px-2.5 py-0.5 rounded-full border border-purple-500/25">
              Flutter + Gemini AI
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between bg-[#0B0616]/90 p-2.5 rounded-xl border border-purple-500/15">
              <div>
                <span className="text-[10px] text-ink-muted uppercase font-mono block">Monthly Utilization</span>
                <span className="text-base font-bold font-display text-[#F5F3FF]">$1,850 / $2,400</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-brand-lavender font-mono">77% budget used</span>
                <div className="w-20 h-1.5 bg-purple-950 rounded-full mt-1 overflow-hidden">
                  <div className="w-[77%] h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1030]/80 border border-purple-500/20 p-2 rounded-lg flex items-center gap-2 text-[11px] text-brand-soft">
              <Sparkles className="w-3.5 h-3.5 text-brand-lavender shrink-0" />
              <span className="truncate">Gemini Insight: Dining out reduced by 14% this week</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-ink-muted font-mono pt-2 border-t border-purple-500/15">
            <span>Cloud Firestore Sync</span>
            <span className="text-brand-lavender">Firebase AI Logic</span>
          </div>
        </div>
      );

    case 'yolo-vision':
      // Vehicle Damage Detection: YOLOv8 Bounding Boxes
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#120B22] rounded-2xl overflow-hidden border border-purple-500/20 p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-purple-500/15 pb-2.5">
            <div className="flex items-center gap-2">
              <Scan className="w-4 h-4 text-brand-violet" />
              <span className="text-[#F5F3FF] font-semibold tracking-wide">YOLOv8 DAMAGE LOCALIZATION</span>
            </div>
            <span className="text-[10px] bg-purple-500/15 text-brand-lavender px-2.5 py-0.5 rounded-full border border-purple-500/25">
              OpenCV + Flask
            </span>
          </div>

          <div className="relative h-20 w-full bg-[#0B0616]/90 rounded-xl border border-purple-500/15 flex items-center justify-center overflow-hidden my-auto">
            <svg className="w-40 h-16 text-purple-900/40" viewBox="0 0 200 80" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 50 L35 25 L85 25 L120 40 L180 40 L190 55 L170 55 M50 55 A12 12 0 1 0 74 55 M140 55 A12 12 0 1 0 164 55" />
            </svg>

            <div className="absolute top-2 left-6 border border-pink-500 bg-pink-500/15 rounded-md px-1.5 py-0.5 text-[9px] text-pink-200 font-semibold shadow-[0_0_10px_rgba(236,72,153,0.35)]">
              Front Bumper Dent 96%
            </div>

            <div className="absolute bottom-2 right-10 border border-violet-400 bg-violet-500/15 rounded-md px-1.5 py-0.5 text-[9px] text-brand-soft font-semibold">
              Door Scratch 91%
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-ink-muted pt-2 border-t border-purple-500/15">
            <span className="text-ink-secondary">Severity: Moderate</span>
            <span className="text-brand-lavender font-semibold">Est. Cost: $420 • Claim Valid</span>
          </div>
        </div>
      );

    case 'chat-app':
      // We-Chat / ChatApp: Flutter real-time messaging
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#120B22] rounded-2xl overflow-hidden border border-purple-500/20 p-4 flex flex-col justify-between text-xs select-none">
          <div className="flex items-center justify-between border-b border-purple-500/15 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse"></span>
              <span className="text-[#F5F3FF] font-semibold font-mono tracking-wide">WE-CHAT REAL-TIME</span>
            </div>
            <span className="text-[10px] font-mono bg-purple-500/15 text-brand-soft px-2.5 py-0.5 rounded-full border border-purple-500/25">
              Flutter + Firebase
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex justify-start">
              <div className="bg-[#1A122B] border border-purple-500/20 text-ink-primary rounded-2xl rounded-tl-sm px-3 py-1.5 max-w-[80%] text-[11px]">
                Hey Prachi, is the new build synchronized with Firestore?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl rounded-tr-sm px-3 py-1.5 max-w-[80%] text-[11px] shadow-sm">
                Yes! Push notifications and read receipts are active.
                <span className="block text-[9px] text-brand-soft text-right mt-0.5 font-mono">11:42 AM • Read ✓✓</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-ink-muted font-mono pt-2 border-t border-purple-500/15">
            <span>Status: Google OAuth Verified</span>
            <span className="text-brand-lavender">Latency &lt;45ms</span>
          </div>
        </div>
      );

    case 'task-tracker':
      // Mini TaskHub: Task tracker with Supabase RLS
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#120B22] rounded-2xl overflow-hidden border border-purple-500/20 p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-purple-500/15 pb-2.5">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-brand-violet" />
              <span className="text-[#F5F3FF] font-semibold tracking-wide">MINI TASKHUB</span>
            </div>
            <span className="text-[10px] bg-purple-500/15 text-brand-lavender px-2.5 py-0.5 rounded-full border border-purple-500/25">
              Supabase RLS Protected
            </span>
          </div>

          <div className="space-y-1.5 my-auto">
            <div className="flex items-center justify-between bg-[#0B0616]/90 px-2.5 py-1.5 rounded-xl border border-purple-500/15 text-[11px]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-violet" />
                <span className="text-ink-muted line-through">Implement Auth session listener</span>
              </div>
              <span className="text-[9px] text-brand-lavender bg-purple-500/20 px-2 py-0.5 rounded-full">Done</span>
            </div>
            <div className="flex items-center justify-between bg-[#0B0616]/90 px-2.5 py-1.5 rounded-xl border border-purple-500/15 text-[11px]">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full border border-purple-400/50"></div>
                <span className="text-[#F5F3FF]">Configure PostgreSQL RLS policies</span>
              </div>
              <span className="text-[9px] text-brand-soft bg-purple-500/10 px-2 py-0.5 rounded-full">In Progress</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-ink-muted pt-2 border-t border-purple-500/15">
            <span>Architecture: GetX Controllers</span>
            <span className="text-brand-lavender">Asia-Pacific Region</span>
          </div>
        </div>
      );

    case 'event-booking':
    default:
      // EventSphere: Event booking & reservations
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#120B22] rounded-2xl overflow-hidden border border-purple-500/20 p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-purple-500/15 pb-2.5">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-violet" />
              <span className="text-[#F5F3FF] font-semibold tracking-wide">EVENTSPHERE PASS</span>
            </div>
            <span className="text-[10px] bg-purple-500/15 text-brand-lavender px-2.5 py-0.5 rounded-full border border-purple-500/25">
              MERN Stack
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="bg-[#0B0616]/90 p-2.5 rounded-xl border border-purple-500/15">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-[#F5F3FF] font-semibold font-sans">Tech Innovators Summit 2026</span>
                <span className="text-brand-lavender font-mono text-[10px]">OTP Verified ✓</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-ink-muted mt-2">
                <span>Seat: Section A • Row 04</span>
                <span className="text-brand-soft">Ticket #EVT-9281</span>
              </div>
            </div>

            <div className="bg-[#1A1030]/80 border border-purple-500/20 px-2.5 py-1.5 rounded-lg flex items-center justify-between text-[10px] text-brand-soft">
              <span>Nodemailer Pass Dispatched</span>
              <span className="font-semibold text-brand-lavender">Confirmed</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-ink-muted pt-2 border-t border-purple-500/15">
            <span>Portals: User & Admin</span>
            <span className="text-brand-lavender">MongoDB Persistence</span>
          </div>
        </div>
      );
  }
};
