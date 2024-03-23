
import { FaAppStoreIos } from "react-icons/fa";
import Navbar from "../Navbar";

const LeftSideBar = () => {
  return (
    <div className=" container px-2">
      <div className=" block md:flex md:justify-between h-full">
          <div className=" flex justify-center items-center gap-2">
            <p className=" text-xl text-blue-600">
              <FaAppStoreIos />
            </p>
            <h1 className=" text-lg font-bold text-blue-600">Application UI</h1>
          </div>
         <div>
         <Navbar />
         </div>
        </div>
    </div>
  );
};

export default LeftSideBar;