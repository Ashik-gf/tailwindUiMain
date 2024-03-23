import { useState } from 'react'


  

export default function WithToggle() {
    const toggleSwitch = () => {
        setIsChecked(prevState => !prevState);
      };
      const [isChecked, setIsChecked] = useState(false);
  return (
   <div className=' flex justify-between items-center'>

<div>
    <p className='text-sm font-medium leading-6 text-gray-900'> Manage subscription</p>
    <p className='text-sm text-gray-500'> 
   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Et magnam commodi placeat asperiores quod dignissimos, quos aliquam pariatur culpa inventore, laborum nam sit quia, illo esse magni.
     Dicta et deserunt aperiam ad veritatis iusto omnis animi ea corporis sit necessitatibus optio quae quasi consectetur rerum itaque consequatur molestias, soluta libero.
    </p>
</div>

<div
    className={`relative inline-block w-32 h-6 rounded-full bg-gray-300 transition duration-300 ease-in-out ${
      isChecked ? 'bg-green-400' : ''
    }`}
    onClick={toggleSwitch}
  >
    <div
      className={`absolute left-0 w-6 h-6 rounded-full bg-white shadow-md transform transition duration-300 ease-in-out ${
        isChecked ? 'translate-x-full' : ''
      }`}
    ></div>
  </div>
   </div>
  )
}
