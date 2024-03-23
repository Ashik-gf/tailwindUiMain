import React from 'react'
import { Link } from 'react-router-dom'

const Lists = () => {
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
    </div>
  )
}

export default Lists