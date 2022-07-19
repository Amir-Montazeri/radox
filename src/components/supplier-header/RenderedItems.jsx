import { Box, Typography } from "@mui/material";
import {
  itemsContainerStyles,
  activeItemContainerStyles,
} from "./officeHeaderStyles";

const RenderedItems = ({ items, selectedItem, setSelectedItem }) => {
  return items.map((item) => {
    const activeStyles =
      selectedItem === item.name ? activeItemContainerStyles : {};
    return (
      <Box
        key={item.name}
        sx={{ ...itemsContainerStyles, ...activeStyles }}
        component="li"
        onClick={() => setSelectedItem(item.name)}
      >
        <Typography variant="body1" component="p">
          {item.placeholder}
        </Typography>
      </Box>
    );
  });
};

export default RenderedItems;
