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
      page_not_found_message: 'Error 404: Page Not Found',
      nav_survey_ethan1_button: "Camera Survey",
      nav_survey_ethan2_button: "Microphone Survey",
      
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
      community:"Connect with a community of like-minded individuals who are on a journey to enhance their emotional well-being. Share your experiences, gain insights, and provide support to others.",
      OT:"Our Team",
      team_text:"The Smiley team is comprised of dedicated individuals who are passionate about emotional well-being and mental health. We're committed to creating a safe and inclusive space for everyone to explore their feelings and find the motivation they need.",
      //contact page translation starts here
      FN:"Full Name:",
      EM:"Email: ",
      PN:"Phone Number:",
      RFC:"Reason for your contact:",
      submit:"Submit",
      gbm:"We will get back to you as soon as possible."
      //survety.js translation
    




    }
  },
  es: {
    translation: {
      nav_home_button: 'Inicio',
      nav_about_button: 'Acerca de',
      nav_survey_button: 'Encuesta',
      nav_contact_us_button: 'Contáctenos',
      nav_my_userdata_button: 'Mis datos',
      page_not_found_message: 'Error 404: Página no encontrada',
      nav_survey_ethan1_button: "Camera Survey",
      nav_survey_ethan2_button: "Microphone Survey",



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
      MOTIVATION: "Brindamos contenido motivacional diario para inspirarlo y elevar su espíritu. Nuestro objetivo es ayudarlo a mantener una mentalidad positiva y mantenerse motivado a lo largo del día.",
      PR: "Recursos Personalizados:",
      personalized_resources: "Adaptamos nuestras recomendaciones a tu estado emocional único. Ya sea que necesites consejos de autocuidado, técnicas de relajación o un impulso en la confianza, Smiley tiene todo lo que necesitas.",
      CS: "Apoyo Comunitario:",
      community: "Conéctate con una comunidad de personas afines que están en un viaje para mejorar su bienestar emocional. Comparte tus experiencias, obtén perspicacias y brinda apoyo a los demás.",
      OT: "Nuestro Equipo",
      team_text: "El equipo de Smiley está compuesto por personas dedicadas apasionadas por el bienestar emocional y la salud mental. Estamos comprometidos en crear un espacio seguro e inclusivo para que todos puedan explorar sus sentimientos y encontrar la motivación que necesitan.",
     //contact.js translation
      FN: "Nombre Completo:",
      EM: "Correo Electrónico: ",
      PN: "Número de Teléfono:",
      RFC: "Razón de su contacto:",
      submit: "Enviar",
      gbm: "Nos pondremos en contacto con usted lo antes posible."
    
    }
  },
fr: {
    translation: {
      nav_home_button: 'Accueil',
      nav_about_button: 'À propos',
      nav_survey_button: 'Sondage',
      nav_contact_us_button: 'Contactez-nous',
      nav_my_userdata_button: 'Mes données',
      page_not_found_message: 'Erreur 404 : Page non trouvée',
      choose: "Choisir...",
      language: "Langue : ",
      confirm: "Confirmer",
      cancel: "Fermer",
      english: "Anglais",
      spanish: "Espagnol",
      french: "Français",
      showTheDialog: "Paramètres",
      youSelected: "Vous avez sélectionné",
      survey_comments: "Commentaires supplémentaires :",
      welcome_text: "Bienvenue sur le site de Smiley, votre compagnon de confiance pour naviguer dans la complexité des émotions et améliorer votre bien-être émotionnel. Notre mission est d'aider les utilisateurs à embrasser leur diversité émotionnelle et à les motiver à maintenir une perspective positive tout au long de la journée.",
      AU: "À propos de nous",
      OP: "Notre objectif",
      PT: "La vie est un voyage rempli d'une gamme d'émotions, et il est tout à fait normal de ressentir une large gamme de sentiments au quotidien. Cependant, il y a des moments où les émotions négatives peuvent devenir accablantes, ou la motivation semble insaisissable. Chez Smiley, nous comprenons l'importance du bien-être émotionnel et de l'impact positif qu'il peut avoir sur votre vie. Notre but est de fournir des solutions personnalisées et des ressources pour vous aider à gérer vos émotions, booster votre motivation et finalement mener une vie plus épanouissante et positive. Nous croyons que chaque émotion, même les plus difficiles, a de la valeur et peut être un tremplin vers la croissance personnelle.",
      WWO: "Ce que nous offrons",
      EG: "Orientation émotionnelle :",
      Smiley_offers: "Smiley offre une gamme d'outils et de ressources pour vous aider à mieux comprendre et gérer vos émotions. Que vous vous sentiez heureux, triste, inquiet ou quelque chose entre les deux, nous sommes là pour vous guider.",
      DM: "Motivation quotidienne :",
      MOTIVATION: "Nous fournissons du contenu motivationnel quotidien pour inspirer et élever votre esprit. Notre objectif est de vous aider à maintenir un état d'esprit positif et à rester motivé tout au long de la journée.",
      PR: "Ressources personnalisées :",
      personalized_resources: "Nous adaptons nos recommandations à votre état émotionnel unique. Que vous ayez besoin de conseils d'auto-soin, de techniques de relaxation ou d'un regain de confiance, Smiley vous couvre.",
      CS: "Soutien communautaire :",
      community: "Connectez-vous avec une communauté d'individus partageant les mêmes idées qui sont en voyage pour améliorer leur bien-être émotionnel. Partagez vos expériences, gagnez des insights et apportez votre soutien aux autres.",
      OT: "Notre équipe",
      team_text: "L'équipe Smiley est composée d'individus dévoués passionnés par le bien-être émotionnel et la santé mentale. Nous nous engageons à créer un espace sûr et inclusif pour que chacun puisse explorer ses sentiments et trouver la motivation dont il a besoin.",
      //contact.js translation
      FN: "Nom Complet :",
      EM: "ECourriel : ",
      PN: "Numéro de Téléphone :",
      RFC: "Raison de votre contact :",
      submit: "Soumettre",
      gbm: "Nous vous recontacterons dès que possible."
    }
  },  

