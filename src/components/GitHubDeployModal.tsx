import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Github, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: 'Step 1: Create a GitHub Repository',
      description: 'On GitHub, create a new public repository (e.g. "portfolio" or "username.github.io").',
      code: '# If using Git CLI:\ngit init\ngit add .\ngit commit -m "feat: complete portfolio for Aditi Awasthi"'
    },
    {
      title: 'Step 2: Connect Remote and Push',
      description: 'Link your local folder to your new GitHub repo and push to the main branch.',
      code: 'git remote add origin https://github.com/<your-username>/portfolio.git\ngit branch -M main\ngit push -u origin main'
    },
    {
      title: 'Step 3: Automated Deployment via GitHub Actions',
      description: 'We have pre-configured `.github/workflows/deploy.yml` with resilient installation and relative path assets. In your GitHub repo: Settings > Pages > Source > select "GitHub Actions".',
      code: '# If updating existing repo after fix:\ngit add .\ngit commit -m "fix: update GitHub Pages workflow and package-lock"\ngit push'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="deploy-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[var(--bg-secondary)] border border-[var(--border-active)] rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-blue-950/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border-subtle)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <Github className="w-5 h-5 text-[var(--accent-blue)]" />
            </div>
            <div>
              <h3 id="deploy-modal-title" className="font-serif text-lg font-bold text-[var(--text-primary)]">
                {t.deployModal.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-mono">
                {t.deployModal.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps List */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm text-[var(--text-secondary)]">
          <div className="p-4 rounded-2xl bg-[var(--bg-green-subtle)] border border-[var(--border-green)] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--accent-green)] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[var(--text-primary)] block">
                Production-Ready Build
              </span>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                All resume assets, styles, dark/light themes, and dual-language dictionaries are fully self-contained and run cleanly without any external database or secret keys.
              </p>
            </div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-serif text-sm font-bold text-[var(--text-primary)]">
                {step.title}
              </h4>
              <p className="text-xs text-[var(--text-muted)]">
                {step.description}
              </p>
              <div className="relative rounded-xl bg-[#090D16] border border-[var(--border-subtle)] p-3 font-mono text-[11px] sm:text-xs text-[#E2E8F0] overflow-x-auto">
                <pre>{step.code}</pre>
                <button
                  onClick={() => copyCode(step.code, idx)}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  title="Copy command"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-center justify-between">
          <span className="text-xs font-mono text-[var(--accent-green)] font-semibold">
            Workflow: .github/workflows/deploy.yml
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white font-semibold text-xs hover:opacity-90 transition-opacity shadow-sm"
          >
            {t.deployModal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
