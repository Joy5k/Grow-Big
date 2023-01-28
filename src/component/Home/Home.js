import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';

const Home = () => {
    const topicsInObject = useLoaderData();
    const topics = topicsInObject.data;
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="web-dev.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto border-2 -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md  bg-gradient-to-r from-purple-400 to-pink-400 ">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Learn Web Development With Grow-Big</a>
				<p className="text-xs dark:text-gray-400">By
					<a rel="noopener noreferrer" href="https://web.facebook.com/profile.php?id=100050264947375"  className="text-xs hover:underline">   Mehedi Hasan</a>
				</p>
			</div>
			<div className="dark:text-gray-100">
				<p> Learn web-development with Grow-Big. We have efficient teachers and 24 hours support system. We also provide a certificate...</p>
			</div>
		</div>
	</div>
            </div>
            <h2 className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 p-4'>  Take a subject and Test your knowledge.</h2>

            <div className=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {
                topics.map(topic => <Cart key={topic.id}
                    topic={topic}
                    id={topic.id}
                ></Cart>)
                }
           
            </div>
        </div>
    );
};

export default Home;