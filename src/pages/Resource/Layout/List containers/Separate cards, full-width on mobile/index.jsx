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
  
  export default function SeparateCardsFullWidthOnMobile() {
    return (
      <ul role="list" className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
             <div className=" border-gray-200 border-dashed border-2 py-6 rounded-md">{/* Your content */}</div>
          </li>
        ))}
      </ul>
    )
  }
  