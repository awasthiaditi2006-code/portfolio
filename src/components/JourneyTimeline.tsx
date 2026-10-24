import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export const JourneyTimeline: React.FC = () => {
  const { data, t } = useLanguage();

  return (
    <section id="journey" className="py-20 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-blue)] block mb-2 font-semibold">
              02. {t.journey.kicker}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight text-balance">
              {t.journey.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3">
              {t.journey.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[var(--border-active)]/40 ml-4 md:ml-32 space-y-12">
          {data.experiences.map((exp, idx) => (
            <ScrollReveal key={exp.id} delay={idx * 0.15}>
              <div className="relative pl-6 md:pl-10 group">
                {/* Timeline Node with blue and emerald pulsing ring */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--accent-blue)] bg-[var(--bg-primary)] group-hover:border-[var(--accent-green)] group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />

                {/* Period marker for desktop on left gutter */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className="text-xs font-mono font-semibold text-[var(--accent-blue)]">
                    {exp.period}
                  </span>
                  <span className="block text-[11px] text-[var(--text-muted)]">
                    {exp.duration}
                  </span>
                </div>

                {/* Card Container */}
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 sm:p-8 hover:border-[var(--border-active)] hover:shadow-xl hover:shadow-blue-950/20 transition-all duration-300">
                  {/* Mobile period display */}
                  <div className="md:hidden flex items-center gap-2 text-xs font-mono text-[var(--accent-blue)] mb-2 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period} ({exp.duration})</span>
                  </div>

                  {/* Role & Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <span className="text-sm sm:text-base font-semibold text-[var(--accent-green)]">
                      {exp.company}
                    </span>
                  </div>

                  {/* Subtitle / Context */}
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                    <span>{exp.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[var(--text-secondary)]">{exp.type}</span>
                  </div>

                  {/* Summary Description */}
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Responsibilities List */}
                  <div className="space-y-2.5 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                      Key Responsibilities & Operational Exposure
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <ChevronRight className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verified Outcomes if present */}
                  {exp.outcomes && exp.outcomes.length > 0 && (
                    <div className="mb-6 p-4 rounded-xl bg-[var(--bg-green-subtle)] border border-[var(--border-green)] space-y-1.5">
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-green)] block mb-1 font-semibold">
                        Demonstrated Impact
                      </span>
                      {exp.outcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills/Tags */}
                  <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
                    <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase">Applied:</span>
                    {exp.skills.map((skill, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="text-[var(--text-secondary)] font-medium hover:text-[var(--accent-blue)] transition-colors">{skill}</span>
                        {sIdx < exp.skills.length - 1 && (
                          <span aria-hidden="true" className="text-[var(--accent-blue)]/40">/</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
