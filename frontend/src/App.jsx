import React from 'react';
import CloudmersiveScanner from './components/CloudmersiveScanner';
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.bundle'
import  './App.css';
import About from './components/About';

function App() {
  return (
    <div className="App vh-100">
      <header className="App-header container d-flex justify-content-center">
        <h1 className='mt-5 display-2 fw-bolder brand-name text-center text-danger' >Viruseer</h1>
      </header>
        <CloudmersiveScanner />
        <About />
    </div>
  );
}

export default App;
