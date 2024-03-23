import React from 'react'
import { BsCopy } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import FullWidthThreeColumn from './Full-width three-column'
import FullWidthSecondaryColumnOnRight from './Full-width secondary column on right'
import ConstraindThreeColumn from './Constrained three column'
import ConstrainedWithStickyColumns from './Constrained with sticky columns'
import FullWidthWithNarrowSidebar from './Full-width with narrow sidebar'
import FullWidthWithNarrowSidebarAndHeader from './Full-width with narrow sidebar and header'

const MultiColum = () => {
  return (
    <div>
       <div className=" text-slate-500 hover:text-slate-600 mt-10">
        <p>
          <Link>Application Ui</Link> / <Link>Application shells</Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
        Multi-Column Layouts
        </h1>
      </div>
      {/* Full width three column */}
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
        <FullWidthThreeColumn />
      </div>
      {/* Full-width secondary column on right */}
      <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Full-width secondary column on right</a>
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
        <FullWidthSecondaryColumnOnRight />
      </div>
      {/* Constrained three column */}
      <div className="div">
      <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Full-width secondary column on right</a>
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
        <ConstraindThreeColumn />
      </div>
      </div>
      {/* Constrained with sticky columns */}
      <div className="div">
      <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Constrained with sticky columns</a>
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
        <ConstrainedWithStickyColumns />
      </div>
      </div>
      {/* Full-width with narrow sidebar */}
      <div className="div">
      <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Full-width with narrow sidebar</a>
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
        <FullWidthWithNarrowSidebar />
      </div>
      </div>
      {/* Full-width with narrow sidebar and header */}
      <div className="div">
      <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-16 ">
        <div className="flex min-w-0">
          <h2 className="truncate text-base font-medium leading-7 text-slate-900">
            <a>Full-width with narrow sidebar and header</a>
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
        <FullWidthWithNarrowSidebarAndHeader />
      </div>
      </div>

    </div>
  )
}

export default MultiColum