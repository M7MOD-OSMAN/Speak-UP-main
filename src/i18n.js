import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import arabicData from "./i18next-icu/local-data/ar.json";
import engData from "./i18next-icu/local-data/en.json";

i18n
  .use(Backend)

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: engData,
      ar: arabicData,
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
