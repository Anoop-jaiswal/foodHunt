import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (Props) => {
  const { resData } = Props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisine,
    costForTwo,
    delivaryTime,
  } = resData;

  return (
    <div className="m-5 p-5 w-[250px] bg-gray-100 rounded-lg h-80 hover:bg-gray-200">
      {/* {avgRating > 4.4 && (
        <div className="absolute bg-black text-white rounded-r-md px-2  pb-1 -m-4">
          recommended
        </div>
      )} */}
      <img
        className="rounded-lg w-52 h-40"
        alt="res-logo"
        src={IMAGE_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-1">{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{delivaryTime}</h4>
    </div>
  );
};

//Creating Hiegher order function
export const RecommendedRestaurantCards = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white pb-1 px-2 rounded-r-md mx-5">
          recommended
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
