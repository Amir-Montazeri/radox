import { Grid } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { SwiperComponent } from "components";
import { containerStyles } from "./rightSectionStyles";

const config = {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};

const RightSection = () => {
  return (
    <Grid item sx={containerStyles}>
      <SwiperComponent {...config}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </SwiperComponent>
    </Grid>
  );
};

export default RightSection;
