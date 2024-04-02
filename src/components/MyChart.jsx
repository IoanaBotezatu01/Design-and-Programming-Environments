import React from 'react';
import { PieChart, Pie,Bar, Tooltip, Legend, Cell, ResponsiveContainer, BarChart } from 'recharts';
import Coffees from './Coffee';

const COLORS = ['#682E0B', '#6A4129', '#D5946D', '#270F01', '#5F2401','#AD4405','#291102'];

const MyChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
       <BarChart data={Coffees}>
        <Bar
          dataKey="quantity"
          isAnimationActive={true} 
          nameKey="name" 
          label
          >
          {Coffees.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyChart;