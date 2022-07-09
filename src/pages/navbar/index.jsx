import { Grid } from "@mui/material";
import { containerStyles } from "./navbarStyles";
import { NavbarComponents } from "components";

const Navbar = () => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      sx={containerStyles}
    >
      <NavbarComponents />
    </Grid>
  );
};

export default Navbar;
