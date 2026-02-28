// src/i18n.js
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./locales/en.json"
import pt from "./locales/pt.json"

// verifica idioma salvo no localStorage ou default pt-BR
const savedLang = localStorage.getItem("language") || "pt-BR"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      "en-US": { translation: en },
      "pt-BR": { translation: pt },
    },
    lng: savedLang,
    fallbackLng: "pt-BR",
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n