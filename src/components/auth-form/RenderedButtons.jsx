import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { containerStyles } from "./renderedButtonsStyles";

const RenderedButtons = ({ items }) => {
  const navigate = useNavigate();

  return items.map(
    ({ title, type, color, bgcolor, width, navigateOnClicked }) => {
      const extraProps = navigateOnClicked
        ? { onClick: () => navigate(navigateOnClicked.to) }
        : {};

      return (
        <Button
          key={title}
          type={type}
          sx={{ ...containerStyles, width, color, bgcolor }}
          {...extraProps}
        >
          <Typography variant="h6" component="span">
            {title}
          </Typography>
        </Button>
      );
    }
  );
};
export default RenderedButtons;
