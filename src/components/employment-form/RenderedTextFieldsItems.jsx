import { useEffect, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import jMoment from "moment-jalaali";
import moment from "moment";
import AdapterJalali from "@date-io/date-fns-jalali";
import TypeTextField from "./FileTextField";
import {
  containerStyles,
  fullWidthStyles,
  iconContainerStyles,
  textFieldsStyles,
} from "./renderedTextFieldsStyles";
import SelectTextField from "./SelectTextField";
import { format } from "date-fns-jalali";

const selectItems = [];

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

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
      date: (
        <LocalizationProvider dateAdapter={AdapterJalali}>
          <DatePicker
            mask="____/__/__"
            value={selectsSelectedValue["birth_day"]}
            onChange={(newValue) => {
              setSelectsSelectedValue({
                birth_day: new Date(newValue).toISOString().split("T")[0],
              });
            }}
            renderInput={(params) => (
              <TextField
                sx={{
                  ...textFieldsStyles,
                  ...fullWidth,
                  height: "100%",
                  bgcolor: "#F2F2F2!important",
                  fieldset: {
                    // bgcolor: "#F2F2F2!important",
                  },
                }}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
      ),
    };
    return types[type];
  };

  const defaultInput = (inputProps) => {
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
