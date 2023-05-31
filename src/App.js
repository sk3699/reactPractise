import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Tindercards from './Tindercards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    // BEM class naming conventions
    <div className="App">
      <Header/>
      <Tindercards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
