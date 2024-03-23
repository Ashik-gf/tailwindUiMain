export default function CardWithHeaderAndFooter() {
    return (
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-[#F3F4F6] border-2 border-gray-100 shadow">
        <div className="px-4 py-5 sm:px-6 h-[80px]">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 sm:p-6 bg-gray-300 h-[100px]">{/* Content goes here */}</div>
        <div className="px-4 py-4 sm:px-6 bg-gray-400 h-[200px]">
          {/* Content goes here */}
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    )
  }
  