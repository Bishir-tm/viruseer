import React from 'react';
import FileUploader from './components/FileUploader';
import VirusTotalScanner from './components/VirusTotalScanner';
import CloudmersiveScanner from './components/CloudmersiveScanner';
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.bundle'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Viruseer</h1>
        {/* <FileUploader /> */}
        {/* <VirusTotalScanner /> */}
        <CloudmersiveScanner />
      </header>
    </div>
  );
}

export default App;
