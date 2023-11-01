import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav_home_button: 'Home',
      nav_about_button: 'About',
      nav_survey_button: 'Survey',
      nav_contact_us_button: 'Contact Us',

      choose: "Choose...",
      language: "Language: ",
      confirm: "Confirm",
      cancel: "Close",
      english: "English",
      spanish: "Spanish",
      french: "French",
      showTheDialog: "Settings",
      youSelected: "You selected"
    }
  },
  es: {
    translation: {
      nav_home_button: 'Home2',
      nav_about_button: 'About2',
      nav_survey_button: 'Survey2',
      nav_contact_us_button: 'Contact Us2',



      choose: "Escoger...",
      favoriteLanguage: "Idioma favorito",
      confirm: "Confirmar",
      cancel: "Close Dialog SPANISH",
      english: "Inglés",
      spanish: "Español",
      french: "Francés",
      showTheDialog: "Settings but in spanish",
      youSelected: "Has seleccionado"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // initial language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;
