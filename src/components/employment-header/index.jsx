import { Avatar, Grid } from "@mui/material";
import {
  avatarContainerStyles,
  headerContainerStyles,
  avatarStyles,
} from "./employmentHeaderStyles";
import RenderedHeaderItems from "./RenderedHeaderItems";

const EmploymentHeader = ({ headerItems, avatarUrl }) => {
  const renderedContainers = (items) =>
    items.map((item) => {
      return (
        <Grid
          container
          flexDirection="row-reverse"
          justifyContent="space-evenly"
          key={item.id}
        >
          <RenderedHeaderItems items={item.items} />
        </Grid>
      );
    });

  return (
    <>
      <Grid item sx={headerContainerStyles}>
        {renderedContainers(headerItems)}
      </Grid>
      <Grid item sx={avatarContainerStyles}>
        <Avatar src={avatarUrl} sx={avatarStyles} />
      </Grid>
    </>
  );
};

export default EmploymentHeader;
