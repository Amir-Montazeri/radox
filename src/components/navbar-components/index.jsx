import { Grid } from "@mui/material";
import { containerStyles } from "./navbarComponentsStyles";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const NavbarComponents = () => {
  return (
    <>
      <Grid item>
        <LeftSection />
      </Grid>
      <Grid item>
        <RightSection />
      </Grid>
    </>
  );
};

export default NavbarComponents;
