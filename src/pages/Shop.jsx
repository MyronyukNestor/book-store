import BookList from "../components/BookList";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";

const Shop = () => {
  return (
    <div className="px-10 lg:px-20 xl:px-32 py-20 pt-40 flex flex-col max-md:items-center">
      <SearchBar />
      <Categories />
      <BookList />
    </div>
  );
};

export default Shop;
