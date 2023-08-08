import React, { useState} from 'react';
import './ResolutionDelay.css';

const ResolutionDelay = () => {
    const [ resolutionDelay, setResolutionDelay ] = useState(0);

  return (
    <div className='reso-delay-container' >
      <h1>1H 10M</h1>
      <h3>Resolution</h3>
      <h4>Delay Time</h4>
    </div>
  );
};

export default ResolutionDelay;