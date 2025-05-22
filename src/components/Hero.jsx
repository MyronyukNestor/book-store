import { useNavigate } from "react-router";
import hero from "../assets/bg.png";
import pencil from "../assets/pencil.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between xl:justify-center px-10 lg:px-20 xl:px-32 py-20 pt-50">
      <div className="flex flex-col w-full lg:w-1/2 items-center lg:items-start ">
        <h1 className="text-center lg:text-start text-6xl font-bold space-y-5">
          Discover{" "}
          <span className="inline-block bg-purple-900 rounded-full text-white px-3 py-0.5 -rotate-40">
            B
          </span>
          ooks <img className="h-15 inline-block" src={pencil} /> That Inspire
          Your World
        </h1>
        <p className="text-gray-400 mt-10 max-w-2xl md:pr-10">
          Explore a world of stories, knowledge, and inspiration. Discover books
          that ignite your imagination, broaden your perspective, and enrich
          your journey. From timeless classics to modern masterpieces, find the
          perfect read for every moment
        </p>
        <button
          onClick={() => {
            navigate("/store"),
              scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="w-40 px-7 py-3 bg-rose-200 rounded-4xl cursor-pointer mt-5 hover:bg-rose-300"
        >
          Explore Now
        </button>
      </div>
      <div>
        <img src={hero} alt="" className="w-lg mt-5 lg:mt-0 lg:w-xl" />
      </div>
    </div>
  );
};

export default Hero;
