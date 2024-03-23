import React from 'react'
import { BsCopy } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import BrandSidebarWithHeader from './Brand sidebar with header/index';
import DarkSidebarWithHeader from './Dark sidebar with header';
import LightSidebarWithHeader from './Light sidebar with header';
import BrandSidebar from './Brand sidebar';
import DarkSidebar from './Dark sidebar';
import LightSidebarWithConstrainedContentArea from './Light sidebar with constrained content area';
import LightSidebarWithOffWhiteBackground from './Light sidebar with off-white background';
import LightSidebar from './Light sidebar';

const SideBarLayout = () => {
  return (
    <div>
       <div className=" text-slate-500 hover:text-slate-600 mt-10">
        <p>
          <Link>Application Ui</Link> / <Link>Application shells</Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
        Sidebar Layouts
        </h1>
      </div>
     <div>
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
        <BrandSidebarWithHeader />
      </div>
     </div>
      {/* Dark sidebar with header */}
    <div className=' my-20'>
    <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8 my-12">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Dark Sidebar With Header</a>
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
        <DarkSidebarWithHeader />
      </div>
    </div>
      {/* Light sidebar with header */}
    <div className=' my-20'>
    <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8 my-12">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Light sidebar with header</a>
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
        <LightSidebarWithHeader />
      </div>
    </div>
      {/* Brand sidebar */}
    <div className=' my-20'>
    <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8 my-12">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Brand sidebar</a>
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
        <BrandSidebar />
      </div>
    </div>
      {/* Dark sidebar */}
    <div className=' my-20'>
    <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8 my-12">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Dark sidebar</a>
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
        <DarkSidebar />
      </div>
    </div>
    {/* Light Sidebar With Constrained Content Area */}
    <div className=' my-20'>
    <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8 my-12">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Light Sidebar With Constrained Content Arear</a>
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
        <LightSidebarWithConstrainedContentArea />
      </div>
    </div>
      {/* Light sidebar with off-white background */}
    <div className=' my-20'>
    <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8 my-12">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Light sidebar with off-white background</a>
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
        <LightSidebarWithOffWhiteBackground />
      </div>
    </div>
    {/* Light sidebar */}
    <div className=' my-20'>
    <div className="grid grid-cols-[1fr,auto] items-center mb-4 mt-8 my-12">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Light sidebar</a>
          </h2>
          <a className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-200 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block">
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
        <LightSidebar />
      </div>
    </div>
  
    <div>
      
    </div>
    </div>
  )
}

export default SideBarLayout