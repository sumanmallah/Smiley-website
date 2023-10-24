import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <h1>Smiley Website :)</h1>
      <ul className="App-header-nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#test">test test</a></li>
        <li><a href="#survey" className="App-header-nav-survey-element">Survey</a></li>
      </ul>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
