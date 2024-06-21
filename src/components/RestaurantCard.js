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
      <img
        className="rounded-lg w-52 h-40"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-1">{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{delivaryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
