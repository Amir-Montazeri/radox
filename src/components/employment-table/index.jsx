import { useState } from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const EmploymentTable = ({ header, textFieldItems, footer }) => {
  const [selectingValue, setSelectingsValue] = useState({});

  const onFormSubmited = (e) => {
    console.log({ ...e, ...selectingValue });
  };

  return (
    <Grid
      container
      flexDirection="column"
      sx={{ padding: "20px 50px" }}
      component="form"
      onSubmit={onFormSubmited}
    >
      <Grid item>{header}</Grid>
      <Grid
        item
        sx={{
          maxWidth: "100%",
          scrollbarWidth: "thin",
          "*": { scrollbarWidth: "thin" },
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ direction: "rtl", "*": { textAlign: "right" } }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">گروه شغلی</TableCell>
                <TableCell align="right">مجموعه</TableCell>
                <TableCell align="right">مدت همکاری</TableCell>
                <TableCell align="right">سمت</TableCell>
                <TableCell align="right">میزان حقوق</TableCell>
                <TableCell align="right">دلیل خروج</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="right">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item>{footer}</Grid>
    </Grid>
  );
};

export default EmploymentTable;
