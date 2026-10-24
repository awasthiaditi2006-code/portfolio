import React from 'react';
import { Trophy, Award, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export const AchievementsTimeline: React.FC = () => {
  const { data, t } = useLanguage();

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Trophy className="w-5 h-5 text-[#38BDF8]" />;
      case 1:
        return <Award className="w-5 h-5 text-[#10B981]" />;
      case 2:
        return <Users className="w-5 h-5 text-[#38BDF8]" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-[#34D399]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-blue)] block mb-2 font-semibold">
              05. {t.achievements.kicker}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight text-balance">
              {t.achievements.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3">
              {t.achievements.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.achievements.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.1}>
              <div
                className="p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-active)] hover:shadow-xl hover:shadow-blue-950/20 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                      {getIcon(idx)}
                    </div>
                    {item.rank ? (
                      <span className="font-mono text-xs px-3.5 py-1.5 rounded-full border border-[var(--border-green)] bg-[var(--bg-green-subtle)] text-[var(--accent-green)] font-semibold shadow-sm">
                        {item.rank}
                      </span>
                    ) : (
                      <span className="font-mono text-xs text-[var(--text-muted)] font-medium">
                        {item.date}
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] mb-1 font-semibold">
                    {item.category}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[var(--text-primary)] mb-1">
                    {item.title}
                  </h3>

                  <span className="text-xs text-[var(--text-muted)] font-mono block mb-4">
                    {item.subtitle} · {item.organization}
                  </span>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.highlightText}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <p className="text-xs text-[var(--text-muted)] leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
