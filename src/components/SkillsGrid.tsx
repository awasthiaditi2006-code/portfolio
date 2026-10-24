import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Code,
  BarChart3,
  Cpu,
  TrendingUp,
  Calculator,
  PackageCheck,
  CreditCard,
  Boxes,
  Presentation,
  MessageSquareText,
  Users
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export const SkillsGrid: React.FC = () => {
  const { data, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const renderIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-[var(--accent-blue)] group-hover:text-[var(--accent-green)] transition-colors shrink-0' };
    switch (name) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet {...props} />;
      case 'Code':
        return <Code {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Calculator':
        return <Calculator {...props} />;
      case 'PackageCheck':
        return <PackageCheck {...props} />;
      case 'CreditCard':
        return <CreditCard {...props} />;
      case 'Boxes':
        return <Boxes {...props} />;
      case 'Presentation':
        return <Presentation {...props} />;
      case 'MessageSquareText':
        return <MessageSquareText {...props} />;
      case 'Users':
      default:
        return <Users {...props} />;
    }
  };

  const filteredSkills =
    selectedCategory === 'all'
      ? data.skills
      : data.skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-blue)] block mb-2 font-semibold">
              03. {t.skills.kicker}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight text-balance">
              {t.skills.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3">
              {t.skills.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] w-fit mb-10 shadow-sm">
            {data.skillCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white font-semibold shadow-md shadow-blue-500/20'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <ScrollReveal key={skill.name} delay={idx * 0.04}>
              <div className="group p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-active)] hover:bg-[var(--bg-card-hover)] hover:shadow-lg hover:shadow-blue-950/20 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:border-[var(--accent-blue)]/50 group-hover:bg-blue-500/10 transition-colors">
                      {renderIcon(skill.iconName)}
                    </div>
                    <span className="font-mono text-[11px] text-[var(--accent-green)] font-semibold">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] mb-1.5 group-hover:text-[var(--accent-blue)] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                  <span className="uppercase tracking-wider">
                    {skill.category === 'data'
                      ? 'Analytics'
                      : skill.category === 'finance'
                      ? 'Finance'
                      : skill.category === 'operations'
                      ? 'Operations'
                      : 'Strategy'}
                  </span>
                  <span className="text-[var(--accent-blue)] font-medium">Verified</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
