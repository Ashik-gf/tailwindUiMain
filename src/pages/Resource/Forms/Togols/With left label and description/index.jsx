import { useState } from 'react'


  

export default function WithLeftLabelAndDescription() {
    const toggleSwitch = () => {
        setIsChecked(prevState => !prevState);
      };
      const [isChecked, setIsChecked] = useState(false);
  return (
   <div className=' w-full px-6 overflow-hidden  flex justify-center items-center gap-6'>

<div>
    <p className='text-sm font-medium leading-6 text-gray-900'> Available to hire</p>
    <p className='text-sm overflow-hidden text-gray-500'> Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</p>
</div>

<div
    className={`relative inline-block w-10 h-6 rounded-full bg-gray-300 transition duration-300 ease-in-out ${
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
