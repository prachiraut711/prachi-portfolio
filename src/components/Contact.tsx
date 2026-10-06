import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, Code2, Copy, Check, 
  ArrowUpRight, Send, MessageSquare 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Compose mailto URI
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Prachi,\n\n${message}\n\nFrom: ${name} (${senderEmail || 'Not provided'})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSentStatus('Redirected to your email client to send!');
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative scroll-mt-20 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            06 / Let's Connect
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Headline & Info */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Have an idea? <br />
              <span className="text-gradient-emerald">Let's build it.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-lg">
              Whether it's a product, an engineering challenge, or an opportunity to collaborate, I'd love to hear from you.
            </p>

            {/* Direct Email Card with copy action */}
            <div className="p-5 rounded-2xl bg-[#0e1118]/90 border border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-500 block">Direct Email</span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-zinc-200 hover:text-emerald-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 border border-white/5 transition-colors self-start sm:self-auto"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* External Links */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                Professional Profiles
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 text-zinc-300 hover:text-emerald-300 border border-white/[0.08] hover:border-emerald-500/30 text-xs font-mono transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-emerald-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/10 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/20 text-xs font-mono transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-amber-500/10 text-zinc-300 hover:text-amber-300 border border-white/[0.08] hover:border-amber-500/30 text-xs font-mono transition-all"
                >
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>LeetCode (200+)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Direct Mailto CTA button */}
            <div className="pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-base transition-all shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Send Email Directly</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message Box */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1118]/80 border border-white/[0.07] backdrop-blur-md">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/[0.05]">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono text-sm font-bold text-zinc-200 uppercase tracking-wide">
                  Quick Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-white/[0.08] text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-white/[0.08] text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Project / Role Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your product vision, open role, or collaboration idea..."
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-white/[0.08] text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-emerald-500 text-zinc-200 hover:text-zinc-950 font-semibold text-sm transition-all border border-white/10 hover:border-emerald-500 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Compose & Send via Mail Client</span>
                </button>

                {sentStatus && (
                  <p className="text-xs text-emerald-400 text-center font-mono mt-2">
                    {sentStatus}
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
