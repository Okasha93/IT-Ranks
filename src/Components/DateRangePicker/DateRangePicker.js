import React, { useState, useEffect, useCallback } from 'react';
import './DateRangePicker.css';



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
    <div className='date-container' >
      <div className='from-date'> 
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>
      <div className='to-date'>
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





