import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import './PriorityAllocation.css';



const PriorityAllocation = () => {

  const data02 = [
    { status: 'Closed', value: 100, color: '#8884d8' }
  ];

  // Calculate the total sum of all values
  const totalValue = data02.reduce((sum, entry) => sum + entry.value, 0);

  // Add the percentage value for each object
  data02.forEach((entry) => {
    entry.percent = ((entry.value / totalValue) * 100).toFixed(2);
  });


  return (
    <div className='priority-container'>
      <h4>Priority Allocation</h4>

      <div className='priority-pie'>
      <PieChart width={350} height={200}>
        <Pie
          dataKey="value"
          data={data02}
          cx="65%"
          cy="45%"
          outerRadius={67}
          fill="#8884d8"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // const y = cy + radius * Math.sin(-midAngle * RADIAN);

            const xOffset = 50; 
            const yOffset = 50; 

            const outerX = cx + (radius + xOffset) * Math.cos(-midAngle * RADIAN);
            const outerY = cy + (radius + yOffset) * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={outerX}
                y={outerY}
                fill='black'
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline='central'
                fontSize='10px'
              >
                {`${percent}%`}
              </text>
            );
          }}
        />

        <Tooltip
        content={({ active, payload }) => {
          if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
              <div className='status-pop' >
                <p>{`Status: ${data.status}`}</p>
                <p>{`Count: ${data.value} (${data.percent}%)`}</p>
              </div>
            );
          }
          return null;
        }}
        contentStyle={{ pointerEvents: 'none' }}
        />

      </PieChart>

      <div className='priority-legend'>
          {data02.map((entry, index) => (
            <div key={`legend-${index}`} className='status-color'>
              <div style={{ width: '7px', height: '7px', backgroundColor: entry.color, marginRight: '5px', borderRadius: '10px' }} />
              <span>{entry.status}</span>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
};

export default PriorityAllocation;
