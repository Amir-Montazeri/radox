export const containerStyles = {
    width: "100%",
    height: "100%",
    backdropFilter: "blur(5px)",
  },
  contentStyles = {
    display: "flex",
    flexDirection: "column",
  },
  contentEnd = {
    justifyContent: "flex-end",
  },
  contentCenter = {
    justifyContent: "center",
    "> button": {
      marginLeft: "5px",
      cursor: "pointer",
    },
  },
  notActiveTitleStyles = {
    background: "#969696",
    ":hover": {
      background: "#969696",
    },
  },
  titleContainerStyles = {
    width: "130px",
    height: "47px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#EE5D25",
    color: "#fff",
    borderRadius: "4px",
    borderBottomRightRadius: "0 !important",
    borderBottomLeftRadius: "0 !important",
    ":hover": {
      background: "#EE5D25",
    },
  },
  formContainerStyles = {
    height: "400px",
    width: "370px",
    background: "#fff",
    boxShadow: "0 0 13px -5px #000",
  };
