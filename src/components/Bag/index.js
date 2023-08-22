import React from 'react';
import { useBag } from '../../Context/shoppingBag';
import './style.css';

const BagPopover = () => {
  const { bagItems } = useBag();
  const { removeFromBag } = useBag();

  //removes product from bag
  const removeProduct = (value) => {
    removeFromBag(value);
 };

  return (
    <div className="bag-popover">
      <h4>Your Bag</h4>
      <ul >
        {bagItems.length!==0?bagItems.map(item => (
            <div className='bagContent'>
          <li>{item.name} </li>
          <button className="remove-button" onClick={()=>removeProduct(item.productId)}>
          Remove
        </button>
        </div>
        )):"YOUR BAG IS EMPTY"}
      </ul>
    </div>
  );
};

export default BagPopover;
