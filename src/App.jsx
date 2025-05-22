import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Shop from "./pages/Shop";
import CartList from "./pages/CartList";
import Footer from "./components/Footer";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart-list" element={<CartList />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
        <Footer />
    </div>
  );
};

export default App;
