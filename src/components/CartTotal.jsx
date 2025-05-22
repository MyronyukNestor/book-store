import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartTotal = ({ py5, mdw, mt10 }) => {
  const { cartList } = useContext(ShopContext);

  const subTotal = cartList
    .map((item) => item.book.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  const shippingFee =
    cartList.map((item) => item.quantity).reduce((a, b) => a + b, 0) >= 10
      ? 10
      : 5;

  return (
    <div className={`${mt10} md:mt-0`}>
      <h1 className={`text-4xl ${py5} text-center md:text-left`}>
        <span className="font-bold">Cart</span>{" "}
        <span className="text-purple-800">Total</span>
      </h1>
      <div className={`w-full ${mdw} ${mt10}`}>
        <div className="flex items-center justify-between  border-b border-b-gray-200">
          <p className="text-lg font-semibold py-2">SubTotal:</p>

          <p className="text-gray-400 font-semibold">${subTotal}.00</p>
        </div>
        <div className="flex items-center justify-between  border-b border-b-gray-200">
          <p className="text-lg font-semibold py-2">Shipping Fee:</p>
          <p className="text-gray-400 font-semibold">
            ${subTotal !== 0 ? shippingFee : 0}.00
          </p>
        </div>
        <div className="flex items-center justify-between  border-b border-b-gray-200">
          <p className="text-lg font-semibold py-2">Total:</p>
          <p className="text-gray-400 font-semibold">
            ${subTotal !== 0 ? subTotal + shippingFee : 0}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
