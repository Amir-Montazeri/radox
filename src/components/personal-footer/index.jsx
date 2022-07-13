import { Button, Grid, Typography } from "@mui/material";
import {
  buttonStyles,
  containerStyles,
  editTextStyles,
} from "./personalFooter";

const PersonalFooter = () => {
  return (
    <Grid container alignItems="center" sx={containerStyles}>
      <Grid item>
        <Typography variant="h6" component="p" sx={editTextStyles}>
          ویرایش
        </Typography>
      </Grid>
      <Grid item>
        <Button sx={buttonStyles}>ذخیره</Button>
      </Grid>
    </Grid>
  );
};

export default PersonalFooter;
