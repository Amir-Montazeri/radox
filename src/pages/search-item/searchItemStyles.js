import { Slider, styled } from "@mui/material";

export const containerStyles = {
    paddingBottom: "50px",
    width: "100vw",
    height: "284px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    bgcolor: "#EE5D25",
  },
  formContainerStyles = {
    padding: "30px 15px",
    width: "90%",
    minWidth: "340px",
    bgcolor: "#fff",
  },
  PrettoSlider = styled(Slider)({
    color: "#EE5D25",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      padding: "15px",
      lineHeight: 1.2,
      fontSize: 11,
      background: "unset",
      // padding: 0,
      width: 50,
      height: 50,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#EE5D25",
      border: "1px solid #fff",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      direction: "rtl",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
    "& .css-9mmyd8-MuiSlider-markLabel": {
      direction: "rtl",
    },
  }),
  buttonStyles = {
    height: "55px",
    width: "100px",
    color: "#fff",
    bgcolor: "#EE5D25",
    ":hover": {
      bgcolor: "#EE5D25",
    },
  };
