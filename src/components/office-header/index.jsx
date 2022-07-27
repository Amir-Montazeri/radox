import { Grid } from "@mui/material";
import { containerStyles } from "./officeHeaderStyles";
import RenderedItems from "./RenderedItems";

function OfficeHeader({ data }) {
  return (
    <Grid container sx={containerStyles}>
      <RenderedItems items={data} />
    </Grid>
  );
}

export default OfficeHeader;
