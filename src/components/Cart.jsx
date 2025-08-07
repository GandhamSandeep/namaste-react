import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();

  const handleClearCart = () => {
    // Dispatch an action to clear the cart
    // This function should be defined in your Redux slice
    // For example: dispatch(clearCart());
    dispatch(clearCart());
  }

  // const cartItems = useSelector((store) => store.cart.items);

  const store = useSelector((store) => store);

  const cartItems = store.cart.items


  return(
    <div className="text-center mt-10 w-6/12 m-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cart</h1>
        <button className="text-white bg-sky-400 p-2 m-2 rounded-sm"
        onClick={handleClearCart}
        >Clear All</button>
      </div>
      <div className="border border-red-300">
      { cartItems.length === 0 && <h1 className="text-sm font-small">Cart is Empty. Add Items to Cart</h1> }
        <ItemList items={cartItems} />
      </div>
    </div>
  );
}

export default Cart;