import React from 'react'

const HeaderSection = ({children, title, className}) => {
  return (
    <div className={''}>
         <div className="grid grid-cols-[1fr,auto] items-center mb-8 mt-8 ">
          <div className="flex min-w-0 ">
            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
              <a>{title}</a>
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
        <div className={`${className} border-2 border-gray-200 rounded-md`}>
            {children}
        </div>
    </div>
  )
}

export default HeaderSection