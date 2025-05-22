import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { TbHomeFilled } from "react-icons/tb";
import { GiBookshelf } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { useContext, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { GiOpenBook } from "react-icons/gi";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { cartList } = useContext(ShopContext);

  const NavLinks = [
    { icon: <TbHomeFilled />, name: "Home", path: "/" },
    { icon: <GiBookshelf />, name: "Shop", path: "/store" },
    { icon: <GiOpenBook />, name: "About Us", path: "/about" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <nav className="z-50 flex w-full fixed items-center justify-between px-4 lg:px-20 xl:px-32 py-6 border-b border-b-gray-300 bg-gray-50">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-15 h-10" />
        <h1 className="text-3xl font-bold">BookStore</h1>
      </Link>
      <div className="hidden md:flex gap-10 font-medium">
        {NavLinks.map((link, index) => (
          <NavLink
            onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-1.5 ${
                isActive &&
                "text-violet-800 border-b-2 border-b-violet-800 py-2"
              }`
            }
          >
            <p>{link.icon}</p>
            <p>{link.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <Link
          onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          to="/cart-list"
          className="bg-purple-900 rounded-full p-2 text-white relative"
        >
          <FiShoppingBag />
          <span className="absolute -top-2 -right-2 text-black text-sm rounded-full px-1 bg-white border border-gray-400">
            {cartList.length}
          </span>
        </Link>
        {user ? (
          <UserButton>
            <UserButton.MenuItems />
          </UserButton>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="flex items-center gap-3 rounded-3xl border border-gray-400 px-5 py-2 cursor-pointer font-medium hover:bg-gray-100"
          >
            Login <LuUser className="text-xl" />
          </button>
        )}
      </div>
      <div className="flex items-center md:hidden gap-4">
        <Link
          to="/cart-list"
          className="bg-purple-900 rounded-full p-2 text-white relative"
        >
          <FiShoppingBag />
          <span className="absolute -top-2 -right-2 text-black text-sm rounded-full px-1 bg-white border border-gray-400">
            {cartList.length}
          </span>
        </Link>
        <RiMenu3Fill
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-8 h-8"
        />
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-7 right-4">
          <MdOutlineClose
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10"
          />
        </button>
        {NavLinks.map((link, index) => (
          <Link
            onClick={() => setIsMenuOpen(false)}
            key={index}
            to={link.path}
            className="flex items-center gap-2 text-2xl"
          >
            <p>{link.icon}</p>
            <p>{link.name}</p>
          </Link>
        ))}
        {user ? (
          <UserButton>
            <UserButton.MenuItems />
          </UserButton>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="flex items-center gap-3 rounded-3xl border border-gray-400 px-5 py-2 cursor-pointer font-medium hover:bg-gray-100"
          >
            Login <LuUser className="text-xl" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
