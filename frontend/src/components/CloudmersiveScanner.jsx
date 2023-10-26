// CloudmersiveScanner.jsx
import React, { useState } from 'react';
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
      const response = await axios.post('http://localhost:3001/scan', formData, {
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
      console.error('Error scanning file:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="container mt-5">
      <div {...getRootProps()} className="dropzone text-center p-5 border">
        <input {...getInputProps()} />
        <p>Drag & drop a file here, or click to select a file</p>
        {file && (
          <div>
            <h4>File Information:</h4>
            <p>Name: {file.name}</p>
            <p>Size: {file.size} bytes</p>
          </div>
        )}
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
              {uploadProgress}%
            </div>
          </div>
        )}
      </div>

      {scanResult && (
        <div className="mt-3">
          <h4>Scan Result:</h4>
          <pre>{JSON.stringify(scanResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CloudmersiveScanner;
