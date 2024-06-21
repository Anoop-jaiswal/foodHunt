import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  //fetching data in custom hook useRestaurants menu
  const resInfo = useRestaurantsMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

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