ar: {
     translation: {
       nav_home_button: "الصفحة الرئيسية",
       nav_about_button: "حول",
       nav_survey_button: "استطلاع",
       nav_contact_us_button: "اتصل بنا",
       nav_my_userdata_button: "بياناتي",
       page_not_found_message: "خطأ 404: لم يتم العثور على الصفحة",
       choose: "اختر...",
       language: "اللغة:",
       confirm: "تأكيد",
       cancel: "إغلاق",
       spanish: "الإسبانية",
       french: "الفرنسية",
       showTheDialog: "الإعدادات",
       youSelected: "لقد حددت",
       Survey_comments: "تعليقات إضافية:",
       welcome_text: "مرحبًا بك في موقع Smiley, رفيقك الموثوق به في التنقل بين تعقيدات العواطف وتعزيز رفاهيتك العاطفية. مهمتنا هي مساعدة المستخدمين على احتضان تنوعهم العاطفي وتحفيزهم على الحفاظ على نظرة إيجابية طوال اليوم." ,
       AU:"نبذة عنا",
       OP: "هدفنا",
       PT: "الحياة عبارة عن رحلة مليئة بمجموعة من المشاعر, ومن الطبيعي تمامًا تجربة مجموعة واسعة من المشاعر يوميًا. ومع ذلك، هناك أوقات يمكن أن تصبح فيها المشاعر السلبية طاغية، أو يبدو الدافع بعيد المنال. في Smiley، نحن نفهم أهمية الرفاهية العاطفية والأثر الإيجابي الذي يمكن أن تحدثه على حياتك. هدفنا هو توفير حلول وموارد مخصصة لمساعدتك في إدارة عواطفك، وتعزيز دوافعك، وفي نهاية المطاف عيش حياة أكثر إشباعًا وإيجابية. نحن نؤمن بذلك كل عاطفة، حتى تلك التي تمثل تحديًا، لها قيمة ويمكن أن تكون نقطة انطلاق نحو النمو الشخصي.",
       WWO: "ما نقدمه",
       EG: "التوجيه العاطفي:",
       Smiley_offers: "يقدم Smiley مجموعة من الأدوات والموارد لمساعدتك على فهم مشاعرك وإدارتها بشكل أفضل. سواء كنت تشعر بالسعادة أو الحزن أو القلق أو أي شيء بينهما, فنحن هنا لإرشادك.",
       DM: "التحفيز اليومي:",
       MOTIVATION: "نحن نقدم محتوى تحفيزيًا يوميًا لإلهامك ورفع معنوياتك. هدفنا هو مساعدتك في الحفاظ على عقلية إيجابية والبقاء متحفزًا طوال اليوم.",
       PR: "الموارد الشخصية",
       personalized_resources:"نحن نخصص توصياتنا لحالتك العاطفية الفريدة. سواء كنت بحاجة إلى نصائح للعناية بالذات، أو تقنيات للاسترخاء، أو دفعة في الثقة بالنفس، سمايلي في خدمتك.",
       CS:" الدعم المجتمعي",
       community:" تواصل مع مجتمع من الأفراد ذوي التفكير المماثل الذين يسعون لتحسين رفاهيتهم العاطفية. شارك تجاربك، واكتسب رؤى، وقدم الدعم للآخرين.",
       OT:" فريقن",
       team_text:" يتكون فريق سمايلي من أفراد متفانين شغوفين بالرفاهية العاطفية والصحة النفسية. نحن ملتزمون بخلق مساحة آمنة وشاملة للجميع لاستكشاف مشاعرهم وإيجاد الدافع الذي يحتاجون إليه.",
       //contact.js translation
       FN: "الاسم الكامل:",
       EM: "البريد الإلكتروني: ",
       PN: "رقم الهاتف:",
       RFC: "سبب تواصلك:",
       submit: "إرسال",
       gbm: "سنعاود الاتصال بك في أقرب وقت ممكن."
     
    }
   },
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
