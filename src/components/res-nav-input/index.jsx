import { Divider, Grid } from "@mui/material";
import Input from "components/navbar-components/Input";
import {
  resContainerStyles,
  resInputContainerStyles,
} from "./resNavInputStyles";

const ResNavInput = () => {
  return (
    <>
      <Grid item sx={resContainerStyles}>
        <Divider color="#C8C8C8" />
      </Grid>
      <Grid item sx={{ ...resContainerStyles, ...resInputContainerStyles }}>
        <Input inputWidth="100%" />
      </Grid>
    </>
  );
};

export default ResNavInput;
