import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translation from 'assets/locales/translation.json'

i18n  
  .use(LanguageDetector)
  
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    resources: {
      translation: { translation: translation }
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
