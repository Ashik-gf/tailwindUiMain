export default function CardWithGrayFooter() {
    return (
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6 h-[300px]">{/* Content goes here */}</div>
        <div className="bg-gray-100 boredr-[2px] border-gray-100 px-4 py-4 sm:px-6  h-[80px]">
          {/* Content goes here */}
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    )
  }
  