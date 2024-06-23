import RestaurantCard, { RecommendedRestaurantCards } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const online = useOnlineStatus();
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const RecommendedRestaurant = RecommendedRestaurantCards(RestaurantCard);

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

      setfilteredRestaurants(
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
    setfilteredRestaurants(filteredList);
  };

  if (online === false)
    return (
      <h1>
        Oops! ,Look like you are Offline, please check your internate connection
      </h1>
    );

  return (
    <div className="body">
      <div className="search-filter-container flex m-2 p-2">
        <div className="top-restarants border mx-4 px-2 border-neutral-900">
          <button onClick={topRestaurant}>Top restaurant list</button>
        </div>
        <div className="search flex  mx-4 px-2 ">
          <input
            className="border  border-neutral-900 px-1"
            onChange={(e) => {
              const filtered = listOfRestaurants.filter((res) => {
                return (
                  res.name &&
                  res.name.toLowerCase().includes(e.target.value.toLowerCase())
                );
              });
              setfilteredRestaurants(filtered);
            }}
          />
          <h3 className="border  border-neutral-900 px-1">Search</h3>
        </div>
      </div>

      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.id}`}>
            {restaurant.avgRating > 4.5 ? (
              <RecommendedRestaurant resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
