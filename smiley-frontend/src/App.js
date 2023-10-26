import logo from './logo.svg';

import './App.css';
import React from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Survey from './routes/survey'; // Import the Survey component
import Contact from './routes/survey';



// function Test() {
//   return (<h1>test</h1>);
// }

// function ErrorPage() {
//   return (<h1>Survey</h1>);
// }

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />                                                                                                         
      <Route path='/survey' element={<Survey />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
                                                                                                                                                               