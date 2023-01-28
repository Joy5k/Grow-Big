import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quize from '../Quize/Quize';

const Topics = () => {
	const clickedQuizeData = useLoaderData();
	const { name,questions
	} = clickedQuizeData.data;
	return (
		
        <div>
        <section className="py-20 bg-gray-800 text-gray-100">
	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
		<h2 className="text-4xl font-bold lg:text-5xl">Quiz of {name }</h2>
		
		</div>			
		<div className="items-stretch -mx-4  bg-slate-50">		
				{
					questions.map(questionData => <Quize
						key={questionData.id}
						questionData={questionData}
					></Quize>)
					}
        </div>
	</div>
</section>
        </div>
    );
};

export default Topics;