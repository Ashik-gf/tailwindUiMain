export default function NarrowConstrainedWithPaddedContent() {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-slate-300">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-3xl border-2 border-gray-200 h-[320px] bg-slate-100">{/* Content goes here */}</div>
      </div>
    )
  }
  