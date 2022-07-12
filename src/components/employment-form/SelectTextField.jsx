import { TextField, MenuItem } from "@mui/material";
import { textFieldsStyles } from "./renderedTextFieldsStyles";
import { useState } from "react";

const SelectTextField = ({ selectorItems }) => {
  const [selected, setSelected] = useState(selectorItems[0].value);

  const handelChange = (e) => {
    setSelected(e.target.value);
  };

  const renderedSelection = (items) =>
    items.map(({ value, title }) => {
      return (
        <MenuItem key={value} value={value}>
          {title}
        </MenuItem>
      );
    });

  return (
    <TextField
      select
      value={selected}
      onChange={handelChange}
      sx={textFieldsStyles}
    >
      {renderedSelection(selectorItems)}
    </TextField>
  );
};

export default SelectTextField;
