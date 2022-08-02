import { Grid } from "@mui/material";
import { api_url } from "api";
import axios from "axios";
import { getItem } from "lcoalStorage";
import { useForm } from "react-hook-form";
import { textFeildsContainerStyles } from "./employmentFormStyles";
import RenderedTextFieldsItems from "./RenderedTextFieldsItems";

const EmploymentForm = ({
  header,
  body,
  selectingValue,
  setSelectingsValue,
  textFieldItems,
  apiPath = "accounts/work/info/",
  footer,
}) => {
  // const [selectingValue, setSelectingsValue] = useState({});
  const { register, handleSubmit } = useForm();
  const renderedTextFields = (fields) =>
    fields?.map((item) => {
      const { items, id } = item[0];
      return (
        <Grid container key={id} sx={textFeildsContainerStyles}>
          <RenderedTextFieldsItems
            items={items}
            register={register}
            selectsSelectedValue={selectingValue}
            setSelectsSelectedValue={(data) => {
              setSelectingsValue({ ...selectingValue, ...data });
            }}
          />
        </Grid>
      );
    });

  const onFormSubmited = (e) => {
    const access = getItem("access");
    axios
      .post(
        api_url + apiPath,
        {
          ...selectingValue,
          ...e,
        },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .then((res) => {
        console.log("suc: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <Grid
      container
      flexDirection="column"
      sx={{ padding: "20px 50px" }}
      component="form"
      onSubmit={handleSubmit(onFormSubmited)}
    >
      <Grid item>{header}</Grid>
      <Grid item>{body}</Grid>
      <Grid item>{renderedTextFields(textFieldItems)}</Grid>
      <Grid item>{footer}</Grid>
    </Grid>
  );
};

export default EmploymentForm;
