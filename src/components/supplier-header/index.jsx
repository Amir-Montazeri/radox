import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import {
  activeItemContainerStyles,
  containerStyles,
  itemsContainerStyles,
  textFieldStyles,
} from "./officeHeaderStyles";
import RenderedItems from "./RenderedItems";

const text = [
  {
    placeholder: "تره بار",
    name: "tarebar",
  },
  {
    placeholder: "پروتین",
    name: "prot",
  },
  {
    placeholder: "بهداشتی",
    name: "beh",
  },
];

function SupplierHeader({ data = text }) {
  const [selectedItem, setSelectedItem] = useState(data[0].name),
    [addNewItem, setAddNewItem] = useState(null);
  const activeStyles = selectedItem === "" ? activeItemContainerStyles : {};

  return (
    <Box sx={containerStyles} component="ul">
      <RenderedItems
        items={data}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      {!addNewItem ? (
        <Box
          sx={{ ...itemsContainerStyles, ...activeStyles }}
          component="li"
          onClick={() => {
            setSelectedItem("");
            setAddNewItem("نام دسته جدید");
          }}
        >
          <Typography variant="body1" component="p">
            اضافه کردن دسته جدید
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{ ...itemsContainerStyles, ...activeStyles }}
          component="li"
          onClick={() => setSelectedItem("")}
        >
          <TextField
            placeholder="نام دسته جدید"
            sx={textFieldStyles}
            required={selectedItem ? false : true}
            fullWidth
          />
        </Box>
      )}
    </Box>
  );
}

export default SupplierHeader;
