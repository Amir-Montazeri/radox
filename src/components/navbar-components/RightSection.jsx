import { Button, Grid, Typography } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowSize from "hooks/useWindowSize";
import { Link } from "react-router-dom";
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
        <Link to="/auth/register">
          <Button>
            <Typography
              variant="body1"
              component="span"
              sx={buttonTextContainer}
            >
              عضویت
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item sx={loginContainerStyles}>
        <Link to="/auth/login">
          <Button>
            <Typography
              variant="body1"
              component="span"
              sx={buttonTextContainer}
            >
              ورود کاربر
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item>{innerWidth >= 730 && <Input />}</Grid>
      <Grid item sx={menuIconContainerStyles}>
        <GiHamburgerMenu color="#EE5D25" />
      </Grid>
    </Grid>
  );
};

export default RightSection;
