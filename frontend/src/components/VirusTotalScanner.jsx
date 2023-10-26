import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const VirusTotalScanner = () => {
  const [file, setFile] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [scanId, setScanId] = useState(null);

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
      const response = await axios.post('http://localhost:3001/scan', formData);

      // Handle the response from the proxy server
      console.log(response);
      setScanId(response.data.data.id); // Set the scan ID received from the API
      setScanResult(null); // Clear previous scan results
    } catch (error) {
      console.error('Error scanning file:', error);
    }
  };

  const getScanResult = async () => {
    try {
      if (scanId) {
        const response = await axios.get(`http://localhost:3001/scan/${scanId}`);

        // Handle the response from the backend
        console.log(response);
        setScanResult(response.data);
      } else {
        console.error('Scan ID not available');
      }
    } catch (error) {
      console.error('Error getting scan result:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>Drag & drop a file here, or click to select a file</p>
      </div>

      {file && (
        <div>
          <h4>File Information:</h4>
          <p>Name: {file.name}</p>
          <p>Size: {file.size} bytes</p>
        </div>
      )}

      {scanId && (
        <div>
          <button onClick={getScanResult}>Get Scan Result</button>
        </div>
      )}

      {scanResult && (
        <div>
          <h4>Scan Result:</h4>
          <pre>{JSON.stringify(scanResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default VirusTotalScanner;
