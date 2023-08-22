import React, {useEffect,useState}from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import Jsondata from '../../data.json'
import { formatCurrency } from '../../Utils/numberToKML';
import Navbar from '../../components/Navbar';
import { useBag } from '../../Context/shoppingBag';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';
import MobileNavbar from '../../components/MobileNavbar';

function Details() {
     const { productId } = useParams();
    const items = Jsondata.products;
   const  filteredProduct = items.filter((item) => item.productId === parseInt(productId));
   const [click, setClick] = useState(false)
   const [wishlist, setWishlist] = useState(false)
   const { addToBag } = useBag();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
   

   const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
  });

  //manage responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //managing size btn
   const handleSize = (buttonId) => {
      setButtonStates(prevStates => ({
      ...prevStates,
      [buttonId]: !prevStates[buttonId],
    }));
   };

   //manage wishlist btn
   const handlewishlist = () => {
    setWishlist(prevStates => 
     !prevStates
  );
 };

 //manage bag
   const handleBag = () => {
    setClick(true)
    addToBag({
      "name":filteredProduct[0]?.product,
      "productId":filteredProduct[0]?.productId
    }
      );
 };

  return (
    isMobile ? <>
    <MobileNavbar/>
     <div className="path">
      <span className='pathName'>Home / </span>
      <span className='pathName'>Clothing / </span>
      <span className='pathName'>Shirts For Men / </span>
      <span className='pathName-highlighted'>{filteredProduct[0].brand} {filteredProduct[0].articleType.typeName} {'>'}</span>
      <span className='pathName-highlighted'>More from {filteredProduct[0].brand}</span>
      </div>
      <div className="specificProduct">
         <div className="specificProductImg">
           <div className="imgCon1">
           <Zoom>
             <img src={filteredProduct[0].images[0].src} alt="" />
             </Zoom>
             <Zoom>
             <img src={filteredProduct[0]?.images[1]?.src?filteredProduct[0].images[1].src:''} alt="" />
             </Zoom>
           </div>
           <div className="imgCon2">
           <Zoom>
           <img src={filteredProduct[0].images[3].src} alt="" />
           </Zoom>
           <Zoom>
             <img src={filteredProduct[0]?.images[4]?.src?filteredProduct[0].images[4].src:''}alt="" />
             </Zoom>
           </div>
         </div>
         <div className="specificProductDetail">
            <div className="productTitle">
            {filteredProduct[0].brand}
            </div>
            <div className="specificProductDesc">
            {filteredProduct[0].product} 
            </div>
            <div className="ratingCont">
            <div className="ratingBox">
             <span className="ratingStar">
             {Math.round(filteredProduct[0].rating * 10) / 10} *
             </span>
             <span className='separator'>
                 |
             </span>
             <span className='ratingCount'>
             {formatCurrency(filteredProduct[0].ratingCount)} Ratings
             </span>
            </div>
            </div>
            <div className="specificdiscount">
             <span className="specificPrice">
                 <strong>Rs {filteredProduct[0].price}</strong>
             </span>
             <span className="MRP">
                 MRP
             </span>
             <span className="specificstrikedPrice">
               Rs {filteredProduct[0].mrp}
             </span>
             <span className="specificDiscountPrice">
                 {filteredProduct[0].discountDisplayLabel}
             </span>
             <div className="taxInfo">
                 inclusive of all taxes
             </div>
            </div>
            <div className="sizeCont">
             <span className="sizeTitle">
                 SELECT SIZE
             </span>
             <span className="sizeChart">
                 SIZE CHART {'>'}
             </span>
         </div>
         <div className="sizeButtons">
             <div className={`btns ${buttonStates.button1 ? 'sizeClicked' : ''}`} onClick={() => handleSize('button1')}>{filteredProduct[0].inventoryInfo[0].label}</div>
             <div className={`btns ${buttonStates.button2 ? 'sizeClicked' : ''}`} onClick={() => handleSize('button2')}>40</div>
             <div className={`btns ${buttonStates.button3 ? 'sizeClicked' : ''}`} onClick={() => handleSize('button3')}>42</div>
             <div className={`btns ${buttonStates.button4 ? 'sizeClicked' : ''}`} onClick={() => handleSize('button4')}>44</div>
         </div>
         <div className="saveBtn">
         <div className="bagBtn" onClick={handleBag}>
             {
                 click?"ADDED TO BAG":'ADD TO BAG'
             }
            
         </div>
         <div className={`wishlistBtn ${wishlist ? 'wished' : ''}`} onClick={handlewishlist}>
         {
                 wishlist?"WISHLISTED":'WISHLIST'
             }
         </div>
         </div>
        
         </div>
      </div>
 
     </> :
    <>
    <Navbar/>
    <div className="path">
     <span className='pathName'>Home / </span>
     <span className='pathName'>Clothing / </span>
     <span className='pathName'>Shirts For Men / </span>
     <span className='pathName-highlighted'>{filteredProduct[0].brand} {filteredProduct[0].articleType.typeName} {'>'}</span>
     <span className='pathName-highlighted'>More from {filteredProduct[0].brand}</span>
     </div>
     <div className="specificProduct">
        <div className="specificProductImg">
          <div className="imgCon1">
          <Zoom>
            <img src={filteredProduct[0].images[0].src} alt="" style={{width:"410px"}}/>
            </Zoom>
            <Zoom>
            <img src={filteredProduct[0]?.images[1]?.src?filteredProduct[0].images[1].src:''} alt="" style={{width:"410px"}}/>
            </Zoom>
          </div>
          <div className="imgCon2">
          <Zoom>
          <img src={filteredProduct[0].images[3].src} alt="" style={{width:"410px"}} />
          </Zoom>
          <Zoom>
            <img src={filteredProduct[0]?.images[4]?.src?filteredProduct[0].images[4].src:''}alt="" style={{width:"410px"}}/>
            </Zoom>
          </div>
        </div>
        <div className="specificProductDetail">
           <div className="productTitle">
           {filteredProduct[0].brand}
           </div>
           <div className="specificProductDesc">
           {filteredProduct[0].product} 
           </div>
           <div className="ratingCont">
           <div className="ratingBox">
            <span className="ratingStar">
            {Math.round(filteredProduct[0].rating * 10) / 10} *
            </span>
            <span className='separator'>
                |
            </span>
            <span className='ratingCount'>
            {formatCurrency(filteredProduct[0].ratingCount)} Ratings
            </span>
           </div>
           </div>
           <div className="specificdiscount">
            <span className="specificPrice">
                <strong>Rs {filteredProduct[0].price}</strong>
            </span>
            <span className="MRP">
                MRP
            </span>
            <span className="specificstrikedPrice">
              Rs {filteredProduct[0].mrp}
            </span>
            <span className="specificDiscountPrice">
                {filteredProduct[0].discountDisplayLabel}
            </span>
            <div className="taxInfo">
                inclusive of all taxes
            </div>
           </div>
           <div className="sizeCont">
            <span className="sizeTitle">
                SELECT SIZE
            </span>
            <span className="sizeChart">
                SIZE CHART {'>'}
            </span>
        </div>
        <div className="sizeButtons">
            <div className={`btns ${buttonStates.button1 ? 'sizeClicked' : ''}`} onClick={() => handleSize('button1')}>{filteredProduct[0].inventoryInfo[0].label}</div>
            <div className={`btns ${buttonStates.button2 ? 'sizeClicked' : ''}`} onClick={() => handleSize('button2')}>40</div>
            <div className={`btns ${buttonStates.button3 ? 'sizeClicked' : ''}`} onClick={() => handleSize('button3')}>42</div>
            <div className={`btns ${buttonStates.button4 ? 'sizeClicked' : ''}`} onClick={() => handleSize('button4')}>44</div>
        </div>
        <div className="saveBtn">
        <div className="bagBtn" onClick={handleBag}>
            {
                click?"ADDED TO BAG":'ADD TO BAG'
            }
           
        </div>
        <div className={`wishlistBtn ${wishlist ? 'wished' : ''}`} onClick={handlewishlist}>
        {
                wishlist?"WISHLISTED":'WISHLIST'
            }
        </div>
        </div>
       
        </div>
     </div>

    </>
  );
}

export default Details;
