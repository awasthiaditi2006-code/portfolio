import React from 'react';
import { Compass, TrendingUp, Cpu, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  const { data, t } = useLanguage();

  return (
    <section id="about" className="py-20 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Editorial Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-blue)] block mb-2 font-semibold">
              01. {t.about.kicker}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight text-balance">
              {t.about.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative (7 cols) */}
          <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {data.detailedBio.map((paragraph, idx) => (
              <p key={idx} className="relative pl-4 border-l-2 border-[var(--accent-blue)]/60">
                {paragraph}
              </p>
            ))}
          </ScrollReveal>

          {/* Strategic Focus Card (5 cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 sm:p-8 space-y-6 shadow-lg hover:border-[var(--border-active)] transition-all">
              <div className="flex items-center gap-2 pb-4 border-b border-[var(--border-subtle)]">
                <Compass className="w-5 h-5 text-[var(--accent-blue)]" />
                <h3 className="font-serif text-lg font-bold text-[var(--text-primary)]">
                  {t.about.interestsKicker}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      Corporate Finance & Accounting
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Financial statements, cost structures, working capital, and predictive models via IIM-Bangalore SWAYAM.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      Data Analytics & Python
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Excel modeling, structured datasets, and scientific Python programming through NPTEL.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      Operations & Field Execution
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Reliance Bazaar retail operations, customer sales pathways, inventory audits, and store workflow optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tag separator list (unboxed text discipline) */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
                {t.about.interests.map((interest, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-[var(--text-secondary)] font-medium">{interest}</span>
                    {idx < t.about.interests.length - 1 && (
                      <span aria-hidden="true" className="text-[var(--accent-blue)]/40">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
