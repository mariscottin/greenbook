import React from 'react';
import MainNavigation from './components/MainNavigation';
import Cover from './components/Cover';
import Approach from './components/Approach';
import Splitter from './components/Splitter';
import About from './components/About';
import Banner from './components/Banner';
import Contact from  './components/Contact';
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Cover />
      <Approach />
      <Splitter />
      <About />
      <Banner />
     
      <Footer />
    </div>
  );
}

export default App;
