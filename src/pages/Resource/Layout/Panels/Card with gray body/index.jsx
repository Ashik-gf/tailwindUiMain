export default function CardWithGrayBody() {
    return (
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6 h-[200px]">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="bg-gray-200 px-4 py-5 sm:p-6 h-[100px]">{/* Content goes here */}</div>
      </div>
    )
  }
  