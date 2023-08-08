import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './BubbleChart.css'
;



const generateRandomData = (count) => {
  const statuses = ['Closed', 'Solved', 'In Progress', 'Assigned', 'Waiting for Client'];
  const priorities = ['High', 'Medium', 'Low'];

  const data = [];

  for (let i = 0; i < count; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const priority = priorities[Math.floor(Math.random() * priorities.length)];

    data.push({
      date: date.getTime(),
      status,
      priority,
      id: i + 1,
      request: `Request ${i + 1}`,
      assignedTo: `User ${i + 1}`,
      dueBy: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric',
               month: 'numeric',
               day: 'numeric', }),
    });
  }

  return data;
};





// Custom scatter shape function to render larger bubbles
const CustomScatterShape = (props) => {
  const { cx, cy, fill, payload } = props;
  const radius = 8; // Adjust this value to change the bubble size

  return (
    <g>
      <circle cx={cx} cy={cy} r={radius} fill={fill} />
      <text x={cx} y={cy} dy={-radius - 2} textAnchor="middle" fill="#333">
        {payload.value}
      </text>
    </g>
  );
};





const BubbleChart = () => {
  const data = generateRandomData(25);

  const statusColors = {
    Closed: 'red',
    Solved: 'green',
    'In Progress': 'gold',
    Assigned: 'blue',
    'Waiting for Client': 'black',
  };

  const colorKey = [
    { status: 'Closed', color: 'red' },
    { status: 'Solved', color: 'green' },
    { status: 'In Progress', color: 'gold' },
    { status: 'Assigned', color: 'blue' },
    { status: 'Waiting for Client', color: 'black' },
  ];


  return (
    <div className='bubble-container'  >

      <div className="color-key-container">
        {colorKey.map(({ status, color }) => (
          <div key={status} className="color-key-item">
            <span className="color-key-box" style={{ backgroundColor: color }} />
            {status}
          </div>
        ))}
      </div>

    <ResponsiveContainer  width={780} height={190}>
      <ScatterChart  line={null} >
      
      <XAxis
            dataKey="date"
            type="number"
            domain={['auto', 'auto']}
            tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
            interval={0} // Show all ticks (remove the interval)
            tickLine={{ transform: 'translate(0, -6)' }} // Move the tick lines above the axis to hide them
            axisLine={false} // Hide the axis line (the line at the bottom of the chart)
            tick={{ fontSize: 10 }}
          />

        <YAxis dataKey="status" type="category" hide />

        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          content={({ payload }) => {
            if (payload && payload[0]) {
              const data = payload[0].payload;;
              return (
                <div className='pop-container' >
                  <h4>Total Requests: 1</h4>
                    <table>
                      <tbody>
                        <tr className='table-head'>
                          <td><strong>ID Request</strong></td>
                          <td><strong>Request</strong></td>
                          <td><strong>Status</strong></td>
                          <td><strong>Priority</strong></td>
                          <td><strong>Assigned to</strong></td>
                          <td><strong>Due By</strong></td>
                        </tr>
                        <tr>
                          <td>{data.id}</td>
                          <td>{data.request}</td>
                          <td>{data.status}</td>
                          <td>{data.priority}</td>
                          <td>{data.assignedTo}</td>
                          <td>{data.dueBy}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              );  
          }
            return null;
          }}
        />

        {Object.keys(statusColors).map((status) => (
          <Scatter
            key={status}
            data={data.filter((entry) => entry.status === status)}
            fill={statusColors[status]}
            shape={<CustomScatterShape />}

          />
        ))}

      </ScatterChart>
    </ResponsiveContainer>
    </div>
  );
};

export default BubbleChart;
