import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './StatusAllocation.css';

const StatusAllocation = () => {

  const data01 = [
    { status: 'open', value: 5, color: '#82ca9d' },
    { status: 'In Progress', value: 8, color: '#ffc658'},
    { status: 'Waiting For Customer', value: 12, color: '#e57373'},  
    { status: 'Waiting Vendor Reply', value: 7, color: '#ba68c8'},
    { status: 'Solved', value: 6, color: '#4dd0e1'},
    { status: 'Closed', value: 4, color: '#808000'},
    { status: 'Permanently Closed', value: 3, color: '#800000'},  
  ];

  // Calculate the total sum of all values
  const totalValue = data01.reduce((sum, entry) => sum + entry.value, 0);

  // Add the percentage value for each object
  data01.forEach((entry) => {
    entry.percent = ((entry.value / totalValue) * 100).toFixed(2);
  });

  return (
    <div className='status-container'>
      <h4>Status Allocation</h4>

      <div className='pie-container'>
        <PieChart width={300} height={220}>

        <Pie
            dataKey='value'
            isAnimationActive={true}
            data={data01}
            cx='40%'
            cy='40%'
            outerRadius={67}
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
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
        </Pie>

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

        <div className='status-legend'>
          {data01.map((entry, index) => (
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

export default StatusAllocation;
