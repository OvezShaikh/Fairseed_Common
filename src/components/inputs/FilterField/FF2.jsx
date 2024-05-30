import React, { useState, useRef, useEffect } from 'react';
import './FF2.css';
import images from '../../../constants/images';

const SelectWithCheckboxes = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const selectBoxRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((o) => o !== option)
        : [...prevSelected, option]
    );
  };

  const handleClickOutside = (event) => {
    if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="select-with-checkboxes" ref={selectBoxRef}>
      <div className="select-box" onClick={handleToggle}>
        {selectedOptions.length > 0
          ? <span className='no-selected-text  font-[Satoshi] font-bold text-[18px]'> {selectedOptions.length} selected </span>
          : <div className='blank'></div>}
        <span className="arrow">{isOpen ? <img src={images.ColorFullDownArrow}  alt="No image"/> : <img src={images.ColorFullDownArrow}  alt="No image"/>}</span>
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            
            <label key={option} className="option">
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <span className="custom-checkbox"></span>
              {option}
            </label>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectWithCheckboxes;
