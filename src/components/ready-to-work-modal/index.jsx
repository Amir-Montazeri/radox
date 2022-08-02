import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { api_url } from "api";
import axios from "axios";
import { Modal } from "components";
import { getItem } from "lcoalStorage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BootstrapInput } from "./readyToWorkStyles";
import RenderedSelect from "./RenderedSelect";

function ReadyToWorkModal() {
  const navigate = useNavigate();
  const access = getItem("access");
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [subCategories, setSubCategories] = useState();

  useEffect(() => {
    axios
      .get(`${api_url}accounts/work/category/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedCategory && !subCategories?.selectedCategory) {
      axios
        .get(`${api_url}accounts/work/category/${selectedCategory}/`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        })
        .then((res) => {
          const { data } = res;
          setSubCategories({ [selectedCategory]: data });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <Modal open={true} handleClose={() => navigate("/supplier")}>
      <Box component="form">
        <Grid container alignItems="center" justifyContent="space-evenly">
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="سیگاری هستم" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="بیمه میخوام" />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          component="form"
        >
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="جای خواب میخوام" />
          </Grid>
          <Grid item sx={{ width: "100px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">شیفت کاری</InputLabel>
              <Select label="شیفت کاری">
                <MenuItem value="morning">صبح</MenuItem>
                <MenuItem value="noon">ظهر</MenuItem>
                <MenuItem value="evining">عصر</MenuItem>
                <MenuItem value="full_time">تمام وقت</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          component="form"
        >
          <Grid item>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">دسته بندی</InputLabel>
              <RenderedSelect
                title="شیفت کاری"
                selectItems={categories}
                selected={selectedCategory}
                setSelected={setSelectedCategory}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">زیردسته</InputLabel>
              <RenderedSelect title="شیفت کاری" selectItems={subCategories} />
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          component="form"
        >
          <Grid item>
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="demo-customized-textbox">حقوق</InputLabel>
              <BootstrapInput />
            </FormControl>
          </Grid>
        </Grid>
        <Button type="submit">ذخیره</Button>
      </Box>
    </Modal>
  );
}

export default ReadyToWorkModal;

//   "work_category",
//   "work_subcategory";
