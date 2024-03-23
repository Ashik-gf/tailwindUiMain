const items = [
    { id: 1,
    name:'Ashik',
Profesion:"Enploye" },
    { id: 2,
    name:'Ashik',
Profesion:"Enploye" },
    { id: 3,
    name:'Ashik',
Profesion:"Enploye" },
 
    // More items...
  ]
  
  export default function SimpleWithDividers() {
    return (
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-4">
            <div className=" border-gray-200 border-dashed border-2 py-6 rounded-md">{/* Your content */}</div>
          </li>
        ))}
      </ul>
    )
  }
  