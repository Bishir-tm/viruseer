// CloudmersiveScanner.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const CloudmersiveScanner = () => {
  const [file, setFile] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);

    // Perform file scan here
    scanFile(selectedFile);
  };

  const scanFile = async (selectedFile) => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:8080/scan', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      // Handle the response from the proxy server
      console.log(response);
      setScanResult(response.data);
      setUploadProgress(0);
    } catch (error) {
      alert(error.message)
      console.error('Error scanning file:', error);
    }
  };


  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="vh-100 bg-dark">
      <div className="container w-50 bg-white text-center p-5 border border-3 rounded-5" style={{cursor: 'pointer',backgroundImage: file ? 'none' : 'url("./images/drop.gif")', backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}>
        <div {...getRootProps()} className="dropzone"  >
          <input {...getInputProps()} />
          {file ? (
            <div>
              <h4>File Information:</h4>
              <p>Name: {file.name}</p>
              <p>Size: {file.size} bytes</p>
              <p className=''>Size: {file.size} bytes</p>
            </div>
          ): <p className='fw-bolder p-2 bg-dark bg-opacity-25 rounded text-danger'>Drag & drop a file here, or click to select a file</p>
          }
           {uploadProgress > 0 && (
          <div className="progress mt-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${uploadProgress}%` }}
              aria-valuenow={uploadProgress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {uploadProgress>0 ? uploadProgress+'%' : <p className=''>Scanning...</p>}
            </div>
          </div>
        )}
        </div> 

      </div>
        {scanResult && (
          <div className="mt-3 text-light">
            <h4>Scan Result:</h4>
            <pre className='text-light'>{JSON.stringify(scanResult, null, 2)}</pre>
          </div>
        )}
    </div>
  );
};

export default CloudmersiveScanner;
