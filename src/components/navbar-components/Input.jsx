import { InputAdornment, TextField } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { containerStyles, iconStyles } from "./inputStyles";

const Input = ({ inputWidth }) => {
  return (
    <TextField
      id="search-input"
      sx={{
        ...containerStyles,
        ".css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root": {
          width: inputWidth || "184px",
          height: "40px",
          borderRadius: "0 !important",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={iconStyles}>
            <BsSearch color="#707070" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
