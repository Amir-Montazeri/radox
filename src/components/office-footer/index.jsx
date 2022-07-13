import { Box, Button } from "@mui/material";
import { buttonStyles, containerStyles } from "./officeFooter";

const OfficeFooter = () => {
  return (
    <Box container alignItems="center" sx={containerStyles}>
      <Button sx={buttonStyles}>ذخیره</Button>
    </Box>
  );
};

export default OfficeFooter;
