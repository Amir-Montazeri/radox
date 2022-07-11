import { Grid, TextField } from "@mui/material";
import { containerStyles, textFieldStyles } from "./renderedTextFieldsStyles";

const RenderedTextFields = ({ items, values, setValue }) => {
  const handleTextFieldChanged = (data) => {
    const { value, name } = data.target;
    setValue({ ...values, [name]: value });
  };

  return items.map(({ name, placeholder, type, icon }) => (
    <Grid container justifyContent="center" key={name} sx={containerStyles}>
      <Grid item>
        <TextField
          name={name}
          value={values[name] ?? ""}
          onChange={handleTextFieldChanged}
          placeholder={placeholder}
          type={type}
          sx={textFieldStyles}
        />
      </Grid>
      <Grid item>
        <img src={icon} alt={name} height="100%" />
      </Grid>
    </Grid>
  ));
};

export default RenderedTextFields;
