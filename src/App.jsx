import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Internship from './components/Internship';
import Footer from './components/Footer';
import News from './components/News';
import SelectedAwards from './components/SelectedAwards';
import Education from './components/Education';
import More from './components/More';
import './App.css';
import './css/All.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <News />
        <Publications />
        <Internship />
        <Education />
        <SelectedAwards />
        <More />
      </main>
      <Footer />
    </div>
  );
}

export default App;
