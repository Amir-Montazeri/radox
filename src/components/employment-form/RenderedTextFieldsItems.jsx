import { Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
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
  onChangedSelected,
}) => {
  const [selectedValue, setSelectedValue] = useState(selectItems[0].value);
  const [selectsSelectedValue, setSelectsSelectedValue] = useState({});
  const fullWidth = items.length === 1 ? fullWidthStyles : "";

  useEffect(() => {
    for (const i in items) {
      const { type, name, selectItems } = items[i].inputProps;
      if (type === "select") {
        setSelectsSelectedValue((prevState) => ({
          ...prevState,
          [name]: selectItems[0].value,
        }));
      }
    }
  }, []);

  useEffect(() => {
    onChangedSelected(selectsSelectedValue);
  }, [selectsSelectedValue]);

  const inputTypes = (type, inputProps) => {
    const types = {
      select: (
        <SelectTextField
          name={inputProps.name}
          selectorItems={inputProps.selectItems}
          selected={selectsSelectedValue}
          setSelected={(data) => {
            console.log({ ...data });
            setSelectsSelectedValue((prevState) => ({
              ...prevState,
              ...data,
            }));
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

  const defaultInput = (inputProps) => (
    <TextField
      {...inputProps}
      {...register(inputProps.name)}
      sx={{ ...textFieldsStyles, ...fullWidth }}
    />
  );

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
