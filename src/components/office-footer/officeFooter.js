export const containerStyles = {
    marginTop: "20px",
    "@media screen and (max-width: 720px)": {
      flexDirection: "column-reverse",
      justifyContent: "center",
    },
  },
  buttonStyles = {
    marginLeft: "10px",
    width: "205.43px",
    height: "47.36px",
    fontSize: "18px",
    bgcolor: "#EE5D25",
    color: "#fff",
    ":hover": {
      background: "#EE5D25 !important",
    },
  },
  iconsContainerStyles = {
    width: "30%",
    display: "flex",
    justifyContent: "space-evenly",
    "> img": {
      cursor: "pointer",
    },
    "@media screen and (max-width: 720px)": {
      marginBottom: "10px",
      width: "280px",
    },
  };
