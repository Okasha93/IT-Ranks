import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const StatusAllocation = () => {
  const data01 = [
    { name: 'open', value: 1 },
    { name: 'In Progress', value: 1 },
    { name: 'Waiting For Customer', value: 4 },  
    { name: 'Waiting Vendor Reply', value: 4 },
    { name: 'Solved', value: 3 },
    { name: 'Closed', value: 1 },
    { name: 'Permanently Closed', value: 3 },  
  ];

  // Define a custom color palette with different colors for each group
  const colorPalette = ['#8884d8', '#82ca9d', '#ffc658', '#e57373', '#ba68c8', '#4dd0e1', ];

  return (
    <div style={{ boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.2)', padding: '10px', width: '60%', borderRadius: '15px' }}>
      <h6 >Status Allocation</h6>
      <PieChart width={400} height={150}>
        <Pie
          dataKey='value'
          isAnimationActive={false}
          data={data01}
          cx='50%'
          cy='50%'
          outerRadius={60}
          label
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorPalette[index % colorPalette.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StatusAllocation;