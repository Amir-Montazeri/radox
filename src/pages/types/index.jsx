import { useState } from "react";
import { Box } from "@mui/material";
import { TypesFooterComponent, TypesHeaderComponent } from "components";
import { itemTypes } from "./types";
import { containerStyles } from "./typesStyles";
import typesBg from "assets/backgrounds/types-bg.svg";

const Types = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        ...containerStyles,
        backgroundImage: `url(${typesBg})`,
      }}
      component="form"
      onSubmit={handelSubmit}
    >
      <TypesHeaderComponent
        types={itemTypes}
        selected={selectedTypes}
        add={(newSelected) =>
          setSelectedTypes((prevState) => [...prevState, newSelected])
        }
        remove={(title) =>
          setSelectedTypes((prevState) =>
            prevState.filter((titles) => titles !== title)
          )
        }
      />
      <TypesFooterComponent />
    </Box>
  );
};

export default Types;
