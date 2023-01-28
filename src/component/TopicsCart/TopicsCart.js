import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart2 from '../Cart2/Cart2';

const TopicsCart = () => {
    const topicsInObject = useLoaderData();
    const topics = topicsInObject.data;
    return(
        <div>
            <h2 className=' m-8 text-4xl font-bold italic text-gray-500'>Check your knowledge with the quiz</h2>
           
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {
              topics.map(topic =>     
                       <Cart2 key={topic.id}
                    topic={topic}
                    id={topic.id}
                ></Cart2>)
                }
           
            </div>
        </div>
    );
};

export default TopicsCart;