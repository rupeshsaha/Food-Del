import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item  w-full m-auto rounded-[15px] animate-[fadeIn_0.5s]">
      <div className="food-item-img-container relative">
        <img className="food-item-image w-full " src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add absolute right-[15px] bottom-[15px] rounded-[50%] cursor-pointer w-[35px]"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter absolute right-[80px] bottom-[15px]   rounded-[50%] cursor-pointer w-[32px] flex gap-[10px]">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p className="pt-2 text-[tomato] font-bold">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-[20px] ">
        <div className="food-item-name-rating flex items-center justify-between mb-[10px]">
          <p className="text-[16px] font-[600]">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc text-[#454545bd] text-[12px]">
          {description}
        </p>
        <p className="food-item-price text-[tomato] text-[22px] font-[600] my-[10px]">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
