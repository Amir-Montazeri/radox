import { Grid } from "@mui/material";
import { EmploymentHeader } from "components";
import { containerStyles } from "./employmentStyles";
import { usualItems } from "./headerItemsData";

function Employment() {
  return (
    <Grid container sx={containerStyles}>
      <EmploymentHeader headerItems={usualItems} avatarUrl={""} />
    </Grid>
  );
}

export default Employment;
