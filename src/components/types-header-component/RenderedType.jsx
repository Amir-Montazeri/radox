import { Grid, Typography } from "@mui/material";
import { containerStyles, selectedStyles } from "./renderedTypesStyles";

const RenderedType = ({ items, selected = [], add, remove }) =>
  items?.map(({ title, iconUrl }) => {
    const isSelected = selected.some((selectes) => selectes === title),
      extraStyles = isSelected ? selectedStyles : {};

    return (
      <Grid
        item
        key={title}
        sx={{ ...containerStyles, ...extraStyles }}
        onClick={() => (isSelected ? remove(title) : add(title))}
      >
        <Typography variant="h6" component="p">
          {title}
        </Typography>
        <img src={iconUrl} alt={title} />
      </Grid>
    );
  });

export default RenderedType;
