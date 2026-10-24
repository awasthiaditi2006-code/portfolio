import React from 'react';
import { GraduationCap, Award, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export const EducationCertifications: React.FC = () => {
  const { data, t } = useLanguage();

  return (
    <section id="education" className="py-20 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-blue)] block mb-2 font-semibold">
              06. {t.education.kicker}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight text-balance">
              {t.education.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* Dual Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Column (6 cols) */}
          <ScrollReveal delay={0.1} className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[var(--border-subtle)]">
              <GraduationCap className="w-5 h-5 text-[var(--accent-blue)]" />
              <h3 className="font-serif text-lg font-bold text-[var(--text-primary)]">
                Formal Education
              </h3>
            </div>

            <div className="space-y-4">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-active)] hover:shadow-lg transition-all"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span className="font-mono text-xs text-[var(--accent-blue)] font-semibold">
                      {edu.period}
                    </span>
                    {edu.score && (
                      <span className="font-mono text-xs text-[var(--accent-green)] font-semibold">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-1">
                    {edu.degree}
                  </h4>

                  <span className="text-xs text-[var(--text-muted)] font-mono block mb-3">
                    {edu.institution}
                  </span>

                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] shrink-0 mt-1.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Certifications & Programs Column (6 cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[var(--border-subtle)]">
              <Award className="w-5 h-5 text-[var(--accent-green)]" />
              <h3 className="font-serif text-lg font-bold text-[var(--text-primary)]">
                Specialized Certifications & Ongoing Upskilling
              </h3>
            </div>

            <div className="space-y-4">
              {data.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-active)] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[11px] font-semibold ${
                          cert.status === 'Completed'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                        }`}
                      >
                        {cert.status === 'Completed' ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <Clock className="w-3.5 h-3.5" />
                        )}
                        <span>{cert.status === 'Completed' ? t.education.statusCompleted : t.education.statusPursuing}</span>
                      </span>

                      <span className="font-mono text-xs text-[var(--text-muted)] font-medium">
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] mb-1">
                      {cert.title}
                    </h4>

                    <span className="text-xs text-[var(--accent-blue)] font-mono block mb-2 font-medium">
                      {cert.issuer}
                    </span>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                    <span>ID: {cert.courseId || 'VERIFIED'}</span>
                    <span className="text-[var(--accent-green)] font-semibold">{t.education.verifiedBadge}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
