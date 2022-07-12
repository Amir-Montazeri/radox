import { Grid, Box, Typography } from "@mui/material";
import {
  containerStyles,
  contentStyles,
  titleContainerStyles,
  formContainerStyles,
} from "./authComponentsStyles";

function AuthComponents({ children, styles = {}, title }) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={containerStyles}
    >
      <Grid item sx={contentStyles}>
        <Box sx={titleContainerStyles}>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
        </Box>
        <Box sx={{ ...formContainerStyles, ...styles }}>{children}</Box>
      </Grid>
    </Grid>
  );
}

export default AuthComponents;
