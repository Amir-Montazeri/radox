import { Grid, Typography } from "@mui/material";
import {
  editContainerStyles,
  itemsContainerStyles,
  rtlDirection,
} from "./officeHeaderStyles";

const RenderedItems = ({ items }) =>
  items.map((item) => {
    return (
      <Grid item key={item.id} sx={itemsContainerStyles}>
        <Typography component="h3" color="#EE5D25" sx={rtlDirection}>
          <Typography variant="h5" component="span">
            {item.work_position}
          </Typography>{" "}
          <Typography variant="h6" component="span">
            در
          </Typography>{" "}
          <Typography variant="h5" component="span">
            {item.organization}
          </Typography>
        </Typography>
        <Typography sx={rtlDirection}>
          <Typography variant="body1" component="span">
            مدت فعالیت:
          </Typography>{" "}
          <Typography variant="body1" component="span">
            {item.year}
          </Typography>{" "}
          <Typography variant="body1" component="span">
            سال
          </Typography>{" "}
          <Typography variant="body1" component="span">
            {item.month}
          </Typography>{" "}
          <Typography variant="body1" component="span">
            ماه
          </Typography>
        </Typography>
        <Typography sx={rtlDirection}>
          <Typography variant="body1" component="span">
            حقوق دریافتی:
          </Typography>{" "}
          <Typography variant="body1" component="span">
            {item.salary}
          </Typography>{" "}
          <Typography variant="body1" component="span">
            میلیون تومان
          </Typography>
        </Typography>
        <Typography sx={rtlDirection}>
          <Typography variant="body1" component="span">
            خروج به دلیل
          </Typography>{" "}
          <Typography variant="body1" component="span">
            {item.reason_of_quit}
          </Typography>
        </Typography>
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
