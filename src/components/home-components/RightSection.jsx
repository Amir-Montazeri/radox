import { Box, Button, Grid, Typography } from "@mui/material";
import { Autoplay } from "swiper";
import { SwiperSlide } from "swiper/react";
import { SwiperComponent } from "components";
import {
  containerStyles,
  slidesImgStyles,
  containerOnSliderStyles,
  introContainerStyles,
  introTitleStyles,
  introContentStyles,
  introBtnStyles,
  childrenContainerStyles,
} from "./rightSectionStyles";
import { slidesItems } from "./sampleSwiperItems";

const config = {
  spaceBetween: 50,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
};

const RightSection = ({ children, isDragged = false }) => {
  const renderedSlides = (items) =>
    items.map(({ id, bgLink }) => {
      return (
        <SwiperSlide key={id}>
          <Box
            sx={{
              background: `url(${bgLink})`,
              ...slidesImgStyles,
            }}
          ></Box>
        </SwiperSlide>
      );
    });

  return (
    <Grid item sx={containerStyles}>
      <SwiperComponent swiperConfig={config}>
        {renderedSlides(slidesItems)}
      </SwiperComponent>
      <Box sx={{ ...containerOnSliderStyles, ...introContainerStyles }}>
        <Typography
          variant="h3"
          component="h1"
          color="#E3CDF9"
          sx={introTitleStyles}
        >
          آرادوکس
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="#fff"
          sx={introContentStyles}
        >
          شبکه ارتباطی بزرگ خدمات تهیه غذا در استان تهران
        </Typography>
        <Button sx={introBtnStyles}>بیشتر بدانیم</Button>
      </Box>
      {(children || isDragged) && (
        <Box sx={{ ...containerOnSliderStyles, ...childrenContainerStyles }}>
          {children}
        </Box>
      )}
    </Grid>
  );
};

export default RightSection;
