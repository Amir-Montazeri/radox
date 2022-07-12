import { Grid, TextField } from "@mui/material";
import { containerStyles } from "./renderedTextFieldsStyles";

const RenderedTextFieldsItems = ({ items }) => {
  console.log(items);
  return items?.map(({ name, placeholder, type, icon, id }) => {
    return (
      <Grid item key={id} sx={containerStyles}>
        <TextField placeholder={placeholder} />
        <img src={icon} alt={name} />
      </Grid>
    );
  });
};

export default RenderedTextFieldsItems;
