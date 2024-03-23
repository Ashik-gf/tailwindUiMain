import React from "react";

const DisplayData = () => {
  return (
    <div>
        <div className=" w-full text-center bg-slate-200 py-4 rounded-lg">
        <h1 className=" text-xl font-bold">Single Data table for DashBord</h1>
        </div>
      <div className=" w-full overflow-auto rounded-lg shadow-lg md:block hidden">
        <table className=" w-full px-2">
          <thead className=" bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className=" w-20 p-3 text-sm font-semibold tracking-wide text-left ">
                No
              </th>

              <th className=" p-3 text-sm font-semibold tracking-wide text-left ">
                Details
              </th>
              <th className=" w-24 p-3 text-sm font-semibold tracking-wide text-left ">
                Stutas
              </th>
              <th className=" w-24 p-3 text-sm font-semibold tracking-wide text-left ">
                Data
              </th>
              <th className=" w-32 p-3 text-sm font-semibold tracking-wide text-left ">
                total
              </th>
              
            </tr>
          </thead>
          <tbody className=" divide-y divide-blue-500">
            <tr className=" bg-white">
              <td
                className=" p-3 bg-gray-200 text-sm text-blue-500"
                whitespace-norap
              >
                <a
                  href="#"
                  className=" font-bold text-blue-500 hover:underline"
                >
                  1000
                </a>
              </td>

              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                Detailes about this Products
              </td>
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                <span className=" p-1.5 text-md font-bold text-green-300 bg-green-900 rounded bg-opacity-50">
                  Deleverd
                </span>
              </td>
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                16/4/2024
              </td>
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                4.5
              </td>
            </tr>
            <tr className=" bg-white">
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                <a
                  href="#"
                  className=" font-bold text-blue-500 hover:underline"
                >
                  1000
                </a>
              </td>

              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                Detailes about this Products
              </td>
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                <span className=" p-1.5 text-md font-bold text-yellow-300 bg-yellow-900 rounded bg-opacity-50 uppercase">
                  Shipped
                </span>
              </td>
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                16/4/2024
              </td>
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                4.5
              </td>
            </tr>
            <tr className=" bg-white">
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                <a
                  href="#"
                  className=" font-bold text-blue-500 hover:underline"
                >
                  1000
                </a>
              </td>

              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                Detailes about this Products
              </td>
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                <span className=" p-1.5 text-md font-bold text-gray-300 bg-gray-900 rounded bg-opacity-50">
                  Cancel
                </span>
              </td>
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                16/4/2024
              </td>
              <td className=" p-3 bg-gray-200 text-sm text-blue-500 whitespace-norap">
                4.5
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" w-[425px] py-2 bg-white shadow-md rounded-sm grid grid-cols-1 gap-4 md:hidden">
      <div className=" h-full flex justify-center items-center gap-4">
     <div>
        <a>#1230879</a>
     </div>
        <div>12/4/5</div>
        <div>
             <span className=" p-1 text-md font-bold text-green-300 bg-green-900 rounded bg-opacity-50">
                  Deleverd
                </span></div>
     </div>
        <div className=" flex justify-center items-center">
            <div>     Detailes about this Products </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
