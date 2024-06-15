import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.028254229876739&lng=77.56900029990796&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const jsonData = await data.json();

      setListOfRestaurant(
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
          (res) => {
            return res.info;
          }
        )
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const topRestaurant = () => {
    const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4.3);
    setListOfRestaurant(filteredList);
  };

  return (
    <div className="body">
      <div className="search">
        <button onClick={topRestaurant}>Top restaurant list</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
