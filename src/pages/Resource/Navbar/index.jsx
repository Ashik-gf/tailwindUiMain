import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const navbar = [
  {
    id: "1",
    title: "Application Ui",
    path: "/resource/appui",
   
  },
  {
    id: "3",
    title:'Marketing',
    path: "/resource/marketing",
   
  },
  {
    id: "4",
    title: "Ecommerce",
    path: "/resource/ecommerce",
    
  },
  {
    id: "5",
    title: "Templates",
    path: "/mainelements/templates",
   
  },
];
const Navbar = () => {
  return (
    <div className=" w-full">
      <div className=" grid grid-cols-2 gap-4  mx-auto pt-3 md:flex md:justify-center items-center md:gap-2">
        {navbar.map((bar) => (
          <div key={bar.id} className=" flex justify-center md:justify-between ">
            <div className=" flex ">
              <NavLink to={bar.path}
                className={({ isActive }) =>
                isActive ? " " : ""
              }
              >
                <button className=" w-[150px] md:w-[150px] hover:text-blue-700 focus:text-blue-700 font-semibold
                 ring-1 p-2 rounded-md my-1 text-black
               cursor-pointer
                   inline-flex justify-center">
                  {bar.title}
                </button>
              </NavLink>
            </div>
          
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Navbar;
