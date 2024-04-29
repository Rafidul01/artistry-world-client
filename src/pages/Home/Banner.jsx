import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
  const bannerText = (
    <div>
      <h1 className=" md:text-5xl text-white font-extrabold md:w-[750px] text-center text-opacity-100 font-roboto">
            <span className="text-[#973e12]">Artistry</span> World <br />
            <span className="md:text-3xl"><Typewriter
            words={['Where Every Stroke Tells a Story', 'Discover the Magic of Handcrafted Beauty', 'Crafting Moments, Creating Memories', 'Transforming Ideas into Works of Art!']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span>
      </h1>
      
    </div>
  );
  return (
    <div className="mt-2 z-0">
      <Swiper
        style={{
          "--swiper-navigation-color": "#973e12",
          "--swiper-pagination-color": "#973e12",
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/9n5mXKC/tine-hvolby-yj-ZY-s-Dl1r-M-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center  rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r  from-gray-900 p-4  rounded-2xl w-full h-full flex justify-center items-center">
              {bannerText}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/0tJKGKJ/laura-adai-c7u-t1-PZEbg-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-gray-900 p-4  rounded-2xl w-full h-full flex justify-center items-center">
              {bannerText}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/ckPXBrB/jennie-razumnaya-Xbcf-TH69a-Ac-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-gray-900 p-4  rounded-2xl w-full h-full flex justify-center items-center">
              {bannerText}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/LYvzVnW/jennie-razumnaya-eu-Zf-WU-nb-O8-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-gray-900 p-4  rounded-2xl w-full h-full flex justify-center items-center">
              {bannerText}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/b74Mb05/laura-adai-ix-KRU2t-Mb-Ts-unsplash.jpg')] w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center">
            <div className="bg-gradient-to-r from-gray-900 p-4  rounded-2xl w-full h-full flex justify-center items-center">
                {bannerText}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
