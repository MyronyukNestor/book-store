import { createContext, useEffect, useState } from "react";
import { books as booksData } from "../assets/data";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [books, setBooks] = useState(booksData);
  const [cartList, setCartList] = useState(
    () => JSON.parse(localStorage.getItem("cartList")) || []
  );
  const [category, setCategory] = useState("");
  const [clickedOnCategory, setClickedOnCategory] = useState(false);
  const [search, setSearch] = useState("");


  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const addToCart = (id) => {
    setCartList((prevCart) => {
      const existingItem = prevCart.find((item) => item.book._id === id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.book._id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      const book = books.find((book) => book._id === id);
      return [{ book, quantity: 1 }, ...prevCart];
    });
  };

  const removeFromCart = (id) => {
    setCartList((prevCart) => {
      const existingItem = prevCart.find((item) => item.book._id === id);

      if (existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.book._id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }

      return prevCart.filter((item) => item.book._id !== id);
    });
  };

  const contextValue = {
    books,
    cartList,
    setCartList,
    addToCart,
    removeFromCart,
    setCategory,
    category,
    setClickedOnCategory,
    clickedOnCategory,
    search,
    setSearch,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
