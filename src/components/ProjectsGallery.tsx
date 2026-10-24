import React, { useState } from 'react';
import { Eye, Calendar, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

interface ProjectsGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProject }) => {
  const { data, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: t.projects.all },
    { id: 'strategy', label: t.projects.strategy },
    { id: 'operations', label: t.projects.operations },
    { id: 'sustainability', label: t.projects.sustainability },
    { id: 'data-ai', label: t.projects.dataAi }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 border-t border-[var(--border-subtle)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-blue)] block mb-2 font-semibold">
              04. {t.projects.kicker}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight text-balance">
              {t.projects.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] w-fit mb-10 shadow-sm">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white font-semibold shadow-md shadow-blue-500/20'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.1}>
              <div
                className="group rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-active)] overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-950/20 h-full"
              >
                {/* Card Visual Header with subtle blue-emerald background */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-card)] to-[#1E293B]/40 p-6 sm:p-8 flex flex-col justify-between border-b border-[var(--border-subtle)] overflow-hidden">
                  {/* Background geometric line art */}
                  <div className="absolute inset-0 fine-grid-pattern opacity-10 pointer-events-none" />
                  <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-gradient-to-br from-[#2563EB]/10 to-[#10B981]/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-blue)] font-semibold">
                      {project.affiliation || 'Case Study'}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-green)]" />
                      {project.date}
                    </span>
                  </div>

                  <div className="relative">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Pillars Highlights */}
                    {project.keyPillars && project.keyPillars.length > 0 && (
                      <div className="space-y-2 mb-6 text-xs text-[var(--text-secondary)]">
                        {project.keyPillars.slice(0, 2).map((pillar, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] shrink-0 mt-1.5" />
                            <span className="line-clamp-2">{pillar}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Technology Tags */}
                    <div className="py-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] mb-4">
                      {project.technologies.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="text-[var(--text-secondary)] font-medium hover:text-[var(--accent-blue)] transition-colors">{tech}</span>
                          {tIdx < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-[var(--accent-blue)]/40">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Actions Bar */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent-blue)] hover:text-[var(--accent-green)] transition-colors cursor-pointer group/btn"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t.projects.viewDetails}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-[11px] font-mono text-[var(--accent-green)] font-semibold">
                        {project.category.toUpperCase()}
                      </span>
                    </div>
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
