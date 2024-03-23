import React from "react";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import SimpleWithIcons from "./Simple with icons";
import WithComments from "./With comments";
import WithMultipleItemTypes from "./With multiple item types";

const Feeds = () => {
  return (
    <div>
      <div className=" text-slate-500 hover:text-slate-600 mt-10">
        <Link to={"/resource/appui"}>
          <p className=" flex items-center gap-3 ">
            <IoArrowBackCircle className=" text-3xl" />
            <span>Back</span>{" "}
          </p>
        </Link>
        <p>
          <Link>Application Ui</Link> / <Link>Application shells</Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          Feeds
        </h1>
      </div>
      {/* Simple Feeds */}
      <div className="div">
        <HeaderSection className={"w-full"} title={"Simple Feeds"}>
          <div className=" w-[350px] mx-auto">
            <SimpleWithIcons />
          </div>
        </HeaderSection>
      </div>
      {/* With comments */}
      <div className="div">
        <HeaderSection className={" w-full"} title={"With comments"}>
          <div className="w-[370px] mx-auto">
            <WithComments />
          </div>
        </HeaderSection>
      </div>
      {/* Simple Feeds */}
      <div className="div">
        <HeaderSection className={"w-full"} title={"Simple Feeds"}>
          <div className=" w-[370px] mx-auto ">
            <WithMultipleItemTypes />
          </div>
        </HeaderSection>
      </div>
    </div>
  );
};

export default Feeds;
