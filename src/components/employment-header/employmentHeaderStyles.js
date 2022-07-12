export const headerContainerStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse !important",
    justifyContent: "center !important",
    "@media screen and (max-width: 720px)": {
      width: "50%",
      justifyContent: "space-between !important",
      flexDirection: "column !important",
    },
    "@media screen and (max-width: 470px)": {
      width: "65%",
    },
  },
  avatarContainerStyles = {
    width: "50%",
    display: "flex !important",
    justifyContent: "center",
    "@media screen and (max-width: 720px)": {
      justifyContent: "center",
      alignItems: "center",
    },
    "@media screen and (max-width: 470px)": {
      width: "35%",
    },
  },
  avatarStyles = {
    width: "104px",
    height: "104px",
    color: "#707070",
    bgcolor: "#fff",
    cursor: "pointer",
    "@media screen and (max-width: 720px)": {
      width: "144px",
      height: "144px",
    },
    "@media screen and (max-width: 470px)": {
      width: "124px",
      height: "124px",
    },
  };
