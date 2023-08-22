import React, { createContext, useContext, useState, useEffect } from 'react';

const BagContext = createContext();

export const BagProvider = ({ children }) => {
    const storedBagItems = localStorage.getItem('bagItems');
  const [bagItems, setBagItems] = useState(storedBagItems?JSON.parse(storedBagItems):[]);

  useEffect(() => {
    const storedBagItems = localStorage.getItem('bagItems');
    if (storedBagItems) {
      setBagItems(JSON.parse(storedBagItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
  }, [bagItems]);

  const addToBag = (product) => {
    setBagItems([...bagItems, product]);
  };

  const removeFromBag = (product) => {
    setBagItems(bagItems.filter(item => item.productId !== product));
  };

  return (
    <BagContext.Provider value={{ bagItems, addToBag, removeFromBag }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => {
  return useContext(BagContext);
};
