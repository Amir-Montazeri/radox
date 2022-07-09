import { Grid, Typography } from "@mui/material";
import { containerStyles } from "./itemStyles";

export const Item = ({ title, iconAsImg }) => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      sx={containerStyles}
    >
      <Grid item>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <img src={iconAsImg} alt={title} />
      </Grid>
    </Grid>
  );
};
