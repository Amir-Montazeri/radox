import { MenuItem, TextField } from "@mui/material";
import React from "react";

function RenderedSelect({ title, selectItems, selected, setSelected }) {
  const renderedMenuItem = (items) =>
    items?.map((item) => {
      return <MenuItem value={item.id}>{item.name}</MenuItem>;
    });

  return (
    <TextField
      select
      label={title}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      {selectItems && renderedMenuItem(selectItems)}
      {!selectItems && <MenuItem value="loading">loading...</MenuItem>}
    </TextField>
  );
}

export default RenderedSelect;
