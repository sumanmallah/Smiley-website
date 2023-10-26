import './App.css';
import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Survey from './routes/survey';

function Header() {
  return (
    <header className="App-header">
      <h1>Smiley Website :)</h1>
      <ul className="App-header-nav-links">
        <li><a href={`/home`}>Home</a></li>
        <li><a href={`/about`}>About</a></li>
        <li><a href={`/test`}>test test</a></li>
        <li><a href={`/survey`} className="App-header-nav-survey-element">Survey</a></li>
      </ul>
    </header>
  );
}

function ErrorPage() {
  return (<h1>Error! PLSLOG</h1>);
}

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage />,},
  { path: "/home", element: <Home />, errorElement: <ErrorPage />,},
  { path: "/about", element: <About />, errorElement: <ErrorPage />, },
  { path: "/survey", element: <Survey />, errorElement: <ErrorPage />, },
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
