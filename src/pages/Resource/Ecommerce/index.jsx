import React from "react";

import { Link } from "react-router-dom";

const components = [
  {
    title: "Products Overviews",
    pathNmae: "/resource/productsOverviews",
    // image: photos9,
    lenght: "5 Components",
  },
  {
    title: "Products List",
    pathNmae: "/resource/productsList",
    // image: photos10,
    lenght: "11 Components",
  },
  {
    title: "Category Previews",
    pathNmae: "/resource/catagoryPreviews",
    // image: photos11,
    lenght: "6 Components",
  },
  {
    title: "Shoping Carts",
    pathNmae: "/resource/shopingCarts",
    // image: photos11,
    lenght: "6 Components",
  },
  {
    title: "Catagory Filetr",
    pathNmae: "/resource/catagoryFilter",
    // image: photos11,
    lenght: "5 Components",
  },
  {
    title: "Products Quick Views",
    pathNmae: "/resource/productsQuickViews",
    // image: photos11,
    lenght: "4 Components",
  },
  {
    title: "Products features",
    pathNmae: "/resource/productsFeatures",
    // image: photos11,
    lenght: "9 Components",
  },
  {
    title: "Store Navigation",
    pathNmae: "/resource/storeNavigation",
    // image: photos11,
    lenght: "5 Components",
  },
  {
    title: "Promo Section",
    pathNmae: "/resource/promoSection",
    // image: photos11,
    lenght: "8 Components",
  },
  {
    title: "CheckOut Forms",
    pathNmae: "/resource/checkoutForms",
    // image: photos11,
    lenght: "5 Components",
  },
  {
    title: "Reviews",
    pathNmae: "/resource/reviews",
    // image: photos11,
    lenght: "4 Components",
  },
  {
    title: "Order Summeries",
    pathNmae: "/resource/orderSumeries",
    // image: photos11,
    lenght: "4 Components",
  },
  {
    title: "Order Summeries",
    pathNmae: "/resource/orderSumeries",
    // image: photos11,
    lenght: "4 Components",
  },
  {
    title: "Order History",
    pathNmae: "/resource/orderHistory",
    // image: photos11,
    lenght: "4 Components",
  },
  {
    title: "Incentives",
    pathNmae: "/resource/incentives",
    // image: photos11,
    lenght: "8 Components",
  },
 
];
const pageExapmle = [
  {
    title: "Store FrontPages",
    pathNmae: "/resource/storeFrontPages",
    // image: photos9,
    lenght: "4 Example",
  },
  {
    title: "Products Pages ",
    pathNmae: "/resource/productsPages",
    // image: photos10,
    lenght: "5 Example",
  },
  {
    title: "Catagory Pages",
    pathNmae: "/resource/catagoryPages",
    // image: photos11,
    lenght: "5 Example",
  },
  {
    title: "Shoping Carts Pages",
    pathNmae: "/resource/shopingCartsPages",
    // image: photos11,
    lenght: "3 Example",
  },
  {
    title: "Checkout Pages",
    pathNmae: "/resource/checkoutPages",
    // image: photos11,
    lenght: "5 Example",
  },
  {
    title: "Order Details Pages",
    pathNmae: "/resource/orderDetailsPages",
    // image: photos11,
    lenght: "3 Example",
  },
  {
    title: "Order History Pages",
    pathNmae: "/resource/orderHistoryPages",
    // image: photos11,
    lenght: "5 Example",
  },
 
];

 const Ecommerce = () => {
  return (
    <>
    {/* Components */}
      <div className=" w-full h-full ">
        <div className=" my-8">
          <h className={' text-xl font-bold text-slate-900'}>Ecommerce</h>
          <p className="mt-3 text-sm leading-7 text-slate-500">
          
Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end.
          </p>
        </div>
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
            Components
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-3  w-full">
            {components.map((d, i) => (
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
       {/* Page Examples */}
       <div className=" w-full h-full ">
        <div
          className=" container mx-auto h-full
      grid  md:grid-cols-2 lg:grid-cols-4 gap-3 
      "
        >
          <div className=" w-full md:w-[240px] p-2">
            <h1 className=" text-slate-900 text-base font-semibold">
            Page Examples
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

export default Ecommerce;
