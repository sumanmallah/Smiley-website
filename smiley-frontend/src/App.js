import './App.css';
import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './routes/home.js';
import About from './routes/about.js';
import Survey from './routes/survey.js';
import ContactUs from './routes/contact.js';
import OptionsWheel from './components/options_modal.js';
import './i18n.js';
import { useTranslation } from 'react-i18next';


function Header() {
    const { t, i18n } = useTranslation();
  console.log('Current language:', i18n.language); // Log the current language

  /* t() translates using a hashmap for each language essentially. works automagically */
  return (
    <header className="App-header">
      <h1>Smiley Website :)</h1>
      <ul className="App-header-nav-links">
        <li><a href={`/home`}>
          {t('nav_home_button')}
          </a></li>
        <li><a href={`/about`}>
          {t('nav_about_button')}
          </a></li>
        <li><a href={`/survey`} className="App-header-nav-survey-element">
          {t('nav_survey_button')}
          </a></li>
        <li><a href={`/contact-us`}>
          {t('nav_contact_us_button')}
          </a></li>
      </ul>
      <OptionsWheel />
    </header>
  );
}

function ErrorPage() {
  const { t } = useTranslation();
  return (<h1>{t('404_page_message')}</h1>);
}

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage />,},
  { path: "/home", element: <Home />, errorElement: <ErrorPage />,},
  { path: "/about", element: <About />, errorElement: <ErrorPage />, },
  { path: "/survey", element: <Survey />, errorElement: <ErrorPage />, },
  { path: "/contact-us", element: <ContactUs />, errorElement: <ErrorPage />},
]);

function App() {
  return (
    <React.StrictMode>
	    <Header />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
