import filter from "../assets/features/filter.png";
import rating from "../assets/features/rating.png";
import secure from "../assets/features/secure.png";
import wishlist from "../assets/features/wishlist.png";

const features = [
  {
    image: filter,
    title: "Advanced Search and Filters",
    desc: "Effortlessly search books by title, author, genre, or price range.",
  },
  {
    image: rating,
    title: "User Reviews and Ratings",
    desc: "Customers can share reviews, rate books, and guide future readers.",
  },
  {
    image: secure,
    title: "Wishlist and Favorites",
    desc: "Save books to wishlist for future purchases or easy access.",
  },
  {
    image: wishlist,
    title: "Secure Online Payments",
    desc: "Enjoy seamless checkout with multiple secure payment options.",
  },
];

const FeaturesOfSite = () => {
  return (
    <div className="flex py-40 justify-center gap-10 flex-wrap">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center gap-3">
          <img src={feature.image} alt="" className="w-15" />
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold">{feature.title}</p>
            <div className="h-1.5 w-10 bg-purple-900 rounded-4xl"></div>
          </div>
          <p className="max-w-80 text-center text-gray-400">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesOfSite;
