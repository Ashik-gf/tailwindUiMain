export default function WithActions() {
    return (
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Back End Developer
          </h2>
        </div>
        <div className="mt-4 flex md:ml-6 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Edit
          </button>
          <button
            type="button"
            className=" border-2 border-gray-100 p-2 hover:bg-indigo-600 hover:text-white bg-red-400 rounded-md "
          >
            Publish
          </button>
        </div>
      </div>
    )
  }
  