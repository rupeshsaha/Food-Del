import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState({})

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev=>({...prev ,[itemId]:prev[itemId]+1})))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev; // If the item doesn't exist, do nothing
            const newCount = prev[itemId] - 1;
            if (newCount <= 0) {
                // If the count goes to zero or below, remove the item from the cart
                const { [itemId]: removedItem, ...rest } = prev; // Destructure to remove the item
                return rest;
            }
            return { ...prev, [itemId]: newCount }; // Otherwise, just update the count
        });
    };
    

    useEffect(()=>{console.log(cartItems);
    },[cartItems])

    
    const contextValue = {
      food_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart  

    }

    return (
        <StoreContext.Provider value={contextValue}>

            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider