import React, { useState} from 'react';
import './ResolutionTime.css';


const ResolutionTime = () => {
    const [ resolutionRequest, setResolutionRequest ] = useState(0);

  return (
    <div className='reso-time-container'>
      <h1>2</h1>
      <h3>Requests</h3>
      <h4>Violated Resolution Time</h4>
    </div>
  );
};

export default ResolutionTime;