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
  
  export default function SeparateCards() {
    return (
      <ul role="list" className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div className=" border-gray-200 border-dashed border-2 py-6 rounded-md">{/* Your content */}</div>
          </li>
        ))}
      </ul>
    )
  }
  