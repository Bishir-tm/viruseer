import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const FileUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [scanResult, setScanResult] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3001/scan', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      console.log('File uploaded successfully! Server response:', response.data);
      
      // Assuming the server response includes a 'message' field
      setScanResult(response.data.message);
    } catch (error) {
      console.error('Error uploading file:', error.message);
      setScanResult('Error uploading file.');
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop a file here, or click to select a file</p>
      </div>
      {uploadedFile && (
        <div>
          <p>
            Uploaded File: {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(2)} KB)
          </p>
          <div>
            <p>Uploading: {uploadProgress}%</p>
            <progress value={uploadProgress} max="100" />
          </div>
          {scanResult && <p>{scanResult}</p>}
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #0087F7',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FileUploader;
