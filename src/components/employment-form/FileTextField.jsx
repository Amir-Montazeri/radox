import { TextField } from "@mui/material";
import { textFieldsStyles } from "./renderedTextFieldsStyles";

const TypeTextField = ({ name, setValue }) => {
  const handelChange = (e) => {
    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) return;

    const objectUrl = URL.createObjectURL(fileObj);
    setValue({ [name]: { file: objectUrl, path: fileObj } });
  };

  return (
    <TextField type="file" onChange={handelChange} sx={textFieldsStyles}>
      hii
    </TextField>
  );
};

export default TypeTextField;
