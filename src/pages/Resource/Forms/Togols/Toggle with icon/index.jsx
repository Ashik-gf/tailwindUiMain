import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
 // Example icons from Font Awesome

const ToggleWithIcon = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
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
      >
        <FontAwesomeIcon
          icon={isChecked ? faSun : faMoon} // Use different icons based on the state
          className={`text-yellow-500 w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        />
      </div>
    </div>
  );
};

export default ToggleWithIcon;
