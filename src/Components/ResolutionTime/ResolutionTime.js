import React, { useState} from 'react';

const ResolutionTime = () => {
    const [ resolutionRequest, setResolutionRequest ] = useState(0);

  return (
    <div style={{ boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.2)', padding: '10px', width: '25%', borderRadius: '15px' }}>
      <h1 style={{ color: 'red'}}>2</h1>
      <h6>Requests</h6>
      <p style={{ fontSize: 10}}>Violated Resolution Time</p>
    </div>
  );
};

export default ResolutionTime;