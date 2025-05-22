import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { RiShoppingBasketLine, RiShoppingBasketFill } from "react-icons/ri";

const Item = ({ book }) => {
  const { addToCart, cartList } = useContext(ShopContext);

  const isInCart = cartList.some((item) => item.book._id === book._id);

  const handleAddToCart = () => {
    !isInCart && addToCart(book._id);
  };

  return (
    <div className="max-w-60 pb-15 h-120">
      <div className="p-6 bg-gray-100 rounded-2xl">
        <img
          src={book.image}
          alt={book.name}
          className="w-full max-h-70 object-contain rounded-md"
        />
      </div>
      <div className="flex items-center mt-3 justify-between">
        <p className="font-semibold">{book.name}</p>
        <div onClick={handleAddToCart}>
          {isInCart ? (
            <RiShoppingBasketFill className="cursor-pointer text-lg text-rose-300" />
          ) : (
            <RiShoppingBasketLine className="cursor-pointer text-lg" />
          )}
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <p className="text-gray-500 font-semibold">{book.category}</p>
        <p className="font-semibold text-rose-300 opacity-75">
          ${book.price}.00
        </p>
      </div>
      <p className="text-sm text-gray-400 mt-2">{book.description}</p>
    </div>
  );
};

export default Item;
