import I18n from "i18n-js";

import en from "./locales/en";
import vi from "./locales/vi";


I18n.locale = 'vi'
I18n.fallbacks = true;
I18n.translations = {
  en,
  vi
};

export default I18n;