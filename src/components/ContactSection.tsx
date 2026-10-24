import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const { data, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-blue)] block mb-2 font-semibold">
              07. {t.contact.kicker}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight text-balance">
              {t.contact.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3">
              {t.contact.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Direct Action Card */}
          <ScrollReveal delay={0.1}>
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-active)] hover:shadow-xl transition-all flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6">
                  <Mail className="w-5 h-5 text-[var(--accent-blue)]" />
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  Direct Email
                </span>
                <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2 truncate">
                  {data.socials.email}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                  Open to correspondence regarding finance internships, business analytics projects, or collegiate research.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-[var(--border-subtle)]">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] text-[var(--text-primary)] transition-colors cursor-pointer bg-[var(--bg-secondary)]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">{t.contact.emailCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${data.socials.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white hover:opacity-95 transition-opacity shadow-sm"
                >
                  <span>Send</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* LinkedIn Verified Card */}
          <ScrollReveal delay={0.2}>
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-active)] hover:shadow-xl transition-all flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">
                  <Linkedin className="w-5 h-5 text-[#38BDF8]" />
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  Professional Network
                </span>
                <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2">
                  LinkedIn Profile
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                  Connect for professional updates, conference networking, and academic presentations.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-[var(--border-active)] bg-[var(--bg-secondary)] hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#10B981] hover:text-white text-[var(--text-primary)] transition-all shadow-sm"
                >
                  <span>{t.contact.openLinkedIn}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Location & Academic Base Card */}
          <ScrollReveal delay={0.3}>
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-green)] hover:shadow-xl transition-all flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5 text-[var(--accent-green)]" />
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  {t.contact.locationLabel}
                </span>
                <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2">
                  {data.socials.location}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                  Based in Kanpur, UP. Available for local and hybrid internships, on-site retail operations, and remote analytics research.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>Timezone: IST (UTC+5:30)</span>
                <span className="text-[var(--accent-green)] font-semibold">Verified Base</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
