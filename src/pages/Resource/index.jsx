import { Link, Outlet } from "react-router-dom";
import { MdOutlineAddToHomeScreen } from "react-icons/md";

import { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import LeftSideBar from "./LeftSideBar";
import { FaAppStoreIos } from "react-icons/fa";
import Footer from "@shared/components/Footer";



const Resource = () => {
  const [open, setOpen]=useState(false);
  const handelClick =()=>{
    setOpen(!open)
    console.log('first')
  }
  return (
    <>
      <div id="root" className=" w-full px-2 md:px-8 mt-2 block grow dark:bg-navy-900">
        <main className=" md:block  ">
         <div className={` md:block ${open ? "flex":"hidden"} relative`}>
         <LeftSideBar />
          <div
          className={`${open ? " text-center pl-8 cursor-pointer md:hidden":"hidden"} absolute right-2`}
          onClick={handelClick} >
          <p className=" text-red-600 text-2xl shadow-md p-2 rounded-md"><GiCrossMark /></p>
          </div>
         </div>
         {/* InMobile Display */}
         <div
         onClick={handelClick}
         className=" px-4 flex justify-evenly items-center md:hidden cursor-pointer">
       
          <div className={` ${open && "hidden"} flex justify-center items-center gap-2`} >
            <p className=" text-xl text-blue-600">
              <FaAppStoreIos />
            </p>
            <h1 className=" text-lg font-bold text-blue-600">Application UI</h1>
          </div>
          <h1 className={`${open && "hidden"} text-2xl`} ><MdOutlineAddToHomeScreen className=" text-3xl text-blue-700" /></h1>
         </div>
        </main>
        <div className=' w-full  pt-10'>
        <Outlet />
      </div>
      {/* Footer */}
    <Footer />
      </div>
    </>
  );
};

export default Resource;
