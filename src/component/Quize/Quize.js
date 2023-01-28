import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaEye } from 'react-icons/fa';



const Quize = ({ questionData }) => {
    const { options,correctAnswer } = questionData;
    const clicked = (event) => {
        if (event===correctAnswer) {
            toast.success('Correct Answer!', {
                autoClose: 500,
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error('wrong answer', {
                autoClose: 400,
                position: toast.POSITION.TOP_CENTER
            })
        }
    }
    const displayCorrectAnswer = () => {
        toast.success(correctAnswer, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
        })
    }
    return (
        <div>
            <div className='mt-4 block text-black bg-gray-300 rounded  w-7/12 mx-auto'>						
	<p className='  text-justify text-left p-4'>
             {questionData.question.replace(/(<([^>]+)>)/ig, '')}
         </p>
         <FaEye className='mr-4 ml-auto w-6 h-6 cursor-help' onClick={displayCorrectAnswer}></FaEye>

                
  <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
                   
                    <div className='bg-gray-400 p-2 text-left rounded cursor-pointer'><input onClick={(event) => clicked(options[0])} className='mr-4 w-5 h-5 border-2' type="radio" value="Male" name="gender" />{options[0]}
                    <ToastContainer />

                    </div>            
         <div className='bg-gray-400 p-2 text-left rounded'><input  onClick={()=>clicked(options[1])} className='mr-4 w-5 h-5 border-2' type="radio" value="Male" name="gender" />{ options[1]} <ToastContainer />
</div>            
        <div className='bg-gray-400 p-2 text-left rounded'><input onClick={()=>clicked(options[2])} className='mr-4 w-5 h-5 border-2' type="radio" value="Male" name="gender" />{ options[2]}  <ToastContainer />
</div>             
        <div className='bg-gray-400 p-2 text-left rounded'><input  onClick={()=>clicked(options[3])} className='mr-4 w-5 h-5 border-2' type="radio" value="Male" name="gender" />{ options[3]} <ToastContainer />
</div>            
            
    </div>
          </div> 
        
      </div>
    );
};

export default Quize;