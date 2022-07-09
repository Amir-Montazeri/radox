import { Grid } from "@mui/material";
import { containerStyles } from "./navbarStyles";
import { NavbarComponents, ResNavInput } from "components";
import useWindowSize from "hooks/useWindowSize";

const Navbar = () => {
  const { innerWidth } = useWindowSize();

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-evenly"
      sx={containerStyles}
    >
      <Grid item>
        <Grid container justifyContent="space-evenly" alignItems="center">
          <NavbarComponents />
        </Grid>
      </Grid>
      {innerWidth <= 730 && <ResNavInput />}
    </Grid>
  );
};

export default Navbar;
