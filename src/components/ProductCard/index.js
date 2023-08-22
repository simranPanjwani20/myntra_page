import React,  { useState }from 'react';
import './style.css';
import Slider from '../Slider';
import './image1.jpeg'

const ProductCard = (props) => {
const images = [props.images[0].src,props.images[1].src,props.images[2].src ];
const [hovered, setHovered] = useState(false);
const [wishlist, setWishlist] = useState(false);

//handle hover
const handleHover = () => {
  setHovered(true);
};
const handleOut = () => {
  setHovered(false);
};

//manage wishlist btn
  const handleWishlist = () => {
    if(wishlist){
      setWishlist(false)
    }
    else
    setWishlist(true);
  };

  return (
    <div className="product-card"  onMouseEnter={handleHover} onMouseLeave={handleOut} onClick={()=>{window.location.href=`/${props.productId}`}}>
       {!hovered ? (
        <>
        <div className="ratings">
        <span>{props.rating} </span><span class="product-ratingsCount"><span class="product-separator">| </span><span>{props.ratingCount}</span></span>
        </div>
     <div className="productImg">
      <img src={images[0]} alt="" />
     
     </div>
       
      <div className="productInfo">
      <h3 class="product-brand">{props.name}</h3>
      <h4 class="product-desc">{props.desc}</h4>
      <div class="product-price"><span><span class="product-discountedPrice">Rs. {props.price}</span><span class="product-strike">Rs {props.mrp}</span></span><span class="product-discountPercentage">{props.discount}</span></div>
      </div>
      </>
      ) : (
        <>
        <Slider images={images}/>
       <div className="wishlist">
       <button
      className={`wishlist-button`}
      onClick={handleWishlist}
    >
      {wishlist? 'Remove from Wishlist' : 'Add to Wishlist'} 
    </button>
       </div>
       <div className="productInfo">
        <div className="productsize">
          Sizes: {props.sizes}
        </div>
      <div class="product-price"><span><span class="product-discountedPrice">Rs. {props.price}</span><span class="product-strike">{props.mrp}</span></span><span class="product-discountPercentage">{props.discount}</span></div>
      </div>
        </>
      )}
       
    </div>
  );
};

export default ProductCard;