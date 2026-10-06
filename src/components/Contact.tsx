import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, Code2, Copy, Check, 
  ArrowUpRight, Send, Sparkles 
} from 'lucide-react';

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

    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Prachi,\n\n${message}\n\nFrom: ${name} (${senderEmail || 'Not specified'})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSentStatus('Redirected to your email client to send!');
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative scroll-mt-20">
      
      {/* Background Climax Ambient Glows */}
      <div className="glow-orb w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-purple/15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Large Purple Gradient Climax Panel */}
        <div className="p-8 sm:p-14 lg:p-16 rounded-4xl bg-gradient-to-br from-[#1F123D]/95 via-[#160D2C]/90 to-[#10091F]/95 border border-purple-500/30 shadow-[0_25px_100px_rgba(124,58,237,0.3)] backdrop-blur-2xl">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Big Vision Headline */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-brand-lavender text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open for Engineering Roles</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#F5F3FF] leading-[1.08]">
                Let's make something <br />
                <span className="text-gradient-vibrant">worth shipping.</span>
              </h2>

              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-normal max-w-lg">
                Have an idea, opportunity, or engineering problem? Let's talk.
              </p>

              {/* Email Direct Action Card */}
              <div className="p-5 rounded-3xl bg-[#0D0719]/80 border border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-purple-500/15 text-brand-lavender border border-purple-500/25">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-ink-muted uppercase block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-display font-bold text-[#F5F3FF] hover:text-brand-lavender transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-purple-500/20 text-xs font-mono text-brand-soft border border-purple-500/20 transition-all self-start sm:self-auto hover:scale-105"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-lavender" />
                      <span className="text-brand-lavender">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Profiles Row */}
              <div className="pt-2">
                <span className="text-xs font-mono text-ink-muted uppercase block mb-3">
                  Social & Code Platforms
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-purple-500/20 text-ink-primary hover:text-white border border-purple-500/20 text-xs font-mono transition-all hover:scale-105"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-brand-lavender" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-purple-500/20 text-ink-primary hover:text-white border border-purple-500/20 text-xs font-mono transition-all hover:scale-105"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>

                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-amber-500/15 text-ink-primary hover:text-amber-200 border border-purple-500/20 text-xs font-mono transition-all hover:scale-105"
                  >
                    <Code2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>LeetCode</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Primary Direct Mail Button */}
              <div className="pt-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-studio-primary px-8 py-4 inline-flex items-center gap-3 text-base shadow-[0_0_35px_rgba(139,92,246,0.45)]"
                >
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

            </div>

            {/* Right Column: Send a Message Form */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#120B24]/90 border border-purple-500/25 shadow-xl">
                <div className="flex items-center gap-2 mb-6 pb-3 border-b border-purple-500/15">
                  <span className="w-2 h-2 rounded-full bg-brand-violet"></span>
                  <h3 className="font-display font-bold text-sm text-[#F5F3FF] uppercase tracking-wider">
                    Quick Inquiry Composer
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jordan Lee"
                      className="w-full px-4 py-3 rounded-2xl bg-[#090512]/90 border border-purple-500/20 text-sm text-[#F5F3FF] placeholder-ink-muted/50 focus:outline-none focus:border-brand-lavender transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1.5">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="jordan@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#090512]/90 border border-purple-500/20 text-sm text-[#F5F3FF] placeholder-ink-muted/50 focus:outline-none focus:border-brand-lavender transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your product vision, full-stack opening, or collaboration idea..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#090512]/90 border border-purple-500/20 text-sm text-[#F5F3FF] placeholder-ink-muted/50 focus:outline-none focus:border-brand-lavender transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send a Message</span>
                  </button>

                  {sentStatus && (
                    <p className="text-xs text-brand-lavender text-center font-mono mt-2">
                      {sentStatus}
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
