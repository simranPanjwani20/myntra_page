import React, {useState} from 'react';
import './style.css';
import logo from './myntra.jpeg'
import SearchBar from '../Searchbar';
import BagPopover from '../Bag';

function MobileNavbar(props) {
    const setfilteredData = props.setfilteredData
    const [isBagoverOpen, setIsBagoverOpen] = useState(false);

    //manage bag
    const toggleBag = () => {
        setIsBagoverOpen(!isBagoverOpen);
      };

  return (
    <nav className="MobileNavbar">
      <div className="moblogo">
        <img src={logo} alt="Myntra Logo" />
      </div>
      <ul className="Mobilenav-links">
        <li>MEN</li>
        <li>WOMEN</li>
      </ul>
      <div className="mobileSearch">
       <SearchBar setfilteredData={setfilteredData}/>
      </div>
      <div className="user-actions">
        <a className='bagbtn' onClick={toggleBag}>Bag</a>
        {isBagoverOpen && <BagPopover/>}
      </div>
    </nav>
  );
}

export default MobileNavbar;
