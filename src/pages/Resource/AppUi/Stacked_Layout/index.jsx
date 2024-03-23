import React from "react";
import { Link } from "react-router-dom";
import { BsCopy } from "react-icons/bs";
import DarkNavbarWithWhiteHeader from "./DarkNavwithWhiteHeader";
import LightNavwithBottomBorder from "./LightNavWhitBotomBorder";
import LightNavOnGrayBackground from "./LightNavOnGrayBackground";
import BrandedNavWithCompactWhitePageHeader from "./BrandedNavWithCompactWhitePageHeader";
import DarkNavWithOverlap from "./DarkNavWithOverlap";
import BrandNavWithOverlap from "./BrandNavWithOverlap";
import BrandedNavWithWhitePageHeader from "./BrandedNavWithWhitePageHeader";
import Darknavwithcompactwhitepageheader from "./Dark nav with compact white page header";
import TwoRowNavigationWithOverlap from "./Two-row navigation with overlap";

const StackedLayout = () => {
  return (
    <div>
      <div className=" text-slate-500 hover:text-slate-600 mt-10">
        <p>
          <Link>Application Ui</Link> / <Link>Application shells</Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          Stacked Layouts
        </h1>
      </div>
      
      <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Dark nav with white Page Header</a>
          </h2>
          <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
            Requirejs
          </a>
        </div>
        <div className="ml-6 flex items-center">
          <div className="flex space-x-1 rounded-lg bg-slate-100 p-0.5">
            <button className="flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3">
              Preview
            </button>
            <button className="flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3">
              Code
            </button>
          </div>
          <div className="ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 sm:block"></div>
          <div className=" flex relative  sm:block">
            <select className=" h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:text-sm ">
              <option value="html">Html</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            {" "}
            <button className="group relative ml-2 hidden h-9 w-9 items-center justify-center sm:flex">
              <BsCopy />
            </button>
          </div>
        </div>
      </div>
      <div>
        <DarkNavbarWithWhiteHeader />
      </div>
      {/* Light nav with bottom border */}
      <div>
        {/* Header Section */}
      <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Light nav with bottom border</a>
          </h2>
          <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
           Previews
          </a>
        </div>
        <div className="ml-6 flex items-center">
      <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
        Get the code <span aria-hidden={true}>
        →
        </span>
      </a>
        </div>
      </div>
      <div>
        <LightNavwithBottomBorder />
      </div>
      </div>
      {/* LightNavOnGrayBackground */}
      <div>
        {/* Header Section */}
      <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>LightNavOnGrayBackground</a>
          </h2>
          <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
           Previews
          </a>
        </div>
        <div className="ml-6 flex items-center">
      <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
        Get the code <span aria-hidden={true}>
        →
        </span>
      </a>
        </div>
      </div>
      <div>
        <LightNavOnGrayBackground />
      </div>
      </div>

      {/* Branded nav with compact white page header */}
      <div>
        {/* Header Section */}
      <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Branded nav with compact white page header</a>
          </h2>
          <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
           Previews
          </a>
        </div>
        <div className="ml-6 flex items-center">
      <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
        Get the code <span aria-hidden={true}>
        →
        </span>
      </a>
        </div>
      </div>
      <div>
        <BrandedNavWithCompactWhitePageHeader />
      </div>
      </div>
      {/* DarkNavWithOverlap */}
      <div>
        {/* Header Section */}
      <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Dark Nav With Overlap</a>
          </h2>
          <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
           Previews
          </a>
        </div>
        <div className="ml-6 flex items-center">
      <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
        Get the code <span aria-hidden={true}>
        →
        </span>
      </a>
        </div>
      </div>
      <div>
        <DarkNavWithOverlap />
      </div>
      </div>
      {/* BrandNavWithOverlap */}
      <div>
        {/* Header Section */}
      <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Brand Nav With Overlap</a>
          </h2>
          <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
           Previews
          </a>
        </div>
        <div className="ml-6 flex items-center">
      <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
        Get the code <span aria-hidden={true}>
        →
        </span>
      </a>
        </div>
      </div>
      <div>
        <BrandNavWithOverlap />
      </div>
      </div>
      {/* BrandedNavWithWhitePageHeader */}
      <div className=" mt-12">
        {/* Header Section */}
      <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Branded Nav With White Page Header</a>
          </h2>
          <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
           Previews
          </a>
        </div>
        <div className="ml-6 flex items-center">
      <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
        Get the code <span aria-hidden={true}>
        →
        </span>
      </a>
        </div>
      </div>
      <div>
        <BrandedNavWithWhitePageHeader />
      </div>
      </div>
      {/* Dark nav with compact white page header */}
      <div className=" mt-12">
        {/* Header Section */}
      <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Dark nav with compact white page header</a>
          </h2>
          <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
           Previews
          </a>
        </div>
        <div className="ml-6 flex items-center">
      <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
        Get the code <span aria-hidden={true}>
        →
        </span>
      </a>
        </div>
      </div>
      <div>
        <Darknavwithcompactwhitepageheader />
      </div>
      </div>
      {/* TwoRowNavigationWithOverlap */}
      <div className=" mt-12">
        {/* Header Section */}
      <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Two-Row Navigation With Overlap</a>
          </h2>
          <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
           Previews
          </a>
        </div>
        <div className="ml-6 flex items-center">
      <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
        Get the code <span aria-hidden={true}>
        →
        </span>
      </a>
        </div>
      </div>
      <div>
        <TwoRowNavigationWithOverlap />
      </div>
      </div>
    </div>
  );
};

export default StackedLayout;
