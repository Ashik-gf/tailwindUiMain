import React, { useState } from 'react';

const ShortToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div
      className={`relative inline-block w-10 h-4 rounded-full bg-gray-300 transition duration-300 ease-in-out ${
        isChecked ? 'bg-green-400' : ''
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`absolute left-0 w-6 h-4 rounded-full bg-white shadow-md transform transition duration-300 ease-in-out ${
          isChecked ? 'translate-x-full' : ''
        }`}
      ></div>
    </div>
  );
};

export default ShortToggle;

