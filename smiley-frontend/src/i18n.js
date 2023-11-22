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
      //Survey page started
      AU:"About Us",
      OP:"Our Purpose",
      PT:"Life is a journey filled with an array of emotions, and it's completely normal to experience a wide range of feelings daily. However, there are times when negative emotions can become overwhelming, or motivation seems elusive. At Smiley, we understand the importance of emotional well-being and the positive impact it can have on your life. Our purpose is to provide personalized solutions and resources to help you manage your emotions, boost your motivation, and ultimately lead a more fulfilling and positive life. We believe that every emotion,even the challenging ones, has value and can be a stepping stone towards personal growth.",
      WWO: "What We Offer",
      EG: "Emotional Guidance:",
      Smiley_offers: "Smiley offers a range of tools and resources to help you better understand and manage your emotions. Whether you're feeling happy, sad, worried, or anything in between, we're here to guide you.",
      DM: "Daily Motivation:",
      MOTIVATION:"We provide daily motivational content to inspire and uplift your spirits. Our goal is to help you maintain a positive mindset and stay motivated throughout the day.",
      PR: "Personalized Resources:",
      personalized_resources:" We tailor our recommendations to your unique emotional state. Whether you need self-care tips, relaxation techniques, or a boost in confidence, Smiley has you covered.",
      CS:"Community Support:",
      community:"Connect with a community of like-minded individuals who are on a journey to enhance their emotional well-being. Share your experiences, gain insights, and provide support to others."
      //Survey page translation ended here
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
      showTheDialog: "ajuste",
      youSelected: "Has seleccionado",
      AU:"Sobre nosotros",
      OP:"Nuestro propósito",
      welcome_text: "Bienvenido al sitio web de Smiley, su compañero de confianza para navegar por las complejidades de las emociones y mejorar su bienestar emocional. Nuestra misión es ayudar a los usuarios a abrazar su diversidad emocional y motivarlos a mantener una perspectiva positiva a lo largo del día.",
      PT:" La vida es una jornada repleta de una variedad de emociones, y es completamente normal experimentar una amplia gama de sentimientos diariamente. Sin embargo, hay momentos en que las emociones negativas pueden se tornar opresivas o una motivación que parece indescriptible. Na Smiley, entendemos la importancia del bienestar emocional y el impacto positivo que puede tener en su vida. Nuestro objetivo es buscar soluciones y recursos personalizados para ayudar a administrar sus emociones, aumentar su motivación y, finalmente, llevar una vida más plena y positiva. Acreditamos que toda la emoción, también como desafiadoras, tem valor e pode ser um trampolim para o crescimento pessoal.",
      WWO: "Lo que ofrecemos",
      EG: "Orientación emocional:",
      Smiley_offers: "Smiley ofrece una gama de herramientas y recursos para ayudarlo a comprender y manejar mejor sus emociones. Ya sea que se sienta feliz, triste, preocupado o cualquier cosa intermedia, estamos aquí para guiarlo.",
      DM: "Motivación diaria:",
      MOTIVATION: "Brindamos contenido motivacional diario para inspirarlo y elevar su espíritu. Nuestro objetivo es ayudarlo a mantener una mentalidad positiva y mantenerse motivado a lo largo del día."
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
