import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';


const Statics = () => {
    const chartData = useLoaderData();
    const AllData = chartData.data;
    console.log(AllData);
    return (
        <div>
            <h2 className='text-4xl m-4 italic font-semibold text-violet-400'>Quiz analysis</h2>
           <p className='text-violet-500 font-semibold mb-4'> We are showing  total quiz below </p>
            <div className='ml-[10%]'>
       <ResponsiveContainer  width="90%" height={400}>
        <AreaChart className='w-full mx-auto'
          width={700}
          height={300}
          data={AllData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area dataKey="total" fill="#8884d8" />
         
        </AreaChart>
      </ResponsiveContainer>
        </div>
        </div>
    );
};

export default Statics;