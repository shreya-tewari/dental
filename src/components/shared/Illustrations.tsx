import { useState } from 'react';
import { ShieldCheck, Activity, Sparkles, Mic, CheckCircle2, Scan, Layers } from 'lucide-react';

// ─── 1. Panoramic X-Ray with AI Detection Overlay (Hero & Vision AI) ─────────

export function XrayWithAIOverlay() {
  const [activeFinding, setActiveFinding] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[400px] bg-[#121212] rounded-2xl overflow-hidden group select-none border border-[#2A2A2A] shadow-2xl flex flex-col justify-between">
      {/* Background High-Res AI X-Ray Photo */}
      <img
        src="/images/hero-xray.jpg"
        alt="Dental panoramic radiograph with AI detection overlays"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08] transition-transform duration-700 group-hover:scale-[1.02]"
        loading="eager"
      />

      {/* Subtle clinical scan line animation overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(246, 244, 240, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246, 244, 240, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Top Clinical Header Bar */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-neige uppercase flex items-center gap-1.5">
            <Scan className="w-3.5 h-3.5 text-neige/80" /> Vision AI v4.2 · Live Stream
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
          <Sparkles className="w-3 h-3 text-neige" />
          <span className="text-[10px] font-mono text-neige/90 font-medium">99.4% Confidence</span>
        </div>
      </div>

      {/* Floating Clinical Detection Annotations */}
      <div className="relative z-10 p-4 flex flex-col gap-2.5 max-w-sm pointer-events-auto">
        <div
          onMouseEnter={() => setActiveFinding(1)}
          onMouseLeave={() => setActiveFinding(null)}
          className={`cursor-pointer transition-all duration-300 p-2.5 rounded-xl border backdrop-blur-md ${
            activeFinding === 1
              ? 'bg-black/90 border-white/40 shadow-lg translate-x-1'
              : 'bg-black/70 border-white/15 hover:border-white/30'
          }`}
        >
          <div className="flex items-center justify-between text-[11px] font-mono mb-1">
            <span className="text-neige font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neige" /> TOOTH #14 · OCCLUSAL
            </span>
            <span className="text-emerald-400 font-semibold">94% PROBABILITY</span>
          </div>
          <p className="text-[11px] text-neige/80">Incipient interproximal enamel lesion detected</p>
        </div>

        <div
          onMouseEnter={() => setActiveFinding(2)}
          onMouseLeave={() => setActiveFinding(null)}
          className={`cursor-pointer transition-all duration-300 p-2.5 rounded-xl border backdrop-blur-md ${
            activeFinding === 2
              ? 'bg-black/90 border-white/40 shadow-lg translate-x-1'
              : 'bg-black/70 border-white/15 hover:border-white/30'
          }`}
        >
          <div className="flex items-center justify-between text-[11px] font-mono mb-1">
            <span className="text-neige font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neige/70" /> TOOTH #19 · PERIODONTAL
            </span>
            <span className="text-neige/70 font-semibold">BONE LEVEL: 2.1mm</span>
          </div>
          <p className="text-[11px] text-neige/80">Crestal bone height verified within normal limits</p>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-10 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex items-center justify-between">
        <div className="flex items-center gap-3 text-[11px] text-neige/70 font-mono">
          <span className="flex items-center gap-1 text-neige">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> FDA Cleared Class II
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="hidden sm:inline">DICOM 3.0 Sync</span>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-white text-black text-[10px] font-bold tracking-wider uppercase shadow-sm">
          Auto-Annotated
        </div>
      </div>
    </div>
  );
}

// ─── 2. Dedicated Bitewing Vision AI Mockup ───────────────────────────────────

