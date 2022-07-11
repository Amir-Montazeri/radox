import { Grid } from "@mui/material";
import { HomeComponents } from "components";
import { containerStyles } from "./homeStyles";

const Home = ({ children }) => {
  return (
    <Grid container sx={containerStyles}>
      <HomeComponents children={children || null} />
    </Grid>
  );
};

export default Home;
