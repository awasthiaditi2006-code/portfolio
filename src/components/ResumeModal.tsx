import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { data, t } = useLanguage();

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-[var(--bg-secondary)] border border-[var(--border-active)] rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-blue-950/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <FileText className="w-4 h-4 text-[var(--accent-blue)]" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="font-serif text-sm sm:text-base font-bold text-[var(--text-primary)]">
                {t.resumeModal.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-mono">
                {t.resumeModal.subtitle}
              </p>
            </div>
          </div>

          {/* Actions & Close */}
          <div className="flex items-center gap-2">
            <a
              href={data.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
              <span>{t.resumeModal.openNewTab}</span>
            </a>

            <a
              href={data.resumePath}
              download={data.resumeFileName}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white hover:opacity-90 transition-opacity shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.resumeModal.downloadPdf}</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none ml-1"
              aria-label={t.resumeModal.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-[#0A0F1D] relative">
          <iframe
            src={`${data.resumePath}#toolbar=0&navpanes=0`}
            title="Curriculum Vitae"
            className="w-full h-full border-0"
          />

          {/* Mobile Fallback */}
          <div className="sm:hidden absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[var(--bg-card)]/95 backdrop-blur border border-[var(--border-subtle)] text-xs text-center text-[var(--text-secondary)] flex items-center justify-between">
            <span>{t.resumeModal.fallbackNotice}</span>
            <a
              href={data.resumePath}
              download={data.resumeFileName}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white font-semibold shrink-0 ml-2 text-[11px]"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
