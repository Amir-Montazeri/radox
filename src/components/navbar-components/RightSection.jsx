import { Button, Grid, Typography } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowSize from "hooks/useWindowSize";
import Input from "./Input";
import {
  containerStyles,
  registerContainerStyles,
  menuIconContainerStyles,
  loginContainerStyles,
  buttonTextContainer,
} from "./rightSectionStyles";

const RightSection = () => {
  const { innerWidth } = useWindowSize();

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
      <Grid item>{innerWidth >= 701 ? <Input /> : <div>Res</div>}</Grid>
      <Grid item sx={menuIconContainerStyles}>
        <GiHamburgerMenu color="#EE5D25" />
      </Grid>
    </Grid>
  );
};

export default RightSection;
