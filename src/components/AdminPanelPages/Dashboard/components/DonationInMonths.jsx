import React, { PureComponent, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot } from 'recharts';
import "./DonationInMonths.css"

const data = [
  {
    date: '2023-01',
    uv: 4000,
   
    amt: 2400,
  },
  {
    date: '2023-02',
    uv: 3000,
    
    amt: 2210,
  },
  {
    date: '2023-03',
    uv: 2023,
   
    amt: 2290,
  },
  {
    date: '2023-04',
    uv: 2780,
   
    amt: 2023,
  },
  {
    date: '2023-05',
    uv: 1890,
    
    amt: 2181,
  },
  {
    date: '2023-06',
    uv: 2390,
   
    amt: 2500,
  },
  {
    date: '2023-07',
    uv: 3490,
   
    amt: 2100,
  },
  {
    date: '2023-08',
    uv: 2390,
   
    amt: 2500,
  },
  {
    date: '2023-09',
    uv: 3490,
   
    amt: 2100,
  },
  {
    date: '2023-10',
    uv: 2390,
   
    amt: 2500,
  },
  {
    date: '2023-11',
    uv: 3490,
   
    amt: 2100,
  },
  {
    date: '2023-12',
    uv: 2390,
   
    amt: 2500,
  },
  {
    date: '2023-13',
    uv: 3490,
   
    amt: 2100,
  },
 
 
  
];

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;
  const isMidMonth = month % 3 === 1;
  

  // if (month % 3 === 1) {
  //   return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  // }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};



const LinearGradientBar = (props) => {
  const { fill, x, y, customWidth, height ,fundRaised, goalAmount} = props;
  const barWidth = customWidth || 20;
  const cornerRadius = 10;
  const completionPercentage = (fundRaised / goalAmount) * 100;
  const colorStops = `0% ${Math.min(completionPercentage, 100)}%, 100%`;

  return (
    <g>
      <defs>
        <linearGradient id={`gradient-${x}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF9F0A" />
          <stop offset="62.9%" stopColor="#FF375F" />
        </linearGradient>
      </defs>
      <rect x={x} y={y} width={barWidth} height={height} rx={cornerRadius} ry={cornerRadius} fill={`url(#gradient-${x})`} />
      {/* <ReferenceDot x={x + barWidth / 2} y={y} r={2} fill="red" /> */}
    </g>
  );
};


export default function DonationInMonths()  {
  const [fundRaised, setFundRaised] = useState(5000);
  const [goalAmount, setGoalAmount] = useState(10000);
  

  
    return (
      <div className='rounded-lg shadow-lg p-5 '>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={renderQuarterTick}
            height={1}
            scale="band"
            xAxisId="quarter"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar className='recharts-layer recharts-bar-rectangle rounded' dataKey="pv"  /> */}
          <Bar className='w-5' dataKey="uv"  shape={(props) => <LinearGradientBar fundRaised={fundRaised} goalAmount={goalAmount} customWidth={20} {...props} />}/>
          
        </BarChart>
      </ResponsiveContainer>
       </div>
    );
  }
