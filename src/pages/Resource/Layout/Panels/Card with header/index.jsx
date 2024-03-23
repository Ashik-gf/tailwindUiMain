export default function CardWithHeader() {
    return (
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-[#F3F4F6] shadow ">
        <div className="px-4 py-5 sm:px-6 h-[100px]">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 sm:p-6 h-[200px]">{/* Content goes here */}</div>
      </div>
    )
  }
  