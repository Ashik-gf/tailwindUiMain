import React from "react";
import photos from "../../../assets/layout/Multi-Column.png";
import photos1 from "../../../assets/layout/Sidebar.png";
import photos2 from "../../../assets/layout/stockedLayout.png";
import photos3 from "../../../assets/layout/s1.png";
import photos4 from "../../../assets/layout/s2.png";
import photos5 from "../../../assets/layout/s3.png";
import photos6 from "../../../assets/layout/d1.png";
import photos7 from "../../../assets/layout/d2.png";
import photos8 from "../../../assets/layout/d3.png";
import photos9 from "../../../assets/layout/l1.png";
import photos10 from "../../../assets/layout/l2.png";
import photos11 from "../../../assets/layout/l3.png";
import photos12 from "../../../assets/layout/l4.png";
import photos13 from "../../../assets/layout/f1.png";
import photos14 from "../../../assets/layout/f2.png";
import photos15 from "../../../assets/layout/f3.png";
import photos16 from "../../../assets/layout/f4.png";
import photos17 from "../../../assets/layout/f5.png";
import photos18 from "../../../assets/layout/f6.png";
import photos19 from "../../../assets/layout/f7.png";
import photos20 from "../../../assets/layout/f8.png";
import photos21 from "../../../assets/layout/f9.png";
import photos22 from "../../../assets/layout/f10.png";
import photosfd1 from "../../../assets/layout/fd1.png";
import photosfd2 from "../../../assets/layout/fd2.png";
import photosng from "../../../assets/layout/n1.png";
import photosng1 from "../../../assets/layout/n2.png";
import photosng2 from "../../../assets/layout/n3.png";
import photosng3 from "../../../assets/layout/n4.png";
import photosng4 from "../../../assets/layout/n5.png";
import photosfng5 from "../../../assets/layout/n6.png";
import photosng6 from "../../../assets/layout/n7.png";
import photosfng7 from "../../../assets/layout/n8.png";
import photoso1 from "../../../assets/layout/o1.png";
import photoso2 from "../../../assets/layout/o2.png";
import photoso3 from "../../../assets/layout/o3.png";
import photose1 from "../../../assets/layout/e1.png";
import photose2 from "../../../assets/layout/e2.png";
import photose3 from "../../../assets/layout/e3.png";
import photose4 from "../../../assets/layout/e4.png";
import photose5 from "../../../assets/layout/e5.png";
import photosla1 from "../../../assets/layout/la1.png";
import photosla2 from "../../../assets/layout/la2.png";
import photosla3 from "../../../assets/layout/la3.png";
import photosla4 from "../../../assets/layout/la4.png";
import photosla5 from "../../../assets/layout/la5.png";
import photospex1 from "../../../assets/layout/pex1.png";
import photospex2 from "../../../assets/layout/pex2.png";
import photospex3 from "../../../assets/layout/pex3.png";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Stacked Layout",
    pathNmae: "/resource/stacked",
    image: photos,
    lenght: "9 Components",
  },
  {
    title: "SideBar Layout",
    pathNmae: "/resource/sideBarlayout",
    image: photos1,
    lenght: "8 Components",
  },
  {
    title: "Multi-Column Layout",
    pathNmae: "/resource/multicolumn",
    image: photos2,
    lenght: "6 Components",
  },
];
const headingsData = [
  {
    title: "Page Headings",
    pathNmae: "/resource/pageheading",
    image: photos3,
    lenght: "13 Components",
  },
  {
    title: "Card Headings",
    pathNmae: "/resource/cardheading",
    image: photos4,
    lenght: "6 Components",
  },
  {
    title: "Section Headings",
    pathNmae: "/resource/sectionheading",
    image: photos5,
    lenght: "10 Components",
  },
];
const DisplayData = [
  {
    title: "Discription List",
    pathNmae: "/resource/discriptionList",
    image: photos6,
    lenght: "7 Components",
  },
  {
    title: "Stats",
    pathNmae: "/resource/stats",
    image: photos7,
    lenght: "5 Components",
  },
  {
    title: "Calanders",
    pathNmae: "/resource/calanders",
    image: photos8,
    lenght: "8 Components",
  },
];
const listData = [
  {
    title: "Stacked Lists",
    pathNmae: "/resource/stackedList",
    image: photos9,
    lenght: "17 Components",
  },
  {
    title: "Tables",
    pathNmae: "/resource/table",
    image: photos10,
    lenght: "20 Components",
  },
  {
    title: "Grid Lists",
    pathNmae: "/resource/grids",
    image: photos11,
    lenght: "7 Components",
  },
  {
    title: "Feeds",
    pathNmae: "/resource/feed",
    image: photos12,
    lenght: "3 Components",
  },
];
const forms = [
  {
    title: "Forms layout",
    pathNmae: "/resource/formslayout",
    image: photos13,
    lenght: "5 Components",
  },
  {
    title: "Inputs Groups",
    pathNmae: "/resource/inputGroups",
    image: photos14,
    lenght: "20 Components",
  },
  {
    title: "Select Menus",
    pathNmae: "/resource/selectsMenu",
    image: photos15,
    lenght: "7 Components",
  },
  {
    title: "Sign-in And Registation",
    pathNmae: "/resource/signInAndRegistation",
    image: photos16,
    lenght: "5 Components",
  },
  {
    title: "Textareas",
    pathNmae: "/resource/textArea",
    image: photos17,
    lenght: "5 Components",
  },
  {
    title: "Radios groups",
    pathNmae: "/resource/radioGroups",
    image: photos18,
    lenght: "12 Components",
  },
  {
    title: "Checkboxes",
    pathNmae: "/resource/checkBoxes",
    image: photos19,
    lenght: "4 Components",
  },
  {
    title: "Togols",
    pathNmae: "/resource/togols",
    image: photos20,
    lenght: "3 Components",
  },
  {
    title: "Action Panels",
    pathNmae: "/resource/actionPanals",
    image: photos21,
    lenght: "8 Components",
  },
  {
    title: "ComboBoxes",
    pathNmae: "/resource/comboBoxes",
    image: photos22,
    lenght: "5 Components",
  },
];
const feedBack = [
  {
    title: "Alerts",
    pathNmae: "/resource/alert",
    image: photosfd1,
    lenght: "6 Components",
  },
  {
    title: "Empty State",
    pathNmae: "/resource/emptyState",
    image: photosfd2,
    lenght: "6 Components",
  },
];
const navigation = [
  {
    title: "Navbars",
    pathNmae: "/resource/navbar",
    image: photosng,
    lenght: "11 Components",
  },
  {
    title: "Pagenation",
    pathNmae: "/resource/pagination",
    image: photosng1,
    lenght: "3 Components",
  },
  {
    title: "Tab",
    pathNmae: "/resource/tab",
    image: photosng2,
    lenght: "9 Components",
  },
  {
    title: "Vartical Navigation",
    pathNmae: "/resource/varticalNavigation",
    image: photosng3,
    lenght: "6 Components",
  },
  {
    title: "SideBar Navigation",
    pathNmae: "/resource/sidebarNavigation",
    image: photosng4,
    lenght: "6 Components",
  },
  {
    title: "Breadcrumbs",
    pathNmae: "/resource/breadcrumbs",
    image: photosfng5,
    lenght: "4 Components",
  },
  {
    title: "Steps",
    pathNmae: "/resource/steps",
    image: photosng6,
    lenght: "8 Components",
  },

  {
    title: "Command Paletts",
    pathNmae: "/resource/commandPalettes",
    image: photosfng7,
    lenght: "9 Components",
  },
];
const overlays = [
  {
    title: "Dialogs",
    pathNmae: "/resource/modal",
    image: photoso1,
    lenght: "6 Components",
  },
  {
    title: "Slide-overs",
    pathNmae: "/resource/slidover",
    image: photoso2,
    lenght: "12 Components",
  },
  {
    title: "Notification",
    pathNmae: "/resource/notification",
    image: photoso3,
    lenght: "6 Components",
  },
];
const elements = [
  {
    title: "Avatars",
    pathNmae: "/resource/avatars",
    image: photose1,
    lenght: "11 Components",
  },
  {
    title: "Badges",
    pathNmae: "/resource/badges",
    image: photose2,
    lenght: "18 Components",
  },
  {
    title: "Dropdowns",
    pathNmae: "/resource/dropDown",
    image: photose3,
    lenght: "5 Components",
  },
  {
    title: "Buttons",
    pathNmae: "/resource/button",
    image: photose4,
    lenght: "10 Components",
  },
  {
    title: "Buttons-Group",
    pathNmae: "/resource/buttonGroup",
    image: photose5,
    lenght: "5 Components",
  },
];
const layout = [
  {
    title: "Containers",
    pathNmae: "/resource/containers",
    image: photosla1,
    lenght: "5 Components",
  },
  {
    title: "Panales",
    pathNmae: "/resource/panels",
    image: photosla2,
    lenght: "10 Components",
  },
  {
    title: "List Container",
    pathNmae: "/resource/listContainer",
    image: photosla3,
    lenght: "7 Components",
  },
  {
    title: "Media Object",
    pathNmae: "/resource/mediaObject",
    image: photosla4,
    lenght: "8 Components",
  },
  {
    title: "Deviders",
    pathNmae: "/resource/deviders",
    image: photosla5,
    lenght: "8 Components",
  },
];
const pageExample = [
  {
    title: "Home Screen",
    pathNmae: "/resource/homescreen",
    image: photospex1,
    lenght: "2 Example",
  },
  {
    title: "Detail Screens",
    pathNmae: "/resource/detailsScreen",
    image: photospex2,
    lenght: "2 Example",
  },
  {
    title: "Settings Screens",
    pathNmae: "/resource/settingsScreens",
    image: photospex3,
    lenght: "2 Example",
  },
];

const Appui = () => {
  return (
    <>
    {/* Appshells */}
      <div className=" w-full h-full ">
        <div className=" my-8">
          <h className={' text-xl font-bold text-slate-900'}>Application UI</h>
          <p className="mt-3 text-sm leading-7 text-slate-500">
          Form layouts, tables, dialogs — everything you need to build beautiful responsive web applications.
          </p>
        </div>
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
              Application Shell
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
       {/* lists */}
       <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
             Lists
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {listData.map((d, i) => (
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
      {/* Heading */}
      <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
              Heading
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {headingsData.map((d, i) => (
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
      {/* Data Display */}
      <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
              Data Display
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {DisplayData.map((d, i) => (
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
     
      {/* Forms */}
      <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
      Forms
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {forms.map((d, i) => (
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
      FeedBack
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {feedBack.map((d, i) => (
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
      {/* Navigation */}
      <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
  Navigation
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {navigation.map((d, i) => (
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
      {/* OverLays */}
      <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
  Overlays
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {overlays.map((d, i) => (
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
      {/* Elelmnts */}
      <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
            Elelmnts
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
      {/* Layout */}
      <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
            Layout
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {layout.map((d, i) => (
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
      {/* Page Exmplae */}
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
            {pageExample.map((d, i) => (
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

export default Appui;
