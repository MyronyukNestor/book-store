import book from "../assets/book_1.png";
import { TbBus } from "react-icons/tb";

const Features = () => {
  return (
    <div className="py-30 px-10 lg:px-20 xl:px-32 flex flex-col md:flex-row items-center justify-between xl:justify-around">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-4xl">
          <span className="font-bold">Unveiling Our</span>{" "}
          <span className="text-purple-800">Store's key features!</span>
        </h1>
        <p className="text-gray-400 py-5 max-w-md pr-5">
          From timeless classics to modern masterpieces, find the perfect read
          for every moment
        </p>
        <div className="flex flex-col gap-5 pt-5">
          <div className="flex items-center gap-5 ">
            <div className="p-6 bg-rose-200 w-20 text-2xl flex items-center justify-center rounded-xl">
              <TbBus />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Easy Returns Process</h2>
              <p className="text-gray-400 pr-5">
                Hassle-free returns within 30 days.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="p-6 bg-rose-200 w-20 text-2xl flex items-center justify-center rounded-xl">
              <TbBus />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Secure Payment Options</h2>
              <p className="text-gray-400 pr-5">
              Safe and trusted payment methods.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <div className="p-6 bg-rose-200 w-20 text-2xl flex items-center justify-center rounded-xl">
              <TbBus />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Live Customer Support</h2>
              <p className="text-gray-400 pr-5">
              24/7 help from our friendly team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md p-15  bg-rose-200 rounded-3xl mt-8 md:mt-0">
        <img src={book} alt="" className=" rounded-xl" />
      </div>
    </div>
  );
};

export default Features;
