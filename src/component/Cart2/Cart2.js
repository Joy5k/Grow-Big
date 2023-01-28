import React from 'react';
import { Link } from 'react-router-dom';

const Cart2 = ({ topic,handleQuizeData }) => {
    const {id, logo, name,total } = topic;
    return (
        <div>
     <div className="max-w-xs rounded-md shadow-md bg-gray-100 dark:text-gray-100 sm:mx-auto ">
      <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-400" />
         <div className="flex flex-col justify-between p-6 space-y-8">
           <div className="space-y-2 border-t-2 w-full">
              <h2 className="text-3xl font-semibold tracking-wide">{ name}</h2>
           <p className="dark:text-gray-100">Available-quiz: { total}</p>
                 </div>
                </div>
                <Link to={`/topics/${id}`}>
                <button onClick={()=>handleQuizeData(topic)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide  bg-gray-400 text-gray-900 hover:bg-slate-400 hover:font-bold">Start Quiz</button>
              </Link>
         </div>                 
         </div>
    );
};

export default Cart2;