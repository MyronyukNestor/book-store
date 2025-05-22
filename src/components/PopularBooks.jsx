import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "./Item";

const PopularBooks = () => {
  const { books } = useContext(ShopContext);

  const popularBooks = books.filter((book) => book.popular);

  return (
    <div className="py-15 px-10 lg:px-20 xl:px-32 bg-gray-50">
      <h1 className="text-4xl">
        <span className="font-bold">Popular</span>{" "}
        <span className="text-purple-800">Books</span>
      </h1>
      <p className="text-gray-400 py-5 max-w-md pr-5">
        From timeless classics to modern masterpieces, find the perfect read for
        every moment
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around flex-wrap gap-3">
        {popularBooks.slice(0, 5).map((book) => (
          <Item book={book} key={book._id} />
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
