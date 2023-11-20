import './App.css';
import React,{useState, useEffect} from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import About from './routes/about.js';
import Survey from './routes/survey.js';
import ContactUs from './routes/contact.js';
import OptionsWheel from './components/options_modal.js';
import AboutMyData from './routes/calendar.js';
import SurveyEthan1 from './routes/survey-ethan1.js';
import './i18n.js';
import { useTranslation } from 'react-i18next';


function Header({toggleDarkMode, isDarkMode}) {
    const { t, i18n } = useTranslation();
  console.log('Current language:', i18n.language); // Log the current language

  /* t() translates using a hashmap for each language essentially. works automagically */
  return (
    <header className="App-header">
            <img src="stay-happy-high-resolution-logo-transparent.png" className="app-logo-awesome" style={{width: "125px", height: "70px"}} />

      <ul className="App-header-nav-links">
        <li><a href={`/about`}>
          {t('nav_about_button')}
          </a></li>
        <li><a href={`/survey`} className="App-header-nav-survey-element">
          {t('nav_survey_button')}
          </a></li>
        <li><a href={`/me`}>
          {t('nav_my_userdata_button')}
          </a></li>
        <li><a href={`/contact-us`}>
          {t('nav_contact_us_button')}
          </a></li>
<<<<<<< HEAD
          <li><button onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button></li>
=======
        <li><a href={`/survey-m2`}>
          {t('nav_survey_ethan1_button')}
          </a></li>
>>>>>>> b05629a02d997f82f6e8385fcea8182063dcd5cc
      </ul>
      <OptionsWheel />
    </header>
  );
}

function ErrorPage() {
  const { t } = useTranslation();
  return (<h1>{t('page_not_found_message')}</h1>);
}

const router = createBrowserRouter([
  { path: "/", element: <About />, errorElement: <ErrorPage />,},
  { path: "/about", element: <About />, errorElement: <ErrorPage />, },
  { path: "/survey", element: <Survey />, errorElement: <ErrorPage />, },
  { path: "/contact-us", element: <ContactUs />, errorElement: <ErrorPage />},
  { path: "/me", element: <AboutMyData />, errorElement: <ErrorPage />},
  { path: "/survey-m2", element: <SurveyEthan1 />, errorElement: <ErrorPage />},
]);

function App() {
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <React.StrictMode>
<<<<<<< HEAD
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <RouterProvider router={router} />
=======
	    <Header />
      <RouterProvider router={router} className="router-app-content-wrap" />
>>>>>>> b05629a02d997f82f6e8385fcea8182063dcd5cc
      <footer className="footer">
        <small>This is our footer; we will add more to it soon</small>
      </footer>
    </React.StrictMode>
  );
}

export default App;
