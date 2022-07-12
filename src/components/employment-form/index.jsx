import { Grid } from "@mui/material";
import { textFeildsContainerStyles } from "./employmentFormStyles";
import RenderedTextFieldsItems from "./RenderedTextFieldsItems";

const EmploymentForm = ({ header, textFieldItems, footer }) => {
  const renderedTextFields = (items) =>
    items?.map(({ items, id }) => {
      return (
        <Grid container key={id} sx={textFeildsContainerStyles}>
          <RenderedTextFieldsItems items={items} />
        </Grid>
      );
    });

  return (
    <Grid container flexDirection="column" sx={{ padding: "20px 50px" }}>
      <Grid item>{header}</Grid>
      <Grid item>{renderedTextFields(textFieldItems)}</Grid>
      <Grid item>{footer}</Grid>
    </Grid>
  );
};

export default EmploymentForm;
