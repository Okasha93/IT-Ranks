import React, { useState } from 'react';

const Priority = ({ onPrioritySelect }) => {
  const priorities = ['P1', 'P2', 'P3', 'P4'];
  const [selectedPriority, setSelectedPriority] = useState('');

  // Function to handle the priority selection
  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
    if (onPrioritySelect) {
      onPrioritySelect(priority);
    }
  };

  return (
    <div style={{ boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.2)', padding: '10px', width: '110%', borderRadius: '15px' }}>
      <h4 style={{ marginTop: '5px' }}>Priority</h4>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          {priorities.slice(0, 2).map((priority) => (
            <div
              key={priority}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: selectedPriority === priority ? 'lightblue' : 'rgb(222, 219, 219)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginRight: '5px',
              }}
              onClick={() => handlePrioritySelect(priority)}
            >
              {priority}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: '5px' }}>
          {priorities.slice(2).map((priority) => (
            <div
              key={priority}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: selectedPriority === priority ? 'lightblue' : 'rgb(222, 219, 219)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginRight: '5px',
              }}
              onClick={() => handlePrioritySelect(priority)}
            >
              {priority}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Priority;
