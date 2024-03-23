import React from "react";
import { BsCopy } from "react-icons/bs";
import { Link } from "react-router-dom";

import Simple from "./Simple";
import SimpleOnDrak from "./Simple on dark";
import WithLinks from "./With links";
import WithInlineLinksAndAvatarGroup from "./With inline links and avatar group";
import WithInlineLinksAndActionsMenu from "./With inline links and actions menu";
import WithBadgesButtonAndActionsMenu from "./With badges, button, and actions menu";
import InCardWithLiks from "./In card with links";
import TwoColumnsWithLinks from "./Two columns with links";
import FullWidthWithLinks from "./Full width with links";
import FullWidthWithConstrainedContent from "./Full-width with constrained content";
import Narrow from "./Narrow";
import NarrowWithStickyHeadings from "./Narrow with sticky headings";
import NarrowWithActions from "./Narrow with actions";
import NarrowWithTruncatedContent from "./Narrow with truncated content";
import NarrowWithSmallAvatars from "./Narrow with small avatars";
import NarrowWithSmallAvatarsOnDark from "./Narrow with small avatars on dark";
import NarrowWithBadgesonDark from "./Narrow with badges on dark";
import { IoArrowBackCircle } from "react-icons/io5";

const StackedList = () => {
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
          Stacked Lists
        </h1>
      </div>
      {/*Simple */}
      <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Simple</a>
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
      <div className=" w-full ">
        <div className=" mx-20">
          <Simple />
        </div>
      </div>

      {/* SimpleOnDrak */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Simple On Drak</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div>
          <SimpleOnDrak />
        </div>
      </div>
      {/* With links */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>With links</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" mx-20">
            <WithLinks />
          </div>
        </div>
      </div>
      {/* With inline links and avatar group */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>With inline links and avatar group</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" mx-20">
            <WithInlineLinksAndAvatarGroup />
          </div>
        </div>
      </div>
      {/* With inline links and actions menu */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>With inline links and actions menu</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" mx-20">
            <WithInlineLinksAndActionsMenu />
          </div>
        </div>
      </div>
      {/* With badges, button, and actions menu */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>With badges, button, and actions menu</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" mx-20">
            <WithBadgesButtonAndActionsMenu />
          </div>
        </div>
      </div>
      {/* In Card With Liks */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>In Card With Liks</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" mx-20">
            <InCardWithLiks />
          </div>
        </div>
      </div>
      {/* Two columns with links */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Two columns with links</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" mx-20">
            <TwoColumnsWithLinks />
          </div>
        </div>
      </div>
      {/* Full width with links */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Full width with links</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" mx-20">
            <FullWidthWithLinks />
          </div>
        </div>
      </div>
      {/* Full-width with constrained content */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Full-width with constrained content</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" mx-20">
            <FullWidthWithConstrainedContent />
          </div>
        </div>
      </div>
      {/* Narow */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Narrow</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full border-2 border-gray-200 rounded-lg">
          <div className=" mx-[200px]">
            <Narrow />
          </div>
        </div>
      </div>
      {/* Narrow with sticky headings */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Narrow with sticky headings</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full border-2 border-gray-200 rounded-lg">
          <div className=" mx-[200px]">
            <NarrowWithStickyHeadings />
          </div>
        </div>
      </div>
      {/* Narrow with actions */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Narrow with actions</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full border-2 border-gray-200 rounded-lg">
          <div className=" mx-[200px]">
            <NarrowWithActions />
          </div>
        </div>
      </div>
      {/* Narrow with truncated content */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Narrow with truncated content</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full border-2 border-gray-200 rounded-lg">
          <div className=" mx-[200px]">
            <NarrowWithTruncatedContent />
          </div>
        </div>
      </div>
      {/* Narrow with small avatars */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Narrow with small avatars</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full border-2 border-gray-200 rounded-lg">
          <div className=" mx-[200px]">
            <NarrowWithSmallAvatars />
          </div>
        </div>
      </div>
      {/* Narrow with small avatars on dark */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Narrow with small avatars on dark</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" w-full border-2 border-gray-200 rounded-lg">
          <div className=" mx-[200px]">
            <NarrowWithSmallAvatarsOnDark />
          </div>
        </div>
      </div>
      {/* Narrow with badges on dark */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
          <div className="flex min-w-0">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>Narrow with badges on dark</a>
            </h2>
            <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
              Previews
            </a>
          </div>
          <div className="ml-6 flex items-center">
            <a className="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">
              Get the code <span aria-hidden={true}>→</span>
            </a>
          </div>
        </div>
        <div className=" bg-gray-800 w-full border-2 border-gray-200 rounded-lg">
          <div className=" mx-[200px]">
            <NarrowWithBadgesonDark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedList;
