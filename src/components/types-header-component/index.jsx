import { Box, Grid, Typography } from "@mui/material";
import RenderedType from "./RenderedType";
import {
  containerStyles,
  titleStyles,
  itemsContainerStyles,
  contentStyles,
} from "./typesHeaderStyles";

const TypesHeaderComponent = ({ types, selected, add, remove }) => {
  const renderedItems = (items) =>
    items?.map(({ items, id }) => (
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        sx={contentStyles}
        key={id}
      >
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
      <Box sx={itemsContainerStyles}>{renderedItems(types)}</Box>
    </Box>
  );
};

export default TypesHeaderComponent;
