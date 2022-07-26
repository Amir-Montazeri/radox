import { useState } from "react";
import { Box } from "@mui/material";
import {
  AuthComponents,
  EmploymentForm,
  EmploymentTable,
  OfficeFooter,
} from "components";
import { formContainerStyles } from "./employmentStyles";
import { titles } from "./titlesData";
import { PersonalFooter } from "components";
import { officeTextFields } from "./formData";

const SmScreen = ({
  personalTextFields,
  selectingValue,
  setSelectingsValue,
}) => {
  const [selectedPage, setSelectedPage] = useState(titles[0].value);

  return (
    <Box sx={formContainerStyles}>
      <AuthComponents
        titles={titles}
        activeTitle={selectedPage}
        onChangeActiveTitle={(newValue) => setSelectedPage(newValue)}
        styles={{
          width: "672px",
          maxWidth: "95vw",
          height: "auto",
          minHeight: "478px",
        }}
      >
        {selectedPage === "personal" ? (
          <EmploymentForm
            textFieldItems={personalTextFields}
            selectingValue={selectingValue}
            setSelectingsValue={setSelectingsValue}
            footer={<PersonalFooter />}
          />
        ) : (
          <EmploymentTable
            textFieldItems={officeTextFields}
            footer={<OfficeFooter />}
          />
        )}
      </AuthComponents>
    </Box>
  );
};

export default SmScreen;
