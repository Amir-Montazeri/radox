import { Grid, Typography } from "@mui/material";
import {
  containerStyles,
  iconContainerStyles,
  titleStyles,
} from "./itemStyles";

export const Item = ({ title, iconAsImg }) => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      sx={containerStyles}
    >
      <Grid item>
        <Typography variant="h6" component="h3" sx={titleStyles}>
          {title}
        </Typography>
      </Grid>
      <Grid item sx={iconContainerStyles}>
        <img src={iconAsImg} alt={title} height="100%" />
      </Grid>
    </Grid>
  );
};
