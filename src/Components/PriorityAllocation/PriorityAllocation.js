import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const PriorityAllocation = () => {
  const data02 = [
    { name: 'Closed', value: 100 }
  ];

  return (
    <div style={{ boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.2)', padding: '10px', width: '33%', marginLeft: '5px', borderRadius: '15px' }}>
      <h6>Priority Allocation</h6>
      <PieChart width={200} height={150}>
        <Pie
          dataKey="value"
          data={data02}
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PriorityAllocation;
