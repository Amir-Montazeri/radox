import { Grid } from "@mui/material";
import { HomeComponents } from "components";
import { containerStyles } from "./homeStyles";

const Home = () => {
  return (
    <Grid container sx={containerStyles}>
      <HomeComponents />
    </Grid>
  );
};

export default Home;
