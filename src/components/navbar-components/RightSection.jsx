import { Button, Grid, Typography } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import Input from "./Input";
import {
  containerStyles,
  registerContainerStyles,
  menuIconContainerStyles,
  loginContainerStyles,
  buttonTextContainer,
} from "./rightSectionStyles";

const RightSection = () => {
  return (
    <Grid container sx={containerStyles}>
      <Grid item sx={registerContainerStyles}>
        <Button>
          <Typography variant="body1" component="span" sx={buttonTextContainer}>
            عضویت
          </Typography>
        </Button>
      </Grid>
      <Grid item sx={loginContainerStyles}>
        <Button>
          <Typography variant="body1" component="span" sx={buttonTextContainer}>
            ورود کاربر
          </Typography>
        </Button>
      </Grid>
      <Grid item>
        <Input />
      </Grid>
      <Grid item sx={menuIconContainerStyles}>
        <GiHamburgerMenu color="#EE5D25" />
      </Grid>
    </Grid>
  );
};

export default RightSection;
