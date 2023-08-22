import React, {useState} from 'react';
import './style.css';
import logo from './myntra.jpeg'
import SearchBar from '../Searchbar';
import BagPopover from '../Bag';

function Navbar(props) {
    const setfilteredData = props.setfilteredData
    const [isBagoverOpen, setIsBagoverOpen] = useState(false);
  
    //manages bag
    const toggleBag = () => {
        setIsBagoverOpen(!isBagoverOpen);
      };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Myntra Logo" />
      </div>
      <ul className="nav-links">
        <li><a >MEN</a></li>
        <li><a >WOMEN</a></li>
        <li><a >KIDS</a></li>
        <li><a >HOME & LIVING</a></li>
        <li><a >OFFERS</a></li>
      </ul>
       <SearchBar setfilteredData={setfilteredData}/>
      <div className="user-actions">
        <a >Profile</a>
        <a >Wishlist</a>
        <a className='bagbtn' onClick={toggleBag}>Bag</a>
        {isBagoverOpen && <BagPopover/>}
      </div>
    </nav>
  );
}

export default Navbar;
