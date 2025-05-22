import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "./Item";
import Pagination from "./Pagination";

const BookList = () => {
  const { books, category, clickedOnCategory, search } =
    useContext(ShopContext);

  const [sort, setSort] = useState("Relevant");

  const filteredByCategory = books
    .filter((book) => book.category === category)
    .filter((book) => book.name.toLowerCase().includes(search.toLowerCase()));

  const allBooks = books.filter((book) =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedBooks = clickedOnCategory ? filteredByCategory : allBooks;

  const sortedBooks = [...displayedBooks].sort((a, b) => {
    if (sort === "Low") {
      return a.price - b.price;
    }
    if (sort === "High") {
      return b.price - a.price;
    }
  });

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const totalPages = Math.ceil(sortedBooks.length / itemsPerPage);

  if (currentPage > totalPages) {
    setCurrentPage(1);
  }

  return (
    <div className="py-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl">
            <span className="font-bold">Our</span>{" "}
            <span className="text-purple-800">Book List</span>
          </h1>
          <p className="text-gray-400 py-5 max-w-md pr-5">
            From timeless classics to modern masterpieces, find the perfect read
            for every moment
          </p>
        </div>
        <div>
          <label htmlFor="sort">Sort by: </label>
          <select
            onChange={(e) => setSort(e.target.value)}
            name="sorting"
            id="sort"
            className="p-3 bg-gray-100 rounded-xl text-gray-500"
          >
            <option value="Relevant">Relevant</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-start sm:justify-center lg:justify-between flex-wrap py-10 gap-5">
        {sortedBooks.slice(start, end).map((book) => (
          <Item book={book} key={book._id} />
        ))}
        <div className="w-[250px] hidden sm:block"></div>
        <div className="w-[250px] hidden sm:block"></div>
        <div className="w-[250px] hidden sm:block"></div>
      </div>
      {totalPages > 1 && (
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default BookList;
