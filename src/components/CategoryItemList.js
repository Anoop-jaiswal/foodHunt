import { IMAGE_URL } from "../utils/constants";

const CategoryItemList = ({ itemList }) => {
  console.log(itemList, "item");
  return (
    <div>
      {itemList.map((item) => {
        return (
          <div className="border-b-2 p-2 m-2 text-left flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  <span className="pl-2">₹</span>
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 flex justify-end">
              {item.card.info.imageId ? (
                <div>
                  {
                    <img
                      className="w-20"
                      alt="res-logo"
                      src={IMAGE_URL + item.card.info.imageId}
                    />
                  }
                  <button className="absolute m-1 px-3 -my-4 bg-white font-bold text-green-500 border mx-3 rounded shadow-lg">
                    ADD
                  </button>
                </div>
              ) : (
                <button className="px-4  bg-white  text-green-500 border  rounded shadow-lg">
                  ADD +
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItemList;
