import React from 'react';

const Features = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Card 1: File Upload */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-cloud-upload mb-3" style={{ fontSize: '2rem', color: '#007bff' }}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M704 446H320c-4.4 0-8 3.6-8 8v402c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8V454c0-4.4-3.6-8-8-8zm-328 64h272v117H376V510zm272 290H376V683h272v117z"></path><path d="M424 748a32 32 0 1 0 64 0 32 32 0 1 0-64 0zm0-178a32 32 0 1 0 64 0 32 32 0 1 0-64 0z"></path><path d="M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2.6-93.4-62.7-172.1-148.6-194.9z"></path></svg>
              </i>
              <h5 className="card-title">Secure File Upload</h5>
              <p className="card-text">
                Upload files with confidence. Our system scans every file for viruses to ensure a secure environment.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Virus Scan */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-shield-check mb-3" style={{ fontSize: '2rem', color: '#28a745' }}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.995,6.9c-0.034-0.342-0.241-0.642-0.548-0.795l-8-4c-0.281-0.141-0.613-0.141-0.895,0l-8,4 C3.246,6.259,3.039,6.559,3.005,6.9c-0.011,0.107-0.961,10.767,8.589,15.014C11.723,21.972,11.861,22,12,22 s0.277-0.028,0.406-0.086C21.956,17.667,21.006,7.008,20.995,6.9z M12,19.897C5.231,16.625,4.911,9.642,4.966,7.635L12,4.118 l7.029,3.515C19.066,9.622,18.701,16.651,12,19.897z"></path><path d="M11 12.586L8.707 10.293 7.293 11.707 11 15.414 16.707 9.707 15.293 8.293z"></path></svg>
              </i>
              <h5 className="card-title">Virus Scanning</h5>
              <p className="card-text">
                Our advanced virus scanning technology quickly detects and eliminates threats to keep your data safe.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Secure Environment */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <i className="bi bi-check-circle mb-3" style={{ fontSize: '2rem', color: '#ffc107' }}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg></i>
              <h5 className="card-title">Secure Environment</h5>
              <p className="card-text">
                Enjoy peace of mind knowing that your files are processed in a secure and reliable cloud environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
