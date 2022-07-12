import { Box, Grid, TextField } from "@mui/material";
import {
  containerStyles,
  fullWidthStyles,
  iconContainerStyles,
  textFieldsStyles,
} from "./renderedTextFieldsStyles";
import SelectTextField from "./SelectTextField";

const RenderedTextFieldsItems = ({ items }) => {
  const fullWidth = items.length === 1 ? fullWidthStyles : "";

  const inputTypes = (type, inputProps) => {
    const types = {
      select: <SelectTextField selectorItems={inputProps.selectItems} />,
    };
    return types[type];
  };

  const defaultInput = (inputProps) => (
    <TextField {...inputProps} sx={{ ...textFieldsStyles, ...fullWidth }} />
  );

  return items?.map(({ inputProps, icon, id }) => {
    return (
      <Grid item key={id} sx={{ ...containerStyles, ...fullWidth }}>
        {inputTypes(inputProps?.type, inputProps) || defaultInput(inputProps)}
        <Box sx={iconContainerStyles}>
          <img src={icon} alt={inputProps?.name} width="100%" height="100%" />
        </Box>
      </Grid>
    );
  });
};

export default RenderedTextFieldsItems;
