import { useState } from "react";
import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({ categoryData, open, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="header w-7/12 mx-auto  shadow-md my-2 bg-slate-50 p-2"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-md">
            {categoryData.title}({categoryData.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        <div>
          {open && <CategoryItemList itemList={categoryData.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
