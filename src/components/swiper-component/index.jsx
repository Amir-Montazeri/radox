import "swiper/css";
import "./swiperStyles.css";
import { Swiper } from "swiper/react";

const SwiperComponent = ({ children, swiperConfig }) => {
  return (
    <Swiper {...swiperConfig} className="mySwiper">
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
