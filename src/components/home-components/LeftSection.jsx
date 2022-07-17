import { Box, Grid } from "@mui/material";
import { Item } from "./Item";
import { containerStyles } from "./leftSectionStyles";
import employment from "assets/icons/employment.svg";
import rawMaterial from "assets/icons/raw-material.svg";
import supplier from "assets/icons/supplier.svg";
import readyToWork from "assets/icons/ready-to-work.svg";

const LeftSection = () => {
  return (
    <Grid item sx={containerStyles}>
      <Box>
        <Item title="استخدام" iconAsImg={employment} />
        <Item title=" آماده به کار" iconAsImg={rawMaterial} />
      </Box>
      <Box>
        <Item title="بازار مواد اولیه" iconAsImg={supplier} />
        <Item title="عضویت" iconAsImg={readyToWork} />
      </Box>
    </Grid>
  );
};

export default LeftSection;
