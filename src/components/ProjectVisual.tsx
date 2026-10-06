import React from 'react';
import { 
  Activity, ShieldCheck, MessageSquare, LineChart, 
  Wallet, Scan, Sparkles, CheckCircle2, AlertTriangle, 
  Terminal, Database, Flame, Calendar
} from 'lucide-react';

interface ProjectVisualProps {
  type: string;
  name: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type }) => {
  switch (type) {
    case 'telemetry':
      // SignalFlow: Event intelligence & anomaly detection
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#0c0e14] rounded-xl overflow-hidden border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between text-zinc-400 border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-zinc-200 font-semibold tracking-wide">REDIS STREAM INGESTION</span>
            </div>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
              DuckDB + Isolation Forest
            </span>
          </div>

          <div className="space-y-2 my-auto">
            {/* Anomaly wave visual */}
            <div className="relative h-14 w-full bg-zinc-950/60 rounded border border-white/[0.04] p-2 flex items-end justify-between gap-1">
              {[35, 42, 38, 48, 92, 98, 85, 45, 39, 41, 37, 44, 40, 43].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    style={{ height: `${h}%` }}
                    className={`w-full rounded-t-sm transition-all duration-500 ${
                      h > 80 
                        ? 'bg-rose-500/90 shadow-[0_0_12px_rgba(244,63,94,0.6)]' 
                        : 'bg-emerald-500/50'
                    }`}
                  />
                </div>
              ))}
              <div className="absolute top-1.5 left-2 text-[10px] text-zinc-400 flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-rose-400" />
                <span className="text-rose-300 font-medium">Anomaly Correlated: Service Latency Spike</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-zinc-400 bg-zinc-900/60 p-2 rounded border border-white/[0.04]">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>AI Root Cause Diagnosis:</span>
              </span>
              <span className="text-zinc-200 font-sans truncate max-w-[200px]">
                DB pool exhaustion in us-east
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.04]">
            <span>Throughput: 14.8k events/s</span>
            <span className="text-emerald-400 font-medium">Auto-Correlated (99.2%)</span>
          </div>
        </div>
      );

    case 'data-quality':
      // DataTrust: Data quality intelligence
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#0c0e14] rounded-xl overflow-hidden border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between text-zinc-400 border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-zinc-200 font-semibold tracking-wide">DATA HEALTH SNAPSHOT</span>
            </div>
            <span className="text-[10px] bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">
              DuckDB Analytics
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="bg-zinc-950/80 p-2.5 rounded border border-white/[0.05] text-center">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Score</span>
              <span className="text-xl font-bold font-sans text-cyan-400">96.8</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">Reliable</span>
            </div>
            <div className="bg-zinc-950/80 p-2.5 rounded border border-white/[0.05] text-center">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Completeness</span>
              <span className="text-xl font-bold font-sans text-zinc-200">99.4%</span>
              <span className="text-[9px] text-zinc-400 block mt-0.5">0.6% Nulls</span>
            </div>
            <div className="bg-zinc-950/80 p-2.5 rounded border border-white/[0.05] text-center">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Outliers</span>
              <span className="text-xl font-bold font-sans text-amber-400">12</span>
              <span className="text-[9px] text-zinc-400 block mt-0.5">IsoForest</span>
            </div>
          </div>

          <div className="bg-cyan-950/20 border border-cyan-800/30 p-2 rounded text-[11px] text-cyan-200 flex items-center gap-2 font-sans">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">Gemini Explanation: Schema consistent across 1.2M rows</span>
          </div>
        </div>
      );

    case 'support-ai':
      // SmartSupport AI: Ticket triage & sentiment
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#0c0e14] rounded-xl overflow-hidden border border-white/[0.06] p-4 flex flex-col justify-between text-xs select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="text-zinc-200 font-semibold font-mono tracking-wide">TICKET TRIAGE #1084</span>
            </div>
            <span className="text-[10px] font-mono bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/20 font-medium">
              High Priority
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="bg-zinc-950/80 p-2.5 rounded border border-white/[0.05]">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                <span className="font-medium text-zinc-300">Auth Token Expired on Checkout</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded">Gemini Analyzed</span>
              </div>
              <div className="flex gap-1.5 mt-2">
                <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">Sentiment: Frustrated</span>
                <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">Category: Billing API</span>
              </div>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-800/30 p-2 rounded flex items-center justify-between text-[11px] text-emerald-200">
              <span className="flex items-center gap-1.5 truncate">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Suggested Response Ready</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-300">1-click approve</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono pt-2 border-t border-white/[0.04]">
            <span>Agent Workspace: Neon PostgreSQL</span>
            <span className="text-emerald-400">JWT Verified</span>
          </div>
        </div>
      );

    case 'dev-analytics':
      // DevPulse AI: Velocity & PR telemetry
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#0c0e14] rounded-xl overflow-hidden border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <LineChart className="w-4 h-4 text-indigo-400" />
              <span className="text-zinc-200 font-semibold tracking-wide">CI/CD & PR TELEMETRY</span>
            </div>
            <span className="text-[10px] bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">
              FastAPI + React 19
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between bg-zinc-950/80 p-2 rounded border border-white/[0.05]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-zinc-200 text-[11px]">pr-audit-pipeline #89</span>
              </div>
              <span className="text-[10px] text-emerald-400">PASSED • 42s</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-zinc-950/80 p-2 rounded border border-white/[0.05]">
                <span className="text-[9px] text-zinc-400 uppercase block">Review Velocity</span>
                <span className="text-sm font-bold text-zinc-100 font-sans">2.4h avg</span>
              </div>
              <div className="bg-zinc-950/80 p-2 rounded border border-white/[0.05]">
                <span className="text-[9px] text-zinc-400 uppercase block">AI Risk Score</span>
                <span className="text-sm font-bold text-emerald-400 font-sans">Low (0.12)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.04]">
            <span>Telemetrics: GitHub Actions CI</span>
            <span className="text-indigo-400">Docker Containerized</span>
          </div>
        </div>
      );

    case 'finance-ai':
      // SpendWise AI: Expense Tracker + Gemini
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#0c0e14] rounded-xl overflow-hidden border border-white/[0.06] p-4 flex flex-col justify-between text-xs select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-amber-400" />
              <span className="text-zinc-200 font-semibold font-mono tracking-wide">SPENDWISE DASHBOARD</span>
            </div>
            <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">
              Flutter + GetX
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between bg-zinc-950/80 p-2 rounded border border-white/[0.05]">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-mono block">Monthly Budget</span>
                <span className="text-base font-bold text-zinc-100">$1,850 / $2,400</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-emerald-400 font-mono">77% utilized</span>
                <div className="w-20 h-1.5 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                  <div className="w-[77%] h-full bg-amber-400 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-amber-950/20 border border-amber-800/30 p-2 rounded flex items-center gap-2 text-[11px] text-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">Gemini Insight: Dining out reduced by 14% this week</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono pt-2 border-t border-white/[0.04]">
            <span>Cloud Firestore Sync</span>
            <span className="text-amber-400">Firebase AI Logic</span>
          </div>
        </div>
      );

    case 'yolo-vision':
      // Vehicle Damage Detection: YOLOv8 Bounding Boxes
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#0c0e14] rounded-xl overflow-hidden border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <Scan className="w-4 h-4 text-emerald-400" />
              <span className="text-zinc-200 font-semibold tracking-wide">YOLOv8 DETECTION INFERENCE</span>
            </div>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
              OpenCV + Flask
            </span>
          </div>

          {/* Bounding box visual representation */}
          <div className="relative h-20 w-full bg-zinc-950/80 rounded border border-white/[0.04] flex items-center justify-center overflow-hidden my-auto">
            {/* Background vehicle wireframe */}
            <svg className="w-40 h-16 text-zinc-800" viewBox="0 0 200 80" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 50 L35 25 L85 25 L120 40 L180 40 L190 55 L170 55 M50 55 A12 12 0 1 0 74 55 M140 55 A12 12 0 1 0 164 55" />
            </svg>

            {/* Simulated Bounding Box 1 */}
            <div className="absolute top-2 left-6 border-2 border-rose-500 bg-rose-500/10 rounded px-1.5 py-0.5 text-[9px] text-rose-300 font-semibold shadow-[0_0_8px_rgba(244,63,94,0.4)]">
              Front Bumper Dent 96%
            </div>

            {/* Simulated Bounding Box 2 */}
            <div className="absolute bottom-2 right-10 border-2 border-amber-500 bg-amber-500/10 rounded px-1.5 py-0.5 text-[9px] text-amber-300 font-semibold">
              Door Scratch 91%
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.04]">
            <span className="text-zinc-300">Severity: Moderate</span>
            <span className="text-emerald-400 font-semibold">Est. Cost: $420 • Claim Valid</span>
          </div>
        </div>
      );

    case 'chat-app':
      // We-Chat / ChatApp: Flutter real-time messaging
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#0c0e14] rounded-xl overflow-hidden border border-white/[0.06] p-4 flex flex-col justify-between text-xs select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-zinc-200 font-semibold font-mono tracking-wide">WE-CHAT REAL-TIME</span>
            </div>
            <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
              Flutter + Firebase FCM
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex justify-start">
              <div className="bg-zinc-900 border border-white/[0.05] text-zinc-300 rounded-2xl rounded-tl-sm px-3 py-1.5 max-w-[80%] text-[11px]">
                Hey Prachi, is the new build synchronized with Firestore?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-emerald-600/80 text-white rounded-2xl rounded-tr-sm px-3 py-1.5 max-w-[80%] text-[11px] shadow-sm">
                Yes! Push notifications and read receipts are active.
                <span className="block text-[9px] text-emerald-200 text-right mt-0.5 font-mono">11:42 AM • Read ?</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono pt-2 border-t border-white/[0.04]">
            <span>Status: Google OAuth Verified</span>
            <span className="text-emerald-400">Latency &lt;45ms</span>
          </div>
        </div>
      );

    case 'task-tracker':
      // Mini TaskHub: Task tracker with Supabase RLS
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#0c0e14] rounded-xl overflow-hidden border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              <span className="text-zinc-200 font-semibold tracking-wide">MINI TASKHUB</span>
            </div>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
              Supabase RLS Protected
            </span>
          </div>

          <div className="space-y-1.5 my-auto">
            <div className="flex items-center justify-between bg-zinc-950/80 px-2.5 py-1.5 rounded border border-white/[0.05] text-[11px]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-zinc-400 line-through">Implement Auth session listener</span>
              </div>
              <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Done</span>
            </div>
            <div className="flex items-center justify-between bg-zinc-950/80 px-2.5 py-1.5 rounded border border-white/[0.05] text-[11px]">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full border border-emerald-500/50"></div>
                <span className="text-zinc-200">Configure PostgreSQL RLS policies</span>
              </div>
              <span className="text-[9px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">In Progress</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.04]">
            <span>Architecture: GetX Controllers</span>
            <span className="text-emerald-400">Asia-Pacific Region</span>
          </div>
        </div>
      );

    case 'event-booking':
    default:
      // EventSphere: Event booking & reservations
      return (
        <div className="relative w-full h-48 md:h-56 bg-[#0c0e14] rounded-xl overflow-hidden border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="text-zinc-200 font-semibold tracking-wide">EVENTSPHERE RESERVATION</span>
            </div>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
              MERN Stack
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="bg-zinc-950/80 p-2.5 rounded border border-white/[0.05]">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-zinc-200 font-semibold font-sans">Tech Innovators Summit 2026</span>
                <span className="text-emerald-400 font-mono text-[10px]">OTP Verified ?</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-400 mt-2">
                <span>Seat: Section A • Row 04</span>
                <span className="text-zinc-300">Ticket #EVT-9281</span>
              </div>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-800/30 px-2.5 py-1.5 rounded flex items-center justify-between text-[10px] text-emerald-300">
              <span>Nodemailer Pass Dispatched</span>
              <span className="font-semibold">Confirmed</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.04]">
            <span>Role: User & Admin Portals</span>
            <span className="text-emerald-400">MongoDB Persistence</span>
          </div>
        </div>
      );
  }
};
