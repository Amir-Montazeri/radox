import { Grid } from "@mui/material";

function RegisterTextfieldFooter({ children }) {
  return (
    <Grid container justifyContent="space-between">
      {children}
    </Grid>
  );
}

export default RegisterTextfieldFooter;
