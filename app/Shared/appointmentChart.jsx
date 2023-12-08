"use client";

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Doctor', value: 400 },
  { name: 'Patient', value: 300 },
  { name: 'Appointment', value: 200 },
];

const COLORS = ['#FF0034', '#7BB13C', '#FFBC34',];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  
  const CustomTooltip = ({ active, payload, }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }
  
    return null;
  };

export default class appointmentChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
        <div className='card bg-white rounded-lg mt-5 p-4 w-[350px] h-80 mx-5 lg:mx-0 lg:w-[503px] lg:h-[350px]'>
        <h1 className='text-xl text-gray-400 font-semibold px-5 pt-2'>Appointment</h1>
        <div className='divider mx-5'></div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
        <Tooltip content={<CustomTooltip />} />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
    );
  }
}




