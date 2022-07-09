import "swiper/css";
import "./swiperStyles.css";
import { Swiper } from "swiper/react";

const SwiperComponent = ({ children }) => {
  return <Swiper className="mySwiper">{children}</Swiper>;
};

export default SwiperComponent;
