import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "./Item";

const NewArrivals = () => {
  const { books } = useContext(ShopContext);


  return (
    <div className="px-4 lg:px-20 xl:px-32 bg-gray-50 py-10">
      <h1 className="text-4xl">
        <span className="font-bold">New</span> Arrivals
      </h1>
      <p className="text-gray-400 mt-5 max-w-md">
        Explore our store's curated books for every reader.
      </p>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="mt-20"
      >
        {books.slice(0, 7).map((book) => (
          <SwiperSlide
            key={book._id}
            className="flex justify-center items-center"
          >
            <Item book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrivals;
