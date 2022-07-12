import { Grid } from "@mui/material";
import { EmploymentHeader } from "components";
import { containerStyles } from "./employmentStyles";

function Employment() {
  return (
    <Grid container flexWrap="wrap" sx={containerStyles}>
      <EmploymentHeader />
    </Grid>
  );
}

export default Employment;
