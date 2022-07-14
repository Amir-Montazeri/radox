import { Box, Grid, Typography } from "@mui/material";
import {
  containerStyles,
  titleStyles,
  itemsContainerStyles,
} from "./typesHeaderStyles";

const TypesHeaderComponent = ({ types }) => {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h6" color="#fff" sx={titleStyles}>
        گزینه استخدامی مورد نظر را انتخاب کنید
      </Typography>
      <Grid container>
        <Grid item sx={itemsContainerStyles}></Grid>
      </Grid>
    </Box>
  );
};

export default TypesHeaderComponent;
