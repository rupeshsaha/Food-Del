import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex-col flex gap-[20px]" id="explore-menu">
      <h1 className="text-3xl text-[#262626] font-bold">Explore Our menu</h1>
      <p className="explore-menu-text max-w-[60%] text-[#313131]">
        Choose from a diverse menu featuring a delectable array of dishes.Our
        mission is to satisfy your cravings for food.
      </p>
      <div className="explore-menu-list cursor-pointer flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              className="explore-menu-list-item"
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt=""
                className={
                  category === item.menu_name
                    ? "w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[0.2] border-[4px] border-[tomato] p-[2px]"
                    : "w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[0.2]"
                }
              />

              <p className="mt-[10px] text-[20px] text-[#747474] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
