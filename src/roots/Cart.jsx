import { useState } from "react";
import { removeItem, addItem, clearCart } from "../utilities/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import store from "../utilities/store";
import MealCard from "../components/MealCard";
import cartImg from "../assets/EmptyCart.jpg";
function Cart() {
  const dispatch = useDispatch();
  const [orderSuccessfullyWindow, setOrderSuccessfullyWindow] =
    useState("hidden");
  function handleRemoveItem(elm) {
    dispatch(removeItem(elm));
  }
  function handleclearCart() {
    dispatch(clearCart());
  }

  const cartItems = useSelector((store) => {
    console.log(store);
    return store.cart.items;
  });
  
  

  return (
    <div>
      {" "}
      <div className="relative flex flex-col ">
        <div
          className={`orderSuccessfullyWindow h-[70vh] w-[70vh] flex justify-center items-center absolute bg-green-600 rounded-md text-zinc-50 text-2xl left-[35%] ${orderSuccessfullyWindow}`}
        >
          🚚Order Confirmed
        </div>
        <h1 className="text-2xl font-bold">Cart Items</h1>
        <button
          onClick={handleclearCart}
          className="p-1 m-1 bg-red-800 text-zinc-50 rounded-md w-40 text-center"
        >
          ClearAll
        </button>
        <div className="cartItems flex justify-center items-center min-h-96">
          {cartItems.length === 0 ? (
            <img src={cartImg} alt="" />
          ) : (
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {cartItems.map((elm) => (
                <>
                  <div className="" key={elm.idMeal}>
                    <MealCard {...elm} />
                    <div className="btns">
                      <button
                        onClick={() => handleRemoveItem(elm.idMeal)}
                        className="bg-red-500 p-1 rounded-lg m-1 text-zinc-50 "
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              ))}{" "}
            </div>
          )}
        </div>
        <div className="w-full flex justify-end p-2">
          <button
            className="bg-orange-600 text-zinc-50 p-2 m-2 hover:scale-110 transition-all "
            onClick={() => {
              setOrderSuccessfullyWindow("");
              handleclearCart();
              setTimeout(() => {
                setOrderSuccessfullyWindow("hidden");
              }, 2000);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
