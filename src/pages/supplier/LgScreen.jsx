import { Box } from "@mui/material";
import {
  AuthComponents,
  EmploymentForm,
  PersonalFooter,
  OfficeFooter,
  SupplierHeader,
} from "components";
import { formContainerStyles } from "./employmentStyles";
import { officeTextFields } from "./formData";

const LgScreen = ({
  personalTextFields,
  selectingValue,
  setSelectingsValue,
}) => {
  return (
    <>
      <Box sx={formContainerStyles}>
        <AuthComponents
          title="اطلاعات تامین کننده"
          styles={{ width: "672px", height: "auto", minHeight: "478px" }}
        >
          <EmploymentForm
            textFieldItems={personalTextFields}
            selectingValue={selectingValue}
            setSelectingsValue={setSelectingsValue}
            apiPath="accounts/supplier/info/"
            footer={<PersonalFooter />}
          />
        </AuthComponents>
      </Box>
      {/* <Box sx={formContainerStyles}>
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
      </Box> */}
    </>
  );
};

export default LgScreen;
