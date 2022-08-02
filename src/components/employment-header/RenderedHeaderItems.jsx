import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { containerStyles, titleStyles } from "./renderedHeaderStyles";

const RenderedHeaderItems = ({ items }) => {
  const navigate = useNavigate();

  const handleClickEvent = (event) => {
    switch (event.order) {
      case "navigate":
        return { onClick: () => navigate(event.to) };
      default:
        break;
    }
  };

  return items?.items?.map((item) => {
    const eventHandler = (events) => {
      let props = {};
      events?.map((event) => {
        switch (event.event) {
          case "click":
            props = { ...props, ...handleClickEvent(event) };
            break;
          default:
            console.log("called!");
            break;
        }
        return null;
      });
      return props;
    };

    console.log(eventHandler(item.events));

    return (
      <Grid
        item
        sx={{ ...item.styles, ...containerStyles }}
        key={item.id}
        {...eventHandler(item.events)}
      >
        <Typography variant="body1" component="h3" sx={titleStyles}>
          {item.title}
        </Typography>
      </Grid>
    );
  });
};

export default RenderedHeaderItems;
