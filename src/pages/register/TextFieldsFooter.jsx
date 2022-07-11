import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { selectItems } from "./sampleDatas";

const TextFieldsFooter = ({ setTypeValue }) => {
  const [selectedValue, setSelectedValue] = useState(selectItems[0].value);

  useEffect(() => {
    setTypeValue(selectedValue);
  }, [selectedValue]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const renderedItems = (items) =>
    items.map(({ title, value }) => (
      <FormControlLabel
        key={value}
        value={value}
        control={<Radio />}
        label={title}
      />
    ));

  return (
    <RadioGroup
      row
      value={selectedValue}
      onChange={handleChange}
      sx={{ direction: "rtl", display: "flex" }}
    >
      {renderedItems(selectItems)}
    </RadioGroup>
  );
};

export default TextFieldsFooter;
