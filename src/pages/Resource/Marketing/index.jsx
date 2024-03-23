import React from "react";

import { Link } from "react-router-dom";

const data = [
  {
    title: "Hero Section",
    pathNmae: "/resource/heroSection",
    // image: photos,
    lenght: "12 Components",
  },
  {
    title: "Future Section",
    pathNmae: "/resource/future",
    // image: photos1,
    lenght: "18 Components",
  },
  {
    title: "CTA Section",
    pathNmae: "/resource/ctaSection",
    // image: photos2,
    lenght: "6 Components",
  },
  {
    title: "Pricing Section",
    pathNmae: "/resource/pricing",
    // image: photos2,
    lenght: "13 Components",
  },
  {
    title: "Header Section",
    pathNmae: "/resource/headerSection",
    // image: photos2,
    lenght: "10 Components",
  },
  {
    title: "NewsLetter Section",
    pathNmae: "/resource/NewsLetter",
    // image: photos2,
    lenght: "7 Components",
  },
  {
    title: "Stats ",
    pathNmae: "/resource/pageStats",
    // image: photos2,
    lenght: "10 Components",
  },
  {
    title: "Testimonial ",
    pathNmae: "/resource/testimonial",
    // image: photos2,
    lenght: "10 Components",
  },
  {
    title: "Blog Section ",
    pathNmae: "/resource/Testimonial",
    // image: photos2,
    lenght: "7 Components",
  },
  {
    title: "Contact Section ",
    pathNmae: "/resource/contactSection",
    // image: photos2,
    lenght: "8 Components",
  },
  {
    title: "Team Section ",
    pathNmae: "/resource/teamSection",
    // image: photos2,
    lenght: "9 Components",
  },
  {
    title: "Content Section ",
    pathNmae: "/resource/contentSection",
    // image: photos2,
    lenght: "9 Components",
  },
  {
    title: "Logo Clouds ",
    pathNmae: "/resource/logoClouds",
    // image: photos2,
    lenght: "9 Components",
  },
  {
    title: "FAQs Section ",
    pathNmae: "/resource/faqs",
    // image: photos2,
    lenght: "10 Components",
  },
  {
    title: "Footers Section ",
    pathNmae: "/resource/footers",
    // image: photos2,
    lenght: "10 Components",
  },
];
const feedback = [
  {
    title: "404 Page",
    pathNmae: "/resource/pageheading",
    // image: photos3,
    lenght: "13 Components",
  },
 
];

const elements = [
  {
    title: "Headers",
    pathNmae: "/resource/headresElements",
    // image: photos9,
    lenght: "12 Components",
  },
  {
    title: "Flyout Menus",
    pathNmae: "/resource/flyoutMenus",
    // image: photos10,
    lenght: "7 Components",
  },
  {
    title: "Banners",
    pathNmae: "/resource/banners",
    // image: photos11,
    lenght: "13 Components",
  },
 
];
const pageExapmle = [
  {
    title: "Landing Page",
    pathNmae: "/resource/landingPage",
    // image: photos9,
    lenght: "4 Example",
  },
  {
    title: "Pricing Page ",
    pathNmae: "/resource/pricingPage",
    // image: photos10,
    lenght: "3 Example",
  },
  {
    title: "About",
    pathNmae: "/resource/about",
    // image: photos11,
    lenght: "3 Example",
  },
 
];

const Marketing = () => {
  return (
    <>
    {/* Page Section */}
      <div className=" w-full h-full ">
        <div className=" my-8">
          <h className={' text-xl font-bold text-slate-900'}>Marketing</h>
          <p className="mt-3 text-sm leading-7 text-slate-500">
          Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.
          </p>
        </div>
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
            Page Sections
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {data.map((d, i) => (
              <Link key={i} to={d.pathNmae}>
 <div
                
                className="w-full md:w-[270px] hover:bg-[#F3F4F6] rounded-md cursor-pointer "
              >
                <div className=" w-[370px] md:w-[250px] pt-4 my-4 mx-auto border-2 border-gray-200/90 rounded-md">
                  <img
                    className=" h-[120px] w-[230px] mx-auto my-2 rounded-md"
                    // src={d?.image}
                  ></img>
                </div>
                <div className=" w-[240px] my-2 mx-auto text-start">
                  <p className=" text-black hover:text-blue-600"> {d.title}</p>
                  <p>{d.lenght}</p>
                </div>
              </div>
          </Link>
             
            ))}
          </div>
        </div>
      </div>
       {/* Elements */}
       <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
            Elements
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {elements.map((d, i) => (
              <Link key={i} to={d.pathNmae}>
 <div
                
                className="w-full md:w-[270px] hover:bg-[#F3F4F6] rounded-md cursor-pointer "
              >
                <div className=" w-[370px] md:w-[250px] pt-4 my-4 mx-auto border-2 border-gray-200/90 rounded-md">
                  <img
                    className=" h-[120px] w-[230px] mx-auto my-2 rounded-md"
                    src={d?.image}
                  ></img>
                </div>
                <div className=" w-[240px] my-2 mx-auto text-start">
                  <p className=" text-black hover:text-blue-600"> {d.title}</p>
                  <p>{d.lenght}</p>
                </div>
              </div>
          </Link>
             
            ))}
          </div>
        </div>
      </div>
      {/* FeedBack */}
      <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
            Feedback
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {feedback.map((d, i) => (
              <Link key={i} to={d.pathNmae}>
 <div
                
                className="w-full md:w-[270px] hover:bg-[#F3F4F6] rounded-md cursor-pointer "
              >
                <div className=" w-[370px] md:w-[250px] pt-4 my-4 mx-auto border-2 border-gray-200/90 rounded-md">
                  <img
                    className=" h-[120px] w-[230px] mx-auto my-2 rounded-md"
                    src={d?.image}
                  ></img>
                </div>
                <div className=" w-[240px] my-2 mx-auto text-start">
                  <p className=" text-black hover:text-blue-600"> {d.title}</p>
                  <p>{d.lenght}</p>
                </div>
              </div>
          </Link>
             
            ))}
          </div>
        </div>
      </div>
      {/* Page Example */}
      <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
            Page Example
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {pageExapmle.map((d, i) => (
              <Link key={i} to={d.pathNmae}>
 <div
                
                className="w-full md:w-[270px] hover:bg-[#F3F4F6] rounded-md cursor-pointer "
              >
                <div className=" w-[370px] md:w-[250px] pt-4 my-4 mx-auto border-2 border-gray-200/90 rounded-md">
                  <img
                    className=" h-[120px] w-[230px] mx-auto my-2 rounded-md"
                    src={d?.image}
                  ></img>
                </div>
                <div className=" w-[240px] my-2 mx-auto text-start">
                  <p className=" text-black hover:text-blue-600"> {d.title}</p>
                  <p>{d.lenght}</p>
                </div>
              </div>
          </Link>
             
            ))}
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Marketing;
