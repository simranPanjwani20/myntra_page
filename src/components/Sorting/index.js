import React, { useState } from 'react';
import './style.css';

const SortdownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  //manage sort btn
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //sort on basis of price
  const sortDataPrice = () => {
    const sortedData = [...props.data].sort((a, b) => a.price - b.price);
    props.setfilteredData(sortedData);
  };

  //sort on basis of rating
  const sortDataRating = () => {
    const sortedData = [...props.data].sort((a, b) => b.rating - a.rating);
    props.setfilteredData(sortedData);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>Sort By: Recommended</button>
      {isOpen && (
        <div className="dropdown-content">
          <p onClick={sortDataPrice}>Price: Low to High </p>
          <p onClick={sortDataRating}>Rating</p>
        </div>
      )}
    </div>
  );
};

export default SortdownButton;
