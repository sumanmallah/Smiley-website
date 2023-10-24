import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

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

function Home() {
  return (<h1>home</h1>);
}
function About() {
  return (<h1>about</h1>);
}
function Test() {
  return (<h1>test</h1>);
}
function Survey() {
  return (<h1>Survey</h1>);
}

function ErrorPage() {
  return (<h1>Survey</h1>);
}


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <Test />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/survey",
    element: <Survey />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return (
    <div className="App">
      <Header />
      <React.StrictMode>
      <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
