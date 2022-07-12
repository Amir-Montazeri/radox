import { Grid, Typography } from "@mui/material";
import { containerStyles, titleStyles } from "./renderedHeaderStyles";

const RenderedHeaderItems = ({ items }) =>
  items?.map((item) => {
    return (
      <Grid item sx={{ ...item.styles, ...containerStyles }} key={item.id}>
        <Typography variant="body1" component="h3" sx={titleStyles}>
          {item.title}
        </Typography>
      </Grid>
    );
  });

export default RenderedHeaderItems;
