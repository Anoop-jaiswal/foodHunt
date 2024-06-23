import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  //fetching data in custom hook useRestaurants menu
  const resInfo = useRestaurantsMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const resCategory =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="text-bold text-3xl mt-6">{name}</h1>
      <p className="text-bold text-xl my-5">
        {cuisines?.join(", ")} {costForTwoMessage}
      </p>
      {resCategory?.map((category, index) => {
        return (
          <RestaurantCategory
            categoryData={category?.card?.card}
            setShowIndex={() => setShowIndex(index)}
            open={index === showIndex}
          />
        );
      })}
    </div>
  );
};

export default RestaurantsMenu;
