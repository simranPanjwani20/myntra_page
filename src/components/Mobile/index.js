import React, {useState, useEffect}from 'react';
import './style.css';
import Jsondata from '../../data.json'
import ProductCard from '../../components/ProductCard';
import { formatCurrency } from '../../Utils/numberToKML';
import Filter from '../../components/Filter/filter';
import SortdownButton from '../../components/Sorting';
import MobileNavbar from '../../components/MobileNavbar';


function MobileView() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [data, setdata] = useState(Jsondata.products)
  const [filteredData, setfilteredData] = useState(data);
 
  useEffect(() => {
  }, [filteredData])
  
  //handling responsiveness and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //removes all filter
  function removeFilter() {
    setfilteredData(data)
  }
  return (
    <>
    <MobileNavbar setfilteredData={setfilteredData}/>
    <div className="path">
     <span className='pathName'>Home / </span>
     <span className='pathName'>Clothing / </span>
     <span className='pathName-highlighted'>Shirts For Men And Women</span>
     </div>
     <div className="productDetail">
        <span className='productName'>Shirts For Men & Women
 </span>
 <span className='productCount'>- 121993 items</span>
     </div>
     <div className="Filters">
      <div className="naming">
      FILTERS
      </div>
  <div className="removeFilterBtn" onClick={removeFilter}>
     Remove Filters
     </div>
     <div>
     <SortdownButton data={data} setfilteredData={setfilteredData}/>
     </div>
     </div>
     <div className="filterNprod">
        <div className="moreFilter">
        <div className="brandFilter">
         <Filter bname={"Brands"} list={['Roadster','Tokyo Talkies', 'LOCOMOTIVE', 'KETCH', 'ANI']} data={data} setfilteredData={setfilteredData} />
         <Filter bname={"Gender"} list={['Men', 'Women']} data={data} setfilteredData={setfilteredData}/>
         <Filter bname={"Color"} list={['White', 'Blue', 'Navy Blue', 'Black']} data={data} setfilteredData={setfilteredData}/>
        </div>
        </div>
        <div className='mobileProd'>
         {filteredData.map(item => (
          <ProductCard productId={item.productId} name={item.brand} desc={item.productName} discount={item.discountDisplayLabel} mrp={item.mrp} price={item.price} images={item.images} sizes={item.inventoryInfo[0].label} rating={Math.round(item.rating * 10) / 10} ratingCount={formatCurrency(item.ratingCount)}/>
        ))}
        </div>
     </div>

    </>
   
  );
}

export default MobileView;
