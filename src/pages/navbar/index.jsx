import { Grid } from "@mui/material";
import { containerStyles } from "./navbarStyles";
import { NavbarComponents } from "components";

const Navbar = () => {
  return (
    <Grid container sx={containerStyles}>
      <NavbarComponents />
    </Grid>
  );
};

export default Navbar;
