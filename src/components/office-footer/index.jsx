import { Grid, Button } from "@mui/material";
import {
  buttonStyles,
  containerStyles,
  iconsContainerStyles,
} from "./officeFooter";
import facebookIcon from "assets/icons/facebook.svg";
import telegramIcon from "assets/icons/telegram.svg";
import instagramIcon from "assets/icons/instagram.svg";

const OfficeFooter = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={containerStyles}
    >
      <Grid item>
        <Button sx={buttonStyles}>ذخیره</Button>
      </Grid>
      <Grid item sx={iconsContainerStyles}>
        <img src={facebookIcon} alt="facebook" />
        <img src={telegramIcon} alt="telegram" />
        <img src={instagramIcon} alt="instagram" />
      </Grid>
    </Grid>
  );
};

export default OfficeFooter;
