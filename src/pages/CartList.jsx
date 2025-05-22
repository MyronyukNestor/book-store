import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router";
import CartTotal from "../components/CartTotal";

const CartList = () => {
  const { cartList, removeFromCart, addToCart } = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className="pt-40 px-10 lg:px-20 xl:px-32 py-20 flex flex-col max-md:items-center bg-gray-50">
      <h1 className="text-4xl">
        <span className="font-bold">Cart</span>{" "}
        <span className="text-purple-800">List</span>{" "}
        {cartList.length < 1 && <span>Is Empty!</span>}
      </h1>
      <div className="my-8 flex flex-col gap-5">
        {cartList.map((item) => (
          <div
            key={item.book._id}
            className="flex items-center justify-between bg-white p-5 rounded-2xl"
          >
            <div className="flex items-center gap-5 ">
              <img src={item.book.image} alt="" className="h-30 rounded" />
              <div className="flex flex-col gap-2">
                <p className="font-bold w-2/3 md:w-full">{item.book.name}</p>
                <p className="text-gray-500">{item.book.category}</p>
                <div className="bg-gray-100 flex justify-between items-center rounded-full w-25 px-0.5">
                  <div
                    onClick={() => removeFromCart(item.book._id)}
                    className="rounded-full bg-white px-2 cursor-pointer"
                  >
                    <span className="text-2xl ">-</span>
                  </div>
                  <span className="text-gray-500">{item.quantity}</span>
                  <div
                    onClick={() => addToCart(item.book._id)}
                    className="rounded-full bg-white px-2 cursor-pointer"
                  >
                    <span className="text-2xl">+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-20 md:justify-between w-1/3 md:w-1/2">
              <span className="font-bold text-lg">
                ${item.book.price * item.quantity}
              </span>
              <RiDeleteBin5Line
                onClick={() => removeFromCart(item.book._id)}
                className="text-2xl cursor-pointer hover:text-red-500"
              />
            </div>
          </div>
        ))}
      </div>
      {cartList.length >= 1 && (
        <div>
          <CartTotal py5={"py-5"} mdw={"md:w-1/3"} />
          <button
            onClick={() => {
              navigate("/payment"), scrollTo(0, 0);
            }}
            className="mt-10 bg-rose-200 hover:bg-rose-300 cursor-pointer px-8 py-3 text-gray-600 rounded-4xl"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartList;
