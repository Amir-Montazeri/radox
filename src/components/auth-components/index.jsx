import { Grid, Box, Typography, Button } from "@mui/material";
import {
  containerStyles,
  contentEnd,
  contentCenter,
  contentStyles,
  titleContainerStyles,
  formContainerStyles,
  notActiveTitleStyles,
} from "./authComponentsStyles";

function AuthComponents({
  children,
  styles = {},
  title,
  titles,
  activeTitle,
  onChangeActiveTitle,
}) {
  const containerExtraStyles = title ? contentEnd : titles ? contentCenter : {};

  const renderedTitle = (items) =>
    items.map(({ title, value }) => {
      const active = activeTitle === value ? {} : notActiveTitleStyles;

      return (
        <Button
          sx={{ ...titleContainerStyles, ...active }}
          key={value}
          onClick={() => onChangeActiveTitle(value)}
        >
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
        </Button>
      );
    });

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={containerStyles}
    >
      <Grid item sx={contentStyles}>
        <Grid container sx={containerExtraStyles}>
          {titles ? (
            renderedTitle(titles)
          ) : (
            <Box sx={titleContainerStyles}>
              <Typography variant="h6" component="h3">
                {title}
              </Typography>
            </Box>
          )}
        </Grid>
        <Box sx={{ ...formContainerStyles, ...styles }}>{children}</Box>
      </Grid>
    </Grid>
  );
}

export default AuthComponents;
