import { Button, Grid, TextField } from "@mui/material";
import {
  buttonStyles,
  containerStyles,
  textFieldStyles,
} from "./typesFooterStyles";

const TypesFooterComponent = () => {
  return (
    <Grid container sx={containerStyles}>
      <Grid item>
        <Button type="submit" sx={buttonStyles}>
          ذخیره
        </Button>
      </Grid>
      <Grid item>
        <TextField
          type="number"
          required
          inputProps={{ min: 2 }}
          name="min_cv"
          placeholder="تعداد رزومه"
          sx={textFieldStyles}
        />
      </Grid>
    </Grid>
  );
};

export default TypesFooterComponent;
