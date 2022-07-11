import { Grid, TextField } from "@mui/material";
import { containerStyles, textFieldStyles } from "./renderedTextFieldsStyles";

const RenderedTextFields = ({ items, values, setValue }) => {
  const handleTextFieldChanged = (data) => {
    const { value, name } = data.target;
    setValue({ ...values, [name]: value });
  };

  return items.map(({ visibility, disabled = false, data }) =>
    data.map(
      ({
        name,
        placeholder,
        type,
        required = false,
        pattern,
        min,
        max,
        icon,
      }) => (
        <Grid
          container
          justifyContent="center"
          key={name}
          sx={{
            ...containerStyles,
            visibility,
          }}
        >
          <Grid item>
            <TextField
              name={name}
              value={values[name] ?? ""}
              onChange={handleTextFieldChanged}
              placeholder={placeholder}
              inputProps={{ pattern, min, max }}
              required={required}
              type={type}
              disabled={disabled}
              sx={textFieldStyles}
            />
          </Grid>
          <Grid item>
            <img src={icon} alt={name} height="100%" />
          </Grid>
        </Grid>
      )
    )
  );
};

export default RenderedTextFields;
