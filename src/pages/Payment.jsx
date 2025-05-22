import { useRef } from "react";
import CartTotal from "../components/CartTotal";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";

const Payment = () => {
  const navigate = useNavigate();

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.checkValidity() &&
      toast.success("Success!", { position: "top-right" });

    setTimeout(() => {
      navigate("/");
    }, 6000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="pt-40 px-10 lg:px-20 xl:px-32 py-20 flex items-center md:items-start flex-col md:flex-row justify-between"
    >
      <div className="w-1/2">
        <h1 className="text-4xl text-center md:text-left">
          <span className="font-bold">Delivery</span>{" "}
          <span className="text-purple-800">Information</span>
        </h1>
        <div className="mt-10 flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              required
              type="text"
              placeholder="First Name"
              className="border-2 border-gray-300 outline-0 w-full px-3 py-2 rounded"
            />
            <input
              required
              type="text"
              placeholder="Last Name"
              className="border-2 border-gray-300 outline-0 w-full px-3 py-2 rounded"
            />
          </div>
          <input
            required
            type="email"
            placeholder="Email"
            className="border-2 border-gray-300 outline-0 w-full px-3 py-2 rounded"
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            className="border-2 border-gray-300 outline-0 w-full px-3 py-2 rounded"
          />
          <div className="flex gap-2">
            <input
              required
              type="text"
              placeholder="City"
              className="border-2 border-gray-300 outline-0 w-full px-3 py-2 rounded"
            />
            <input
              required
              type="text"
              placeholder="State"
              className="border-2 border-gray-300 outline-0 w-full px-3 py-2 rounded"
            />
          </div>
          <div className="flex gap-2">
            <input
              required
              type="text"
              placeholder="Zip Code"
              className="border-2 border-gray-300 outline-0 w-full px-3 py-2 rounded"
            />
            <input
              required
              type="text"
              placeholder="Country"
              className="border-2 border-gray-300 outline-0 w-full px-3 py-2 rounded"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 md:pl-30">
        <CartTotal mt10={"mt-10"} />
        <button
          type="submit"
          className="mt-5 px-8 py-3 bg-rose-200 rounded-4xl cursor-pointer hover:bg-rose-300 active:scale-95 transition text-gray-900"
        >
          Place Order
        </button>
        <ToastContainer />
      </div>
    </form>
  );
};

export default Payment;
