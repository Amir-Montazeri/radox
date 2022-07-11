export const containerStyles = {
  padding: "15px",
  width: "35vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
  "@media screen and (max-width: 810px)": {
    position: "absolute",
    top: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100vw",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly",
    zIndex: 3,
  },
};
