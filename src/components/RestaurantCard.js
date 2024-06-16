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
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{delivaryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
