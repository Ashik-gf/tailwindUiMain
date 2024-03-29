import React from "react";

const Footer = () => {
  return (
    <div>
      <main className=" w-full h-[200px] pt-12 ">
        <div className="mx-auto flex items-center justify-center ">
          <img className=" h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
         <img className="w-[200px]" src="https://i.ibb.co/McZpW6b/svgviewer-png-output.png"></img>
        </div>
        <div className="mx-auto w-full  my-2">
          <p className=" text-center">© 2024 Tailwind Labs Inc. All rights reserved.</p>
        </div>
        <div className=" flex justify-center items-center gap-3 my-4">
          <aside>
          Privacy policy

          </aside>
          <div className=" h-6 w-[1px] bg-gray-500"></div>
          <aside>
          Changelog
          </aside>

        </div>
      </main>
    </div>
  );
};

export default Footer;
