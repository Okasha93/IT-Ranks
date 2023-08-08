import React, { useState} from 'react';
import './ResponseDelay.css';

const ResponseDelay = () => {
    const [ responseDelay, setResponseDelay ] = useState(0);

  return (
    <div className='resp-delay-container' >
      <h1>12H 25M</h1>
      <h3>Response</h3>
      <h4>Delay Time</h4>
    </div>
  );
};

export default ResponseDelay;