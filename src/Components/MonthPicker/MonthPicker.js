// MonthPicker.js
import React, { useState } from 'react';

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
    <div style={{ boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.2)', padding: '10px', width: '110%', maxHeight: '150px', overflowY: 'hidden',  borderRadius: '15px' }}>
      <h4 style={{ marginBottom: '10px', marginTop:'5px' }} >Month</h4>
      <div style={{ maxHeight: '100px', overflowY: 'scroll' }} >
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
