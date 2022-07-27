import { Grid, Typography } from "@mui/material";
import {
  editContainerStyles,
  itemsContainerStyles,
  rtlDirection,
} from "./officeHeaderStyles";

const RenderedItems = ({ items }) =>
  items?.map((item) => {
    return (
      <Grid item key={item.name} sx={itemsContainerStyles}>
        <Typography
          variant="h5"
          component="h3"
          color="#EE5D25"
          sx={rtlDirection}
        >
          {item.name}
        </Typography>
        <Typography sx={rtlDirection}>
          نوع تحویل:{" "}
          {item.type_of_delivery
            .replace("free", "رایگان")
            .replace("monetary", "هزینه دار")}
        </Typography>
        <Typography sx={rtlDirection}>قیمت: {item.price} تومان</Typography>
        <Typography sx={rtlDirection}>تعداد: {item.unit}</Typography>
        <Typography sx={rtlDirection}>توضیحات: {item.description}</Typography>
        <Typography
          variant="body1"
          component="span"
          color="#EE5D25"
          sx={editContainerStyles}
        >
          ویرایش
        </Typography>
      </Grid>
    );
  });

export default RenderedItems;
