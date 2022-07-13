import { Grid } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { textFeildsContainerStyles } from "./employmentFormStyles";
import RenderedTextFieldsItems from "./RenderedTextFieldsItems";

const EmploymentForm = ({ header, textFieldItems, footer }) => {
  const [selectingValue, setSelectingsValue] = useState({});
  const { register, handleSubmit } = useForm();

  const renderedTextFields = (items) =>
    items?.map(({ items, id }) => {
      return (
        <Grid container key={id} sx={textFeildsContainerStyles}>
          <RenderedTextFieldsItems
            items={items}
            register={register}
            onChangedSelected={(data) => setSelectingsValue(data)}
          />
        </Grid>
      );
    });

  const onFormSubmited = (e) => {
    console.log({ ...e, ...selectingValue });
  };

  return (
    <Grid
      container
      flexDirection="column"
      sx={{ padding: "20px 50px" }}
      component="form"
      onSubmit={handleSubmit(onFormSubmited)}
    >
      <Grid item>{header}</Grid>
      <Grid item>{renderedTextFields(textFieldItems)}</Grid>
      <Grid item>{footer}</Grid>
    </Grid>
  );
};

export default EmploymentForm;
