import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
      dueBy: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    });
  }

  return data;
};

const BubbleChart = () => {
  const data = generateRandomData(30);

  const statusColors = {
    Closed: 'red',
    Solved: 'green',
    'In Progress': 'gold',
    Assigned: 'blue',
    'Waiting for Client': 'black',
  };

  return (
    <div style={{ boxShadow: '5px 5px 25px rgba(0, 0, 0, 0.2)', padding: '10px', width: '98%', borderRadius: '15px' }}>
    <ResponsiveContainer width={650} height={200}>
      <ScatterChart  line={null} >
      
        <XAxis
          dataKey="date"
          type="number"
          domain={['auto', 'auto']}
          tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          interval={0}
          tick={{ fontSize: 12 }}
        />
        <YAxis dataKey="status" type="category" hide />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          content={({ payload }) => {
            if (payload && payload[0]) {
              const data = payload[0].payload;
              return (
                <div style={{ backgroundColor: '#f5f5f5', padding: '10px', border: '1px solid #ccc' }}>
                  <p><strong>ID Request:</strong> {data.id}</p>
                  <p><strong>Request:</strong> {data.request}</p>
                  <p><strong>Status:</strong> {data.status}</p>
                  <p><strong>Priority:</strong> {data.priority}</p>
                  <p><strong>Assigned to:</strong> {data.assignedTo}</p>
                  <p><strong>Due By:</strong> {data.dueBy}</p>
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
          />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
    </div>
  );
};

export default BubbleChart;
