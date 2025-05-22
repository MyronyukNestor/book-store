import { RiSearch2Line } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const SearchBar = () => {
  const { search, setSearch } = useContext(ShopContext);

  return (
    <div className="w-1/2 flex items-center gap-5 bg-gray-100 p-5 rounded-4xl">
      <button className="cursor-pointer text-xl text-gray-500">
        <RiSearch2Line />
      </button>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search here..."
        className="focus:outline-none w-full text-gray-600"
      />
    </div>
  );
};

export default SearchBar;
