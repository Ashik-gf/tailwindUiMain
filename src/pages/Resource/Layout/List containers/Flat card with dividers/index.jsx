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
  
  export default function FlatCardWithDividers() {
    return (
      <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
        <ul role="list" className="divide-y divide-gray-300">
          {items.map((item) => (
            <li key={item.id} className="px-6 py-4">
              <div className=" border-gray-200 border-dashed border-2 py-6 rounded-md">{/* Your content */}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  