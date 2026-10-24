import React, { useEffect } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[var(--bg-secondary)] border border-[var(--border-active)] rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-blue-950/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[var(--border-subtle)] bg-[var(--bg-card)]">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-3 text-xs font-mono text-[var(--accent-blue)] uppercase tracking-wider font-semibold">
              <span>{project.affiliation || 'Research & Presentation'}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--accent-green)]">{project.date}</span>
            </div>
            <h3 id="project-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          {/* Detailed Overview */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2">
              Case Summary & Research Context
            </h4>
            <p className="leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          {/* Key Strategic Pillars */}
          {project.keyPillars && project.keyPillars.length > 0 && (
            <div className="space-y-3 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-green)] font-semibold">
                Core Pillars & Focus Themes
              </h4>
              <div className="space-y-2 text-xs sm:text-sm">
                {project.keyPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verified Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h4 className="font-serif text-base font-bold text-[var(--text-primary)] mb-2">
                Deliverables & Demonstrated Findings
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] shrink-0 mt-2" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology & Framework Tags */}
          <div className="pt-4 border-t border-[var(--border-subtle)]">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase block mb-2 font-semibold">
              Methodologies & Tools
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-medium hover:border-[var(--accent-blue)] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span className="font-mono text-[var(--accent-green)] font-semibold">Category: {project.category.toUpperCase()}</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
