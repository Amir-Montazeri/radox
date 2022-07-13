import { Button, Grid, Typography } from "@mui/material";
import {
  buttonStyles,
  containerStyles,
  editTextStyles,
} from "./personalFooter";

const PersonalFooter = () => {
  return (
    <Grid container alignItems="center" flexWrap="nowrap" sx={containerStyles}>
      <Grid item>
        <Typography variant="h6" component="p" sx={editTextStyles}>
          ویرایش
        </Typography>
      </Grid>
      <Grid item>
        <Button sx={buttonStyles} type="submit">
          ذخیره
        </Button>
      </Grid>
    </Grid>
  );
};

export default PersonalFooter;
