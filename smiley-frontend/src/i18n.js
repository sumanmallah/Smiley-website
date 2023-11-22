import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav_home_button: 'Home',
      nav_about_button: 'About',
      nav_survey_button: 'Survey',
      nav_contact_us_button: 'Contact Us',
      nav_my_userdata_button: 'My Data',
      nav_survey_ethan1_button: 'EthanCameraSurvey',
      nav_survey_ethan2_button: 'EthanMicrophoneSurvey',
      page_not_found_message: 'Error 404: Page Not Found',

      choose: "Choose...",
      language: "Language: ",
      confirm: "Confirm",
      cancel: "Close",
      english: "English",
      spanish: "Spanish",
      french: "French",
      showTheDialog: "Settings",
      youSelected: "You selected",
      survey_comments: "Additional Comments:",
      welcome_text: "Welcome to the Smiley website, your trusted companion in navigating the complexities of emotions and enhancing your emotional well-being. Our mission is to assist users in embracing their emotional diversity and motivating them to maintain a positive outlook throughout the day.",
      
    }
  },
  es: {
    translation: {
      nav_home_button: 'Inicio',
      nav_about_button: 'Acerca de',
      nav_survey_button: 'Encuesta',
      nav_contact_us_button: 'Contáctenos',
      nav_my_userdata_button: 'Mis datos',
      nav_survey_ethan1_button: 'EncuestaCámaraEthan',
      nav_survey_ethan2_button: 'EncuestaMicrófonoEthan',
      page_not_found_message: 'Error 404: Página no encontrada',



      choose: "Escoger...",
      language: "Idioma favorito",
      confirm: "Confirmar",
      cancel: "Close Dialog SPANISH",
      english: "Inglés",
      spanish: "Español",
      french: "Francés",
      showTheDialog: "Settings but in spanish",
      youSelected: "Has seleccionado",
      welcome_text: "Bienvenido al sitio web de Smiley, su compañero de confianza para navegar por las complejidades de las emociones y mejorar su bienestar emocional. Nuestra misión es ayudar a los usuarios a abrazar su diversidad emocional y motivarlos a mantener una perspectiva positiva a lo largo del día."
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
