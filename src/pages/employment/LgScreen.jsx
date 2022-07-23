import { Box } from "@mui/material";
import {
  AuthComponents,
  EmploymentForm,
  PersonalFooter,
  OfficeHeader,
  OfficeFooter,
  EmploymentTable,
} from "components";
import { formContainerStyles } from "./employmentStyles";
import { officeTextFields } from "./formData";

const LgScreen = ({ personalTextFields }) => {
  // console.log("personalTextFields: ", personalTextFields);
  return (
    <>
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
          <EmploymentTable
            header={<OfficeHeader />}
            textFieldItems={officeTextFields}
            footer={<OfficeFooter />}
          />
        </AuthComponents>
      </Box>
    </>
  );
};

export default LgScreen;
