import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Grid item>
        <Typography variant="overline" component="span">
          مرا به خاطر بسپار
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="overline" component="span">
          <Link to="/auth/forget">فراموشی رمز عبور</Link>
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
