import React, { useState } from 'react';
import './MonthPicker.css';

const MonthPicker = ({ onMonthSelect }) => {
  const [selectedMonths, setSelectedMonths] = useState([]);

  // Function to handle the month selection
  const handleMonthSelect = (event) => {
    const selectedMonth = event.target.value;
    if (selectedMonths.includes(selectedMonth)) {
      setSelectedMonths(selectedMonths.filter((month) => month !== selectedMonth));
    } else {
      setSelectedMonths([...selectedMonths, selectedMonth]);
    }
    if (onMonthSelect) {
      onMonthSelect(selectedMonths); // Pass the updated selectedMonths array to the parent component
    }
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className='month-container'>
      <h4 >Month</h4>
      <div className='month-picker' >
      {months.map((month) => (
        <div key={month}>
          <label>
            <input
              type="checkbox"
              value={month}
              checked={selectedMonths.includes(month)}
              onChange={handleMonthSelect}
            />
            {month}
          </label>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MonthPicker;
