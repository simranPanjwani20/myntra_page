import React from 'react';
import './filter.css';

const Filter = (props) => {
   //different filters based on title of filter
    async function Brandfilter(item) {
        const filteredData =  props.data.filter(product => product.brand.includes(item)); 
        console.log(item)
        await props.setfilteredData(filteredData);
      }

      async function Genderfilter(item) {
        const filteredData =  props.data.filter(product => product.gender.includes(item)); 
        console.log(item.gender)
        await props.setfilteredData(filteredData);
      }

      async function Colorfilter(item) {
        const filteredData =  props.data.filter(product => product.primaryColour.includes(item)); 
        await props.setfilteredData(filteredData);
      }
  return (
    <>
    <div className="filterTitle">
        {props.bname}
    </div>
    {
        props.bname==="Brands" &&  <div className="filterValues">
        {props.list.map(item=>
           <div className='filterName' onClick={() => Brandfilter(item)}>
              {item}
           </div>
             )}
     </div>
    }
    {
        props.bname==="Gender" &&  <div className="filterValues">
        {props.list.map(item=>
           <div className='filterName' onClick={() => Genderfilter(item)}>
              {item}
           </div>
             )}
     </div>
    }
    {
        props.bname==="Color" &&  <div className="filterValues">
        {props.list.map(item=>
           <div className='filterName' onClick={() => Colorfilter(item)}>
              {item}
           </div>
             )}
     </div>
    }
    

  </>
  );
};

export default Filter;
