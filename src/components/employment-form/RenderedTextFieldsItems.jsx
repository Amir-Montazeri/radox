import { Grid, TextField } from "@mui/material";
import {
  containerStyles,
  fullWidthStyles,
  textFieldsStyles,
} from "./renderedTextFieldsStyles";

const RenderedTextFieldsItems = ({ items }) => {
  console.log(items);
  const fullWidth = items.length === 1 ? fullWidthStyles : "";
  console.log(fullWidth);
  return items?.map(({ inputProps, icon, id }) => {
    return (
      <Grid item key={id} sx={{ ...containerStyles, ...fullWidth }}>
        <TextField {...inputProps} sx={{ ...textFieldsStyles, ...fullWidth }} />
        <img src={icon} alt={inputProps?.name} width="22px" />
      </Grid>
    );
  });
};

export default RenderedTextFieldsItems;
