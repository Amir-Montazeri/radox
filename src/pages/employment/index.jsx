import { Box, Grid } from "@mui/material";
import {
  AuthComponents,
  EmploymentHeader,
  EmploymentForm,
  PersonalFooter,
  OfficeHeader,
  OfficeFooter,
} from "components";
import { headerContainerStyles, formContainerStyles } from "./employmentStyles";
import { personalTextFields, officeTextFields } from "./formData";
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
          styles={{ width: "672px", height: "auto", minHeight: "478px" }}
        >
          <EmploymentForm
            textFieldItems={personalTextFields}
            footer={<PersonalFooter />}
          />
        </AuthComponents>
      </Box>
      <Box sx={formContainerStyles}>
        <AuthComponents
          title="اطلاعات شغلی"
          styles={{
            width: "672px",
            height: "auto",
            minHeight: "478px",
            marginBottom: "20px",
          }}
        >
          <EmploymentForm
            header={<OfficeHeader />}
            textFieldItems={officeTextFields}
            footer={<OfficeFooter />}
          />
        </AuthComponents>
      </Box>
    </Box>
  );
}

export default Employment;
