import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Fragment from './Pages/Fragment';

function App() {
  return (
    <React.Fragment>
      <h1>Hello world</h1>
      <Home />
      <About />
      <Fragment />
    </React.Fragment>
  );
}

export default App;
