import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Projects from './components/project';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

