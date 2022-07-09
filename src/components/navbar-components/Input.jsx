import { InputAdornment, TextField } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { containerStyles, iconStyles } from "./inputStyles";

const Input = () => {
  return (
    <TextField
      id="search-input"
      sx={containerStyles}
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
