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


function App() {
  return (
    <React.StrictMode>
	    <Header />
	    <BrowserRouter>
		    <Routes>
		      <Route path='/' element={<Home/>} />
		      <Route path='/about' element={<About/>} />                                        
		      <Route path='/survey' element={<Survey />} />
		      <Route path='/contact' element={<Contact />} />
		    </Routes>
	    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
                                                                                                                                                               
