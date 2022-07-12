import { Box, Grid } from "@mui/material";
import { AuthComponents, EmploymentHeader, EmploymentForm } from "components";
import { headerContainerStyles, formContainerStyles } from "./employmentStyles";
import { personalTextFields } from "./formData";
import { usualItems } from "./headerItemsData";

function Employment() {
  return (
    <Box>
      <Grid container sx={headerContainerStyles}>
        <EmploymentHeader headerItems={usualItems} avatarUrl={""} />
      </Grid>
      <Box sx={formContainerStyles}>
        <AuthComponents
          title="اطلاعات فردی"
          styles={{ width: "672px", height: "478px" }}
        >
          <EmploymentForm textFieldItems={personalTextFields} />
        </AuthComponents>
      </Box>
    </Box>
  );
}

export default Employment;
