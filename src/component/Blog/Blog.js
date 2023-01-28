import React from 'react';

const Blog = () => {
    return (
        <div>
           <section className="bg-gray-800 text-gray-100 text-left">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Answer the 3 question's of React</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is the purpose react router?</summary>
				<div className="px-4 pb-4">
					<p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How does context api work?</summary>
				<div className="px-4 pb-4">
					<p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.?</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is useRef?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>The useRef Hook allows you to persist values between renders.
					It can be used to store a mutable valuethat does not cause a re-render whenupdated.
					It can be used to access a DOM element directly.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>							
					<p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
				</div>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;