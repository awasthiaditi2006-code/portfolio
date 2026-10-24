import React from 'react';
import { ArrowUp, Mail, Linkedin, FileText, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const { data, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-start">
          {/* Monogram Brand & Statement (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[var(--accent-blue)]/60 bg-[var(--bg-card)] flex items-center justify-center font-serif text-sm font-bold text-[var(--accent-blue)] shadow-sm">
                {data.monogram || 'AA'}
              </div>
              <span className="font-serif text-lg font-bold text-[var(--text-primary)]">
                {data.name}
              </span>
            </div>

            <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
              {t.footer.brandStatement}
            </p>

            <div className="text-xs font-mono text-[var(--accent-green)] font-medium">
              {t.footer.verifiedNote}
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li>
                <a href="#about" className="hover:text-[var(--accent-blue)] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[var(--accent-blue)] transition-colors">
                  {t.nav.journey}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[var(--accent-blue)] transition-colors">
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[var(--accent-blue)] transition-colors">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-[var(--accent-blue)] transition-colors">
                  {t.nav.achievements}
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[var(--accent-blue)] transition-colors">
                  {t.nav.education}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Actions (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              {t.footer.socialLinks}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-[var(--text-secondary)]">
              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[var(--accent-blue)] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${data.socials.email}`}
                className="inline-flex items-center gap-2 hover:text-[var(--accent-green)] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--accent-green)]" />
                <span className="truncate">{data.socials.email}</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-left hover:text-[var(--accent-blue)] transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                <span>{t.nav.resume}</span>
              </button>

              <button
                onClick={onOpenDeployGuide}
                className="inline-flex items-center gap-2 text-left hover:text-[var(--accent-green)] transition-colors cursor-pointer text-[var(--text-muted)]"
              >
                <Rocket className="w-3.5 h-3.5 text-[var(--accent-green)]" />
                <span>GitHub Pages Deploy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <p>
            © {currentYear} {data.name}. {t.footer.rights}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer shadow-sm hover:shadow"
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
