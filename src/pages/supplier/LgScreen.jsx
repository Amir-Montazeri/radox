import { Box } from "@mui/material";
import {
  AuthComponents,
  EmploymentForm,
  PersonalFooter,
  OfficeFooter,
  SupplierHeader,
} from "components";
import { formContainerStyles } from "./employmentStyles";
import { personalTextFields, officeTextFields } from "./formData";

const LgScreen = () => {
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
          title="اطلاعات تامین کننده"
          styles={{
            width: "672px",
            height: "auto",
            minHeight: "478px",
            marginBottom: "20px",
          }}
        >
          <EmploymentForm
            header={<SupplierHeader />}
            textFieldItems={officeTextFields}
            footer={<OfficeFooter />}
          />
        </AuthComponents>
      </Box>
    </>
  );
};

export default LgScreen;
