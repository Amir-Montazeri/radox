import { Button } from "@mui/material";

const RenderedButtons = ({ items }) =>
  items.map(({ title, type, color, bgcolor, width }) => {
    return (
      <Button key={title} type={type} sx={{ width, color, bgcolor }}>
        {title}
      </Button>
    );
  });

export default RenderedButtons;
