export default function WithDescriptionAndAction() {
    return (
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Job Postings</h3>
            <p className="mt-1 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
            </p>
          </div>
          <div className=" bg-indigo-500 rounded-lg text-black ml-4 mt-4 flex-shrink-0">
            <button
              type="button"
              className="relative inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              Create new job
            </button>
          </div>
        </div>
      </div>
    )
  }
  