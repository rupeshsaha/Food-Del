import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = ({category}) => {
const {food_list} = useContext(StoreContext)

  return (
    <div className="food-display mt-[30px] " id="food-display">
      <h1 className="text-2xl sm:text-3xl text-[#262626] font-bold">
        Top dishes near you
      </h1>
      <div className="food-display-list grid animate-[fadeIn_0.5s]">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay