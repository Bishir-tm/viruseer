import React from 'react';
import CloudmersiveScanner from './components/CloudmersiveScanner';
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.bundle'
import About from './components/About';
import  './App.css';

// offline js to handle when user is offline 
// import './offline.css';
// import "https://raw.githubusercontent.com/HubSpot/offline/v0.7.13/offline.min.js";

function App() {
  return (
    <div className="App vh-100 bg-dark">
      <header className="App-header bg-dark">
        <h1 className='py-5 display-2 fw-bolder brand-name text-center text-danger' >Viruseer</h1>
      </header>
        <CloudmersiveScanner />
        {/* <About /> */}
    </div>
  );
}

export default App;