export function VisionAIMockup() {
  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[400px] bg-[#121212] rounded-2xl overflow-hidden group select-none border border-[#2A2A2A] shadow-2xl flex flex-col justify-between">
      <img
        src="/images/vision-ai.jpg"
        alt="Macro bitewing dental X-ray with AI Caries detection software"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02]"
        loading="lazy"
      />

      {/* Header bar */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-neige uppercase flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-neige" /> DENTAL_AI v4.1 Bitewing Analysis
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/20 text-neige backdrop-blur-md">
          Auto-Detected
        </span>
      </div>

      {/* Bottom Findings Badge */}
      <div className="relative z-10 m-3 sm:m-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xl">
        <div>
          <div className="text-[11px] font-mono font-bold text-neige flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            FINDINGS: 2 LOCATIONS IDENTIFIED
          </div>
          <p className="text-[11px] text-neige/70 mt-0.5">
            Caries Mesial #30 (94%) · Bone Loss Distal #29 (2.1mm)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-white text-black text-[10px] font-bold uppercase tracking-wider">
            Review Findings
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── 3. AI-Native 3D Imaging & Operatory Mockup ──────────────────────────────

export function DashboardMockup() {
  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[400px] bg-[#121212] rounded-2xl overflow-hidden group select-none border border-[#2A2A2A] shadow-2xl flex flex-col justify-between">
      <img
        src="/images/imaging-operatory.jpg"
        alt="Modern high-tech dental operatory clinic with 3D CBCT scan"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
        loading="lazy"
      />

      {/* Top Bar */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <Layers className="w-3.5 h-3.5 text-neige" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-neige uppercase">
            3D CBCT Volumetric View
          </span>
        </div>
        <span className="text-[10px] font-mono bg-black/70 text-neige/90 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
          Ultra-Low Dose Mode
        </span>
      </div>

      {/* Floating Spec Card */}
      <div className="relative z-10 m-3 sm:m-4 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 max-w-sm shadow-xl">
        <div className="flex items-center justify-between text-[11px] font-mono mb-1">
          <span className="text-neige font-bold">INTEGRATED OPERATORY SUITE</span>
          <span className="text-emerald-400 font-semibold">PACS CONNECTED</span>
        </div>
        <p className="text-[11px] text-neige/80 leading-snug">
          Real-time volumetric 3D reconstruction synced directly to electronic health record.
        </p>
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neige/60">
          <span>Latency: &lt;400ms</span>
          <span>Resolution: 75μm voxel</span>
        </div>
      </div>
    </div>
  );
}

// ─── 4. Voice AI Ambient Transcription Mockup ────────────────────────────────

export function VoiceWaveform() {
  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[400px] bg-[#121212] rounded-2xl overflow-hidden group select-none border border-[#2A2A2A] shadow-2xl flex flex-col justify-between">
      <img
        src="/images/voice-ai.jpg"
        alt="Dentist using ambient voice AI headset for hands-free charting"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02]"
        loading="lazy"
      />

      {/* Top Header */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-neige uppercase flex items-center gap-1.5">
            <Mic className="w-3.5 h-3.5 text-neige" /> Ambient Voice Active
          </span>
        </div>
        <span className="text-[10px] font-mono bg-black/60 text-neige/90 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
          Hands-Free Mode
        </span>
      </div>

      {/* Floating Audio Transcription Card */}
      <div className="relative z-10 m-3 sm:m-4 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 shadow-xl">
        <div className="flex items-center justify-between text-[10px] font-mono text-neige/70 mb-2">
          <span className="uppercase tracking-wider flex items-center gap-1 text-neige">
            <Activity className="w-3 h-3 text-emerald-400" /> Real-time Speech-to-Chart
          </span>
          <span className="text-emerald-400 font-bold">PMS Synced</span>
        </div>

        {/* Audio Waveform visualization */}
        <div className="flex items-center gap-1 h-5 mb-2.5">
          {[12, 24, 16, 28, 20, 14, 26, 32, 18, 28, 14, 22, 30, 16, 24, 18, 12, 26, 22, 16].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-white/70 rounded-full transition-all duration-300"
              style={{ height: `${h * 0.6}px` }}
            />
          ))}
        </div>

        <p className="text-[11px] text-neige font-mono italic bg-white/5 p-2 rounded border border-white/10">
          "Probing depth: Tooth 14, mesial-buccal 3mm, bleeding negative. Tooth 15 missing."
        </p>
      </div>
    </div>
  );
}

// ─── 5. Insurance Verification & RCM Mockup ──────────────────────────────────

export function InsuranceVerificationMockup() {
  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[400px] bg-[#121212] rounded-2xl overflow-hidden group select-none border border-[#2A2A2A] shadow-2xl flex flex-col justify-between">
      <img
        src="/images/insurance-billing.jpg"
        alt="Dental practice front office insurance verification dashboard"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02]"
        loading="lazy"
      />

      {/* Top Header */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-mono font-bold tracking-wider text-neige uppercase">
            Real-Time Eligibility Engine
          </span>
        </div>
        <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full backdrop-blur-md font-bold">
          100% Verified
        </span>
      </div>

      {/* Floating Eligibility Table Card */}
      <div className="relative z-10 m-3 sm:m-4 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 shadow-xl">
        <div className="flex items-center justify-between text-[11px] font-mono mb-2">
          <span className="text-neige font-bold">PATIENT: J. RAMIREZ</span>
          <span className="text-neige/60">ID: #DNT-8842</span>
        </div>

        <div className="space-y-1.5 text-[11px] font-mono text-neige/90">
          <div className="flex items-center justify-between py-1 border-b border-white/10">
            <span className="text-neige/70">Payer:</span>
            <span className="font-semibold text-neige">Delta Dental Premier</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-white/10">
            <span className="text-neige/70">Preventive / Diagnostic:</span>
            <span className="text-emerald-400 font-bold">100% Covered ($0 Copay)</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-neige/70">Annual Max Remaining:</span>
            <span className="font-semibold text-neige">$1,750.00 / $2,000.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
