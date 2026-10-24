import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, FileText, Menu, X, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t, data } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'journey', 'skills', 'projects', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'journey', label: t.nav.journey },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'achievements', label: t.nav.achievements },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact }
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Capsule Header */}
      <header
        className={`fixed top-4 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-6 px-4 py-2.5 rounded-full transition-all duration-300 shadow-xl ${
            isScrolled
              ? 'glass-panel shadow-blue-950/20 dark:shadow-black/60 border border-[var(--border-active)]'
              : 'glass-panel border border-[var(--border-subtle)]'
          } max-w-6xl w-full`}
        >
          {/* Zone 1: Brand Wordmark / Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 group shrink-0 focus-visible:outline-none"
            aria-label="Scroll to top"
          >
            <div className="w-8 h-8 rounded-full border border-[var(--accent-blue)]/60 bg-[var(--bg-card)] flex items-center justify-center font-serif text-xs font-bold text-[var(--accent-blue)] group-hover:scale-105 group-hover:border-[var(--accent-green)] transition-all shadow-sm">
              {data.monogram || 'AA'}
            </div>
            <span className="font-serif text-sm font-semibold tracking-wide text-[var(--text-primary)] hidden sm:inline whitespace-nowrap">
              {data.name}
            </span>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-[var(--text-secondary)] whitespace-nowrap shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`transition-colors py-1 relative hover:text-[var(--text-primary)] ${
                    isActive ? 'text-[var(--accent-blue)] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Interactive Controls & Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none"
              title={language === 'en' ? 'Switch to Hindi (हिन्दी)' : 'Switch to English'}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
              <span className="font-mono text-[11px] font-semibold">{language === 'en' ? 'EN' : 'हिन्दी'}</span>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[var(--accent-blue)]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--accent-blue)]" />
              )}
            </button>

            {/* Quick Resume Modal Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] text-white hover:opacity-90 transition-all shadow-sm shadow-blue-500/20"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.nav.resume}</span>
            </button>

            {/* Deploy Guide Tooltip/Trigger */}
            <button
              onClick={onOpenDeployGuide}
              className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium border border-[var(--border-subtle)] hover:border-[var(--accent-green)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="GitHub Pages Deployment Guide"
            >
              <Rocket className="w-3.5 h-3.5 text-[var(--accent-green)]" />
              <span>{t.nav.deployGuide}</span>
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] focus-visible:outline-none"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-20 left-4 right-4 p-5 rounded-2xl glass-panel shadow-2xl flex flex-col gap-3 animate-in fade-in zoom-in-95 duration-200 border border-[var(--border-active)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <span className="font-serif text-sm font-semibold text-[var(--accent-blue)]">
                {data.name}
              </span>
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] text-white"
              >
                <FileText className="w-3 h-3" />
                <span>{t.nav.resume}</span>
              </button>
            </div>

            <div className="flex flex-col gap-1 py-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === link.id
                      ? 'bg-[var(--bg-accent-subtle)] text-[var(--accent-blue)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeployGuide();
                }}
                className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--accent-green)]"
              >
                <Rocket className="w-3.5 h-3.5 text-[var(--accent-green)]" />
                <span>GitHub Pages Deploy Guide</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
