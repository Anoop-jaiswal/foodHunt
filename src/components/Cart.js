import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);

  return (
    <div className="text-center items-center">
      <h1 className="text-lg text-black m-2 p-2">Cart</h1>
      <button
        onClick={handleClearCart}
        className="m-2 p-2 px-6 bg-black text-white rounded-lg"
      >
        Clear cart
      </button>
      <div className="w-6/12 m-auto flex justify-center text-center">
        <CategoryItemList itemList={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
