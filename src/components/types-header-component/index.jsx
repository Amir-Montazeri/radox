import { Box, Grid, Typography } from "@mui/material";
import RenderedType from "./RenderedType";
import {
  containerStyles,
  titleStyles,
  itemsContainerStyles,
} from "./typesHeaderStyles";

const TypesHeaderComponent = ({ types, selected, add, remove }) => {
  const renderedItems = (items) =>
    items?.map(({ items, id }) => (
      <Grid container justifyContent="center" key={id}>
        <RenderedType
          key={id}
          items={items}
          selected={selected}
          add={add}
          remove={remove}
        />
      </Grid>
    ));

  return (
    <Box sx={containerStyles}>
      <Typography variant="h6" color="#fff" sx={titleStyles}>
        گزینه استخدامی مورد نظر را انتخاب کنید
      </Typography>
      <Grid container>
        <Grid item sx={itemsContainerStyles}>
          {renderedItems(types)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TypesHeaderComponent;
