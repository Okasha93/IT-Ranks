import React, { useState, useEffect, useCallback } from 'react';

const DateRangePicker = ({ onDateSelect }) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Wrap handleDateSelect with useCallback to memoize the function
  const handleDateSelect = useCallback(() => {
    if (onDateSelect) {
      onDateSelect({ fromDate, toDate });
    }
  }, [fromDate, toDate, onDateSelect]); // Add dependencies to the useCallback dependency array

  // Call the handleDateSelect function whenever fromDate or toDate changes
  useEffect(() => {
    handleDateSelect();
  }, [fromDate, toDate, handleDateSelect]);

  return (
    <div style={{ boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.2)', padding: '10px', width: '110%', height: '100px', borderRadius: '15px', marginBottom: '10px' }}>
      <div  style={{ padding: '15px'}}> 
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>
      <div style={{ padding: '15px'}}>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
