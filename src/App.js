import React from 'react';
import MainNavigation from './components/MainNavigation';
import Cover from './components/Cover';
import Approach from './components/Approach';

import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Cover />
      <Approach />
    </div>
  );
}

export default App;
