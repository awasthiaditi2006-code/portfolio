import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, ProfileData } from '../types/portfolio';
import { portfolioData, uiTranslations } from '../data/portfolioData';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  data: ProfileData;
  t: (typeof uiTranslations)['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('portfolio-lang');
      if (saved === 'en' || saved === 'hi') return saved as Language;
    } catch (e) {}
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-lang', language);
    } catch (e) {}
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const data = portfolioData[language];
  const t = uiTranslations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, data, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
