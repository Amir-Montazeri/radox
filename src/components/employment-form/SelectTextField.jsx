import { TextField, MenuItem } from "@mui/material";
import { textFieldsStyles } from "./renderedTextFieldsStyles";

const SelectTextField = ({ name, selectorItems, selected, setSelected }) => {
  const handelChange = (e) => {
    setSelected({ [name]: e.target.value });
  };
  const renderedSelection = (items) =>
    items?.map(({ id, title }) => {
      return (
        <MenuItem key={id || title} value={id}>
          {title}
        </MenuItem>
      );
    });

  return (
    <TextField
      select
      value={selected[name] || "loading"}
      onChange={handelChange}
      sx={textFieldsStyles}
    >
      {renderedSelection(selectorItems)}
    </TextField>
  );
};

export default SelectTextField;
