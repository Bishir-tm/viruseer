// CloudmersiveScanner.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useDropzone } from 'react-dropzone';
import Features from './Features';

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
    if (!window.navigator.onLine) {
      Swal.fire('You seem to be offline', 'Please connect to the internet and try again !', 'warning')
      // return
    }
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // const response = await axios.post('http://localhost:8080/scan', formData, {
      const response = await axios.post('https://viruseer.onrender.com/scan', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      // Handle the response from the proxy server
      console.log(response.data);
      setScanResult(response.data);
      setUploadProgress(0);

      // Check result and show SweetAlert2
      if (response.data.CleanResult) {
        showCleanScanAlert();
      } else if (!response.data.CleanResult && response.data.FoundViruses) {
        showVirusAlert(response.data.FoundViruses);
      }


    } catch (error) {
      if (error.message !== 'Network Error') {
        Swal.fire('error', error.message, 'error');
      }
      console.error('Error scanning file:', error);
    }
  };

  const showCleanScanAlert = () => {
    Swal.fire({
      icon: 'info',
      title: 'Clean Scan!',
      html: `No viruses found in the file.`,
      iconHtml: `<img src="./images/shield.svg">`,
      customClass: {
        icon: 'clean-scan-icon', // Add a custom class for the icon
        popup: 'clean-scan-popup',
        title: 'clean-scan-title',
        confirmButton: 'clean-scan-confirm-button',
      },
    });
  };
  
  const showVirusAlert = (foundViruses) => {
    const virusDetails = foundViruses.map((virus) => `<li>(${virus.VirusName})</li>`);
    Swal.fire({
      icon: 'error',
      title: 'Virus Detected!',
      html: `The file contains the following virus(es):<br/>${virusDetails.join('<ol>')}`,
      iconHtml: `<img src="./images/virus.svg" style="background-color: white; border-raduis: 50%">`,
      customClass: {
        icon: 'virus-alert-icon', // Add a custom class for the icon
        popup: 'virus-alert-popup',
        title: 'virus-alert-title',
        confirmButton: 'virus-alert-confirm-button',
      },
    });
  };


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className=" h-100 bg-dark">
      <div
        className={`container w-50 ${isDragActive ? 'bg-primary' : 'bg-white'} text-center p-5 border border-3 rounded-5`}
        style={{
          cursor: 'pointer',
          backgroundImage: file ? 'none' : 'url("./images/drop.gif")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div {...getRootProps()} className="dropzone" style={{ cursor: 'pointer' }}>
          <input {...getInputProps()} />
          {file ? (
            <div>
              <div className='border border-dark border-3 rounded-4 py-3'  >
                <h4>File Information:</h4>
                <p>Name: {file.name}</p>
                <p className="">Size: {file.size} bytes</p>
              </div>
              <hr />
              <div  className="fw-bolder p-3 bg-dark  bg-opacity-75 rounded text-white " style={{backdropFilter: 'blur(8px)'}}>
                <img src="./images/drop.gif" width={55} height={55} alt="drop-icon" style={{}} srcset="" />
                  <p>{`
                      ${ isDragActive ? 'Release to drop file' : 'Drag & drop another file here, or click to select another file'}
                    `}</p>
              </div>
            </div>
            
          ) : (
            <p className="fw-bolder p-3 bg-dark  bg-opacity-25  rounded text-dark" style={{backdropFilter: 'blur(3px)'}}>
              {`${ isDragActive ? 'Release to drop the file' : 'Drag & drop a file here, or click to select a file'}`}</p>
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
                {uploadProgress > 0 &&
                    uploadProgress} %
                   <p className="">Scanning, please wait...</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {scanResult && (
        <div className="text-danger text-center  my-5  p-3 border border-danger bg-white" >
          <h1 className=''>Scan Result:</h1>
          {/* <pre className="">{JSON.stringify(scanResult, null, 2)}</pre> */}
          {scanResult.CleanResult ? 
            (<h4>Your File is Clean !</h4>)
            : 
            ( <div>
                <h4>Your File is Infected. {scanResult.FoundViruses.length} virus(es) found:</h4>    
                <div>{scanResult.FoundViruses.map((virus) => `<li>(${virus.VirusName})</li>`)} </div>
            </div>
            )
          }
        </div>
      )}

      <div>
        <Features />
      </div>
    </div>
  );
};

export default CloudmersiveScanner;
