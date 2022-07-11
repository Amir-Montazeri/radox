import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { containerStyles } from "./authFormStyles";
import RenderedButtons from "./RenderedButtons";
import RenderedTextFields from "./RenderedTextFields";

const AuthForm = ({
  textFieldItems,
  textFieldFooters,
  buttonItems,
  footer,
  formSubmited,
}) => {
  const [innerValue, setInnerValues] = useState({});

  useEffect(() => {
    for (const item in textFieldItems) {
      setInnerValues((prevState) => ({
        ...prevState,
        [textFieldItems[item]["name"]]: "",
      }));
    }
  }, [textFieldItems]);

  const submitHandeler = (e) => {
    e.preventDefault();
    formSubmited(innerValue);
  };

  return (
    <Box component="form" onSubmit={submitHandeler} sx={containerStyles}>
      <RenderedTextFields
        values={innerValue}
        setValue={setInnerValues}
        items={textFieldItems}
      />
      {textFieldFooters}
      <RenderedButtons items={buttonItems} />
      {footer}
    </Box>
  );
};

export default AuthForm;
