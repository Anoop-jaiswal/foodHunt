import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState([]);

  const fetchMenu = async () => {
    const fetchData = await fetch(RES_MENU_URL + resId);
    const jsonData = await fetchData.json();
    setResInfo(jsonData.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  console.log(
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || {}
  );

  const resMenu =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];

  return (
    <div>
      <h1>{name}</h1>
      <h2></h2>
      <p>
        {cuisines?.join(", ")} {costForTwoMessage}
      </p>
      <h1>Menu</h1>
      {resMenu.map((res) => {
        return (
          <li>
            {res.card.info.name} : Rs-
            {res.card.info.price / 100 || res.card.info.defaultPrice / 100}
          </li>
        );
      })}
    </div>
  );
};

export default RestaurantsMenu;
