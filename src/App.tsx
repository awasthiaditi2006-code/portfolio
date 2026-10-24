import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { JourneyTimeline } from './components/JourneyTimeline';
import { SkillsGrid } from './components/SkillsGrid';
import { ProjectsGallery } from './components/ProjectsGallery';
import { AchievementsTimeline } from './components/AchievementsTimeline';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { GitHubDeployModal } from './components/GitHubDeployModal';
import { ScrollProgressBar } from './components/ScrollReveal';
import { ProjectItem } from './types/portfolio';

function PortfolioMain() {
  const [introFinished, setIntroFinished] = useState(() => {
    try {
      return sessionStorage.getItem('portfolio-intro-seen') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);

  const handleIntroComplete = () => {
    setIntroFinished(true);
    try {
      sessionStorage.setItem('portfolio-intro-seen', 'true');
    } catch (e) {}
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-[#38BDF8] selection:text-black">
      {/* Scroll Progress Bar at the very top */}
      <ScrollProgressBar />

      {/* Monogram Intro Animation */}
      {!introFinished && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Floating Capsule Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Main Content Sections with Scroll Transitions */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <JourneyTimeline />
        <SkillsGrid />
        <ProjectsGallery onSelectProject={(p) => setSelectedProject(p)} />
        <AchievementsTimeline />
        <EducationCertifications />
        <ContactSection />
      </main>

      {/* Hybrid Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <GitHubDeployModal
        isOpen={deployGuideOpen}
        onClose={() => setDeployGuideOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioMain />
      </LanguageProvider>
    </ThemeProvider>
  );
}
