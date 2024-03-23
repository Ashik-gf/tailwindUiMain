import React, { useState } from 'react';
import { TiWarning } from "react-icons/ti";

const SimpleWithGrayFooter = () => {
  const [closed, setCloded]=useState('false')
      const handelClick=()=>{
setCloded(!closed)
      }
  return (
    <div className=' flex items-center w-full h-full bg-gray-400/80 rounded-lg'>
    <div className={` ${ closed?" ":""} w-[500px] h-[200px] mx-auto pt-10 bg-white rounded-xl`} >
    <div className=' flex justify-start items-center mx-2 gap-3'>
      <div className=' w-12 h-12 rounded-full bg-red-300/20'> <TiWarning className='text-4xl text-red-400 mx-auto' /></div>
    <h className={' text-xl text-black'}>Deactivate account</h>
    </div>
    <p className=' mx-16'>Are you sure you want to deactivate your account? All of your data will be permanently removed. 
    This action cannot be undone.</p>
    <div className=' flex items-center gap-4 justify-end mr-8'>
      <button onClick={handelClick} className=' p-2 ring-2 
       ring-black rounded-lg
        bg-white hover:bg-gray-200 hover:text-white'>Cancel</button>
      <button className=' p-2 rounded-lg bg-red-500 hover:bg-red-400 text-white
       text-lg font-semibold'>Deactive</button>
    </div>
    </div>
    </div>
  );
};

export default SimpleWithGrayFooter;

