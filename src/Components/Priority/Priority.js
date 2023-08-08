import React, { useState } from 'react';
import './Priority.css';


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
    <div className='prio-container' >
      <h4>Priority</h4>
      <div className='priority'>
        <div style={{ display: 'flex' }}>
          {priorities.slice(0, 2).map((priority) => (
            <div
              className='priority-box'
              key={priority}
              style={{
                backgroundColor: selectedPriority === priority ? '	#808080' : 'white',
                color: selectedPriority === priority ? 'white' : 'black',
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
              className='priority-box'
              key={priority}
              style={{
                backgroundColor: selectedPriority === priority ? '	#808080' : 'white',
                color: selectedPriority === priority ? 'white' : 'black',
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
