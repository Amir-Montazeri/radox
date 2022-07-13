import { Box, Grid } from "@mui/material";
import { EmploymentHeader } from "components";
import useWindowSize from "hooks/useWindowSize";
import { headerContainerStyles } from "./employmentStyles";
import { usualItems } from "./headerItemsData";
import LgScreen from "./LgScreen";
import SmScreen from "./SmScreen";

function Employment() {
  const { innerWidth } = useWindowSize();

  return (
    <Box>
      <Grid container sx={headerContainerStyles}>
        <EmploymentHeader headerItems={usualItems} avatarUrl={""} />
      </Grid>
      {innerWidth >= 720 ? <LgScreen /> : <SmScreen />}
    </Box>
  );
}

export default Employment;
