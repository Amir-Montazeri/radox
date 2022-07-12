import { Grid } from "@mui/material";
import RenderedTextFieldsItems from "./RenderedTextFieldsItems";

const EmploymentForm = ({ header, textFieldItems, footer }) => {
  const renderedTextFields = (items) =>
    items?.map(({ items, id }) => {
      return (
        <Grid container key={id}>
          <RenderedTextFieldsItems items={items} />
        </Grid>
      );
    });

  return (
    <Grid container flexDirection="column">
      <Grid item>{header}</Grid>
      <Grid item>{renderedTextFields(textFieldItems)}</Grid>
      <Grid item>{footer}</Grid>
    </Grid>
  );
};

export default EmploymentForm;
