import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Dùng backend để load file JSON
  .use(LanguageDetector) // Dùng bộ phát hiện ngôn ngữ
  .use(initReactI18next) // Kết nối với React
  .init({
    supportedLngs: ["vi","en", "kr"], // Các ngôn ngữ hỗ trợ
    fallbackLng: "vi", // Ngôn ngữ mặc định
    detection: {
      order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Đường dẫn tới file dịch
    },
    ns: ["common", "account", "homepage"], // Namespace để phân biệt các phần
    defaultNS: "common",
  });

export default i18n;
