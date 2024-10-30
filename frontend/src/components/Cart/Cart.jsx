import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const CartComp = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className="cart mt-[100px]">
      <div className="cart-items">
        <div
          className="cart-items-title grid items-center text-[grey] text-[]"
          style={{ gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1fr 0.5fr" }}
        >
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[1px] bg-[#e2e2e2] border-none" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  className="cart-items-title grid items-center text-[grey]cart-items-item my-[10px] text-[black] "
                  style={{ gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1fr 0.5fr" }}
                >
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cursor-pointer" onClick ={()=>removeFromCart(item._id)}>x</p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CartComp;
