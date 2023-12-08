"use client";

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [

  {
    name: '2016',
    person: 50,
    pv: 150,
    amt: 2210,
  },
  {
    name: '2017',
    person: 70,
    pv: 80,
    amt: 2290,
  },
  {
    name: '2018',
    person: 140,
    pv: 40,
    amt: 2000,
  },
  {
    name: '2019',
    person: 80,
    pv: 120,
    amt: 2181,
  },
  {
    name: '2020',
    person: 60,
    pv: 70,
    amt: 2500,
  },
  {
    name: '2021',
    person: 70,
    pv: 50,
    amt: 2100,
  },
  {
    name: '2022',
    person: 180,
    pv: 50,
    amt: 2100,
  },
];

export default class patientCharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
     <div className='card bg-white rounded-lg mt-5 p-4 w-[350px] h-80 mx-5 lg:mx-0 lg:w-[503px] lg:h-[350px]'>
      <h1 className='text-xl text-gray-400 font-semibold px-5 pt-2'>Patient</h1>
      <div className='divider mx-5'></div>
       <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="person" stroke="#8884d8" fill="#BCBCBC" />
        </AreaChart>
      </ResponsiveContainer>
     </div>
    );
  }
}
