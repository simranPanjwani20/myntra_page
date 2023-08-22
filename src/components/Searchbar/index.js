import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import './style.css';
import Jsondata from '../../data.json'

 //searchBar can search on the basis of product name and description like men, roadster, women, blue etc

function SearchBar(props) {
  const [searchText, setSearchText] = useState('');

  //text in searchbar
  const handleSearch = (text) => {
    setSearchText(text);

    //results
    const filteredResults = Jsondata.products.filter(item =>
      item.product.toLowerCase().includes(text.toLowerCase())
    );
    props.setfilteredData(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;
