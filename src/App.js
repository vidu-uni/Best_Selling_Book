import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <br></br>
      <Home />
    </React.Fragment>
  );
}

export default App;