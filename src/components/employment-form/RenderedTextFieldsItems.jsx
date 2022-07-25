import { Box, Grid, TextField } from "@mui/material";
import { useEffect } from "react";
import TypeTextField from "./FileTextField";
import {
  containerStyles,
  fullWidthStyles,
  iconContainerStyles,
  textFieldsStyles,
} from "./renderedTextFieldsStyles";
import SelectTextField from "./SelectTextField";

const selectItems = [];

const RenderedTextFieldsItems = ({
  items,
  register,
  extraStyles = {},
  selectsSelectedValue,
  setSelectsSelectedValue,
}) => {
  // const [selectedValue, setSelectedValue] = useState(selectItems[0].value);
  // const [selectsSelectedValue, setSelectsSelectedValue] = useState({});
  const fullWidth = items.length === 1 ? fullWidthStyles : "";

  useEffect(() => {
    let defaultStateValue = {};
    for (const i in items) {
      const { type, name, selectItems } = items[i].inputProps;
      if (type === "select") {
        defaultStateValue = { ...defaultStateValue, [name]: selectItems[0].id };
      }
    }
    // console.log("defaultStateValue: ", defaultStateValue);
    setSelectsSelectedValue(defaultStateValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputTypes = (type, inputProps) => {
    const types = {
      select: (
        <SelectTextField
          name={inputProps.name}
          selectorItems={inputProps.selectItems}
          selected={selectsSelectedValue}
          setSelected={(data) => {
            setSelectsSelectedValue(data);
          }}
        />
      ),
      file: (
        <TypeTextField
          name={inputProps.name}
          setValue={(data) => {
            setSelectsSelectedValue((prevState) => ({
              ...prevState,
              ...data,
            }));
          }}
        />
      ),
    };
    return types[type];
  };

  const defaultInput = (inputProps) => {
    // console.log("inputProps: ", inputProps);
    return (
      <TextField
        {...inputProps}
        defaultValue={selectsSelectedValue[inputProps.name]}
        {...register(inputProps.name)}
        sx={{ ...textFieldsStyles, ...fullWidth }}
      />
    );
  };

  return items?.map(({ inputProps, icon, id }) => {
    return (
      <Grid
        item
        key={id}
        sx={{ ...containerStyles, ...fullWidth, ...extraStyles }}
      >
        {inputTypes(inputProps?.type, inputProps) || defaultInput(inputProps)}
        {icon && (
          <Box sx={iconContainerStyles}>
            <img src={icon} alt={inputProps?.name} width="100%" height="100%" />
          </Box>
        )}
      </Grid>
    );
  });
};

export default RenderedTextFieldsItems;
