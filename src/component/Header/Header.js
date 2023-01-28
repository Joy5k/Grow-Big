import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react'

const Header = () => {

    return (
		<div>

     <header className=" bg-gray-500 text-gray-100 ">
	<div className="container flex justify-between h-16 mx-auto">
		<Link  rel="noopener noreferrer" to="/home" aria-label="Back to homepage" className="flex text-4xl text-pink-400 italic items-center p-2 relative">
			<img className='h-16' src="logo.png" alt="" />
	
		</Link>
		<ul className="text-xl items-stretch  space-x-3 flex">
			<li className="flex">
				<Link rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 hover:text-pink-300 ">Home</Link>
						</li>
	<li className="flex">

	<Link rel="noopener noreferrer" to="/topics" className="flex items-center px-4 -mb-1 hover:text-pink-300 ">Topics</Link>
                            
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/statics" className="flex items-center px-4 -mb-1 hover:text-pink-300 ">Statics</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 hover:text-pink-300  ">Blog</Link>
			</li>
		</ul>
	</div>
</header>
        </div>
    );
};

export default Header;