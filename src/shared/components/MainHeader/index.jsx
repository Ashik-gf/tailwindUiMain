import React from 'react'
import { IoArrowBackCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const MainHeaderSection =({children, title,tag,section, goto}) => {
  return (
    <div>
         <div className=" text-slate-500 hover:text-slate-600 mt-10">
       
        <p>
          <Link to={`/resource/${goto}`}>{section}</Link > / <Link  >{tag}</Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
        </h1>
      </div>
    </div>
  )
}

export default MainHeaderSection