import React, { useState} from 'react';

const ResponseDelay = () => {
    const [ responseDelay, setResponseDelay ] = useState(0);

  return (
    <div style={{ boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.2)', padding: '10px', width: '25%', borderRadius: '15px' }}>
      <h1 style={{ color: 'red'}}>12H 25M</h1>
      <h6>Response</h6>
      <p style={{ fontSize: 10}}>Delay Time</p>
    </div>
  );
};

export default ResponseDelay;