import { useState } from "react";
import { Box } from "@mui/material";
import { AuthComponents, EmploymentForm } from "components";
import { formContainerStyles } from "./employmentStyles";
import { titles, sectionsBasedOnTitle } from "./titlesData";

const SmScreen = () => {
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
        <EmploymentForm
          header={sectionsBasedOnTitle[selectedPage].header || null}
          textFieldItems={sectionsBasedOnTitle[selectedPage].textFieldItems}
          footer={sectionsBasedOnTitle[selectedPage].footer}
        />
      </AuthComponents>
    </Box>
  );
};

export default SmScreen;
