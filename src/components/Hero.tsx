import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText, Download, CheckCircle2, MapPin, Upload, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { data, t } = useLanguage();
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio-user-portrait');
      if (saved) setCustomPhoto(saved);
    } catch (e) {}
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setCustomPhoto(base64);
        try {
          localStorage.setItem('portfolio-user-portrait', base64);
        } catch (err) {}
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    try {
      localStorage.removeItem('portfolio-user-portrait');
    } catch (e) {}
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative ambient background: modern electric blue and emerald green blur */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#2563EB]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[320px] bg-[#10B981]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          {/* Split-screen layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typographic Hierarchy & Actions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Status / Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-green)] bg-[var(--bg-green-subtle)] text-xs font-medium text-[var(--accent-green)] mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
                <span>{data.isOpenToOpportunities ? t.hero.openBadge : t.hero.notAvailable}</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] font-bold text-[var(--text-primary)] mb-5 text-balance">
                {data.name}
                <span className="block mt-2 font-sans font-light text-xl sm:text-2xl md:text-3xl blue-green-gradient-text font-medium">
                  {data.title}
                </span>
              </h1>

              {/* Concise Verified Introduction */}
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 max-w-2xl">
                {data.bio}
              </p>

              {/* Quick Location & Education Tag */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[var(--text-muted)] font-mono mb-8">
                <span className="inline-flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                  {t.hero.location}
                </span>
                <span aria-hidden="true" className="text-[var(--accent-blue)]/50">·</span>
                <span>Allenhouse Business School (2025–2028)</span>
                <span aria-hidden="true" className="text-[var(--accent-blue)]/50">·</span>
                <span className="text-[var(--accent-green)] font-sans font-medium">{t.hero.verifiedFromResume}</span>
              </div>

              {/* Primary Actions Group */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Primary: Explore My Work (Electric Blue to Emerald Gradient) */}
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white hover:opacity-95 hover:shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer shadow-md"
                >
                  <span>{t.hero.exploreWork}</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                {/* Secondary: View Resume Modal */}
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] bg-[var(--bg-card)] text-[var(--text-primary)] transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  <FileText className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span>{t.hero.viewResume}</span>
                </button>

                {/* Secondary: Download Resume */}
                <a
                  href={data.resumePath}
                  download={data.resumeFileName}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-subtle)] transition-colors"
                  title="Download verified resume PDF"
                >
                  <Download className="w-4 h-4 text-[var(--accent-green)]" />
                  <span className="hidden sm:inline">{t.hero.downloadResume}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Tall Portrait in Rounded Frame (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                {/* Modern Blue-Green glow frame */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#2563EB]/40 via-transparent to-[#10B981]/30 blur-md group-hover:blur-lg transition-all duration-300" />

                <div className="relative rounded-3xl overflow-hidden border border-[var(--border-active)] bg-[var(--bg-card)] p-6 sm:p-8 flex flex-col items-center justify-between min-h-[460px] shadow-2xl">
                  {/* Frame Header */}
                  <div className="w-full flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)]" />
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                        Curated Profile
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--accent-blue)] font-semibold">
                      {data.monogram || 'AA'}
                    </span>
                  </div>

                  {/* Portrait Core */}
                  <div className="relative my-6 flex flex-col items-center justify-center w-full">
                    {customPhoto ? (
                      <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-[var(--accent-blue)] shadow-xl">
                        <img
                          src={customPhoto}
                          alt={data.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl border border-[var(--accent-blue)]/30 bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-card)] to-[var(--bg-secondary)] flex flex-col items-center justify-center p-6 text-center shadow-inner group/avatar">
                        {/* Modern Blue-Green Monogram Ring */}
                        <div className="w-20 h-20 rounded-full border border-[var(--accent-blue)]/50 bg-[var(--bg-primary)]/80 flex items-center justify-center mb-3 shadow-md">
                          <span className="font-serif text-3xl font-bold tracking-widest blue-green-gradient-text">
                            {data.monogram || 'AA'}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-[var(--text-primary)]">
                          {data.name}
                        </span>
                        <span className="text-[11px] text-[var(--accent-blue)] font-mono mt-0.5">
                          Finance & Analytics
                        </span>
                      </div>
                    )}

                    {/* Photo Customization Tool */}
                    <div className="mt-4 flex items-center gap-2">
                      <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer transition-colors bg-[var(--bg-secondary)]">
                        <Upload className="w-3 h-3 text-[var(--accent-blue)]" />
                        <span>{customPhoto ? 'Change Photo' : t.hero.replacePhoto}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="sr-only"
                        />
                      </label>

                      {customPhoto && (
                        <button
                          onClick={handleResetPhoto}
                          className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-[11px]"
                          title={t.hero.resetPhoto}
                        >
                          <RefreshCw className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Frame Footer: Highlights */}
                  <div className="w-full pt-4 border-t border-[var(--border-subtle)] space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span className="text-[var(--text-muted)]">Degree</span>
                      <span className="font-medium text-[var(--text-primary)]">BBA Finance (2025–28)</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span className="text-[var(--text-muted)]">Internship</span>
                      <span className="font-medium text-[var(--text-primary)]">Reliance Bazaar</span>
                    </div>
                    <div className="flex items-center justify-between text-[var(--text-secondary)]">
                      <span className="text-[var(--text-muted)]">Honors</span>
                      <span className="font-medium text-[var(--accent-green)]">Case-O-Mania (Runner-Up)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Full-Width 4-Metric Proof Strip Below Hero Split */}
        <ScrollReveal delay={0.15}>
          <div className="mt-16 pt-10 border-t border-[var(--border-subtle)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {data.heroMetrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold blue-green-gradient-text tabular-nums">
                    {metric.value}
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-primary)] mt-1">
                    {metric.label}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] mt-0.5 line-clamp-1">
                    {metric.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
