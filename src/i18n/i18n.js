import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import vi from "../locales/vi.json";
import kr from "../locales/kr.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      vi: vi,
      kr: kr
    },
    lng: "vi",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    debug: true
  });

export default i18n;
