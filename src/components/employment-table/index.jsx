import { useEffect, useState } from "react";
import {
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import axios from "axios";
import { getItem } from "lcoalStorage";
import { useForm } from "react-hook-form";
import { newResumeTextFieldsStyles } from "./employmentTableStyles";
import { api_url } from "api";

const EmploymentTable = ({ header, textFieldItems, footer }) => {
  const { register, handleSubmit } = useForm();
  const [rows, setRows] = useState();
  const [newResume, setNewResume] = useState(null);
  const [categories, setCategories] = useState(null);
  const access = getItem("access");

  useEffect(() => {
    axios
      .get(`${api_url}accounts/resume/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => {
        setRows(res.data);
      });

    !categories &&
      axios
        .get(`${api_url}accounts/work/category/`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        })
        .then((res) => {
          const { data } = res;
          setCategories(data);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFormSubmited = (e) => {
    axios
      .post(
        `${api_url}accounts/resume/`,
        {
          ...e,
        },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .then((res) => {
        setRows(res.data);
      });
  };

  const handleAddNewResume = () => {
    !newResume &&
      setNewResume({
        work_category: "",
        organization: "",
        year: "",
        month: "",
        work_position: "",
        salary: "",
        reason_of_quit: "",
      });
  };

  return (
    rows &&
    categories && (
      <Grid
        container
        flexDirection="column"
        sx={{ padding: "20px 50px" }}
        component="form"
        onSubmit={handleSubmit(onFormSubmited)}
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
                  <TableCell align="center" sx={{ minWidth: "120px" }}>
                    گروه شغلی
                  </TableCell>
                  <TableCell align="center">مجموعه</TableCell>
                  <TableCell align="center">مدت همکاری(ماه)</TableCell>
                  <TableCell align="center">مدت همکاری(سال)</TableCell>
                  <TableCell align="center">سمت</TableCell>
                  <TableCell align="center">میزان حقوق</TableCell>
                  <TableCell align="center">دلیل خروج</TableCell>
                  {!newResume && (
                    <TableCell align="center">افزودن رزومه جدید</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => {
                  const category = categories?.filter(
                    (item) => item.id === row.work_category
                  )[0];
                  const isLastOne = row.id === rows.length;

                  return (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {category?.name}
                      </TableCell>
                      <TableCell align="center">{row.organization}</TableCell>
                      <TableCell align="center">{row.month}</TableCell>
                      <TableCell align="center">{row.year}</TableCell>
                      <TableCell align="center">{row.work_position}</TableCell>
                      <TableCell align="center">{row.salary}</TableCell>
                      <TableCell align="center">{row.reason_of_quit}</TableCell>
                      {!newResume && (
                        <TableCell
                          align="center"
                          sx={{ cursor: "pointer" }}
                          onClick={handleAddNewResume}
                        >
                          {isLastOne && "+"}
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
                {newResume && (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "th, td": { padding: "16px 9px !important" },
                    }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      <TextField
                        sx={newResumeTextFieldsStyles}
                        select
                        fullWidth
                        required
                        placeholder="گروه شغلی"
                        {...register("work_category")}
                      >
                        {categories.map((category) => {
                          return (
                            <MenuItem value={category.id} key={category.id}>
                              {category.name}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        sx={newResumeTextFieldsStyles}
                        required
                        fullWidth
                        placeholder="مجموعه"
                        {...register("organization")}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        sx={newResumeTextFieldsStyles}
                        fullWidth
                        required
                        placeholder="مدت همکاری(ماه)"
                        {...register("month")}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        sx={newResumeTextFieldsStyles}
                        fullWidth
                        required
                        placeholder="مدت همکاری(سال)"
                        {...register("year")}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        sx={newResumeTextFieldsStyles}
                        required
                        fullWidth
                        placeholder="سمت"
                        {...register("work_position")}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        sx={newResumeTextFieldsStyles}
                        fullWidth
                        required
                        placeholder="میزان حقوق"
                        {...register("salary")}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        sx={newResumeTextFieldsStyles}
                        fullWidth
                        required
                        placeholder="دلیل خروج"
                        {...register("reason_of_quit")}
                      />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item>{footer}</Grid>
      </Grid>
    )
  );
};

export default EmploymentTable;
