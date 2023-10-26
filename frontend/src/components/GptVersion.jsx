import React from 'react'

const GptVersion = () => {
   <div className='d-flex justify-content-center' 
        {...getRootProps()}
        style={{
          border: `10px ${isDragging ? 'red' : 'yellow'}`,
          cursor: 'pointer',
          transition: 'border 0.3s ease',
        }}
      >
        <input {...getInputProps()} />
        <div className='vh-100'>
          <img src={myImage} alt="My Image" className='rounded rounded-circle w-100'   />
          <p className='fs-1 fw-bolder text-light' >Drag 'n' drop a file here, or click to select a file</p>
          {uploadProgress > 0 && (
            <div className="progress" style={{ marginTop: '10px' }}>
              <div
                className="progress-bar bg-dark p-5 "
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
      </div>
}

export default GptVersion