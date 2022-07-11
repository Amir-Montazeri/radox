export const containerStyles = {
    position: "relative",
    width: "65vw",
    "@media screen and (max-width: 810px)": {
      width: "100vw",
    },
  },
  slidesImgStyles = {
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    zIndex: 3,
  },
  containerOnSliderStyles = {
    position: "absolute !important",
    top: 0,
    height: "100%",
    width: "100%",
    zIndex: 4,
  },
  introContainerStyles = {
    direction: "rtl",
    right: "50%",
    top: "50%",
    transform: "translate(14%, -5%)",
    height: "auto",
    width: "289px !important",
    "@media screen and (max-width: 810px)": {
      width: "212px !important",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      transform: "translate(50%, -25%)",
    },
  },
  introTitleStyles = {
    marginBottom: "20px",
  },
  introContentStyles = {
    marginBottom: "40px",
    "@media screen and (max-width: 810px)": {
      marginBottom: "18vh",
    },
  },
  introBtnStyles = {
    width: "120px",
    color: "#fff",
    background: "#EE5D25",
    fontSize: "1rem",
    ":hover": {
      background: "#EE5D25",
    },
  },
  childrenContainerStyles = {
    backdropFilter: "blur(5px)",
  };
