import React from "react";
import { menu_list } from "../../assets/assets";
import "./Exploremenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div
      className="explore-menu flex flex-col gap-5 px-4 sm:px-6 md:px-12"
      id="explore-menu"
    >
      <h1 className="text-2xl sm:text-3xl text-[#262626] font-bold">
        Explore Our Menu
      </h1>

      <p className="explore-menu-text text-[#313131] max-w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] text-base sm:text-lg">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings for food.
      </p>

      <div className="explore-menu-list flex gap-6 sm:gap-8 md:gap-10 my-5 overflow-x-auto no-scrollbar">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="flex flex-col items-center min-w-[80px] cursor-pointer"
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`w-[20vw] sm:w-[15vw] md:w-[10vw] min-w-[80px] rounded-full transition-all duration-200 p-[2px] ${
                  isActive ? "border-4 border-[tomato]" : ""
                }`}
              />
              <p className="mt-2 text-sm sm:text-base text-[#747474] text-center">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>

      <hr className="my-2 h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
