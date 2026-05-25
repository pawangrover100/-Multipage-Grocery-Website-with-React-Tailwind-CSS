import Heading from "../Heading/Heading.jsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Customer1 from "../../assets/Grocery Website Assets/customer1.jpg";
import Customer2 from "../../assets/Grocery Website Assets/customer2.jpg";
import Customer3 from "../../assets/Grocery Website Assets/customer3.jpg";
import Customer4 from "../../assets/Grocery Website Assets/customer4.jpg";
import Customer5 from "../../assets/Grocery Website Assets/customer5.jpg";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Testimonials() {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto  py-20">
        <Heading highlight="Customers" heading="Saying" />
        <div className="flex justify-end gap-3 mt-5 py-5">
          <button className="custom-prev text-2xl text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer rounded-lg  w-11 h-11 bg-zinc-100 flex justify-center items-center">
            <IoIosArrowBack />
          </button>f
          <button className="custom-next text-2xl text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer rounded-lg  w-11 h-11 bg-zinc-100 flex justify-center items-center">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide key={item.id} className="bg-zinc-100 p-8 rounded-lg">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover outline-2 outline-orange-500 outline-offset-4"
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.Profession}</p>
                    <span className="flex text-yellow-400 mt-4 text-xl gap-1 ">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar key={index} />
                      ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Cards */}
      </div>
    </section>
  );
}

export default Testimonials;

const review = [
  {
    id: 1,
    name: " Emily Johnson",
    Profession: "Food Blogger",
    rating: 3.5,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    Profession: "Chef",
    rating: 4.2,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    Profession: "Model",
    rating: 3,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer3,
  },
  {
    id: 4.9,
    name: " Carlos Mendes",
    Profession: "Fitness Coach",
    rating: 4,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer4,
  },

  {
    id: 5,
    name: "Natcha",
    Profession: "Nutritionist",
    rating: 5,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer5,
  },
];
