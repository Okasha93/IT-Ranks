import React, { useState } from 'react';
import './ResponseTime.css'

const ResponseTime = () => {
    const [ responseRequest, setResponseRequest ] = useState(0);

  return (
    <div className='resp-time-container'>
      <h1>15</h1>
      <h3>Requests</h3>
      <h4>Violated Response Time</h4>
    </div>
  );
};

export default ResponseTime;