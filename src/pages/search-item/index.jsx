import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  buttonStyles,
  containerStyles,
  formContainerStyles,
  PrettoSlider,
} from "./searchItemStyles";
import { toPersianNumber } from "functions/convertNumber";
import RenderedTextFieldsItems from "components/employment-form/RenderedTextFieldsItems";
import { formTextFieldsData } from "./data";

const marks = [
    {
      value: 0,
      label: "۰ تومان",
    },
    {
      value: 25,
      label: "۲۵ میلیون",
    },
    {
      value: 50,
      label: "۵۰ میلیون",
    },
  ],
  min = 0,
  max = 50;

function valueLabelFormat(value) {
  return `${toPersianNumber(value)} میلیون`;
}

function SearchItem() {
  const { register, handleSubmit } = useForm();
  const [rangeValue, setRangeValue] = useState([min, max]);

  const handleRangeChange = (event, newValue) => {
    setRangeValue(newValue);
  };

  const handleFormSubmit = (data) => {
    console.log({ ...data });
  };

  return (
    <Box sx={containerStyles}>
      <Grid
        container
        flexDirection="row-reverse"
        justifyContent="space-evenly"
        alignItems="center"
        sx={formContainerStyles}
        onSubmit={handleSubmit(handleFormSubmit)}
        component="form"
      >
        <RenderedTextFieldsItems
          items={formTextFieldsData}
          extraStyles={{ width: "auto !important" }}
          register={register}
          onChangedSelected={() => {}}
        />
        <Grid
          item
          sx={{
            width: 300,
            margin: "0 20px",
            ".css-747b58-MuiSlider-markLabel": { direction: "rtl" },
          }}
        >
          <PrettoSlider
            getAriaLabel={() => "Price range"}
            value={rangeValue}
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            marks={marks}
            min={min}
            max={max}
          />
        </Grid>
        <Grid item>
          <Button type="submit" sx={buttonStyles}>
            جستجو
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchItem;
