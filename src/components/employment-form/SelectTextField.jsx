import { TextField, MenuItem } from "@mui/material";
import { textFieldsStyles } from "./renderedTextFieldsStyles";

const SelectTextField = ({ name, selectorItems, selected, setSelected }) => {
  const handelChange = (e) => {
    setSelected({ [name]: e.target.id });
  };
  // console.log("selected state: ", selected);
  const renderedSelection = (items) =>
    items.map(({ id, title, name }) => {
      // console.log(title, ": ", id);
      return (
        <MenuItem key={id} value={id}>
          {title || name}
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
