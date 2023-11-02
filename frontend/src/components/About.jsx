import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="container px-4 py-5" id="hanging-icons">
      <h2 className="text-center mb-4 fs-1 fw-bolder">About Viruseer</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div className="card p-3 h-100 d-flex align-items-spacebetween border-dark rounded-4" >
          <h2 className="text-center">Featured title</h2>
          <p className="card-text">
            Viruseer is a powerful tool that allows you to scan files for potential threats
            and ensure the safety of your system. Whether you are concerned about viruses, malware,
            or other security risks, our scanner has got you covered.
          </p>
          
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div className="card p-3 h-100 d-flex align-items-spacebetween border-dark rounded-4" >
          <h2 className="text-center">Featured title</h2>
          <p className="card-text">
            We prioritize your security and provide a fast, reliable, and secure scanning experience.
            Rest assured that your files are in good hands with Viruseer.
          </p>
          
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div className="card p-3 h-100 d-flex align-items-spacebetween border-dark rounded-4" >
          <h2 className="text-center">Featured title</h2>
          <p className="card-text">
            Simply drag and drop a file into the designated area, and Viruseer will
            efficiently analyze the file's contents. The intuitive design and real-time progress updates
            make the scanning process seamless and user-friendly.
          </p>
          
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default About;
