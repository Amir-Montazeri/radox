import { Grid } from "@mui/material";
import RenderedItems from "./RenderedItems";

const text = [
  {
    work_position: "گارسون",
    organization: "رستوران کیان",
    year: "3",
    month: "8",
    salary: "5",
    reason_of_quit: "همینجوری",
    id: 0,
  },
  {
    work_position: "گارسون",
    organization: "رستوران کیان",
    year: "3",
    month: "8",
    salary: "5",
    reason_of_quit: "همینجوری",
    id: 1,
  },
];

function OfficeHeader({ data = text }) {
  return (
    <Grid container justifyContent="space-between">
      <RenderedItems items={data} />
    </Grid>
  );
}

export default OfficeHeader;
