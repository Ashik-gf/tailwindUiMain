const items = [
    { id: 1,
    name:'Ashik',
profesion:"Enploye" },
    { id: 2,
    name:'Ashik',
profesion:"Enploye" },
    { id: 3,
    name:'Ashik',
profesion:"lorame20" },
 
    // More items...
  ]
  
  export default function CardWithDividersFullWidthOnMobile() {
    return (
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.id} className="px-4 py-4  sm:px-6">
             <div className=" border-gray-200 border-dashed border-2 py-6 rounded-md">{/* Your content */}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  