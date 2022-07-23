import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import { EmploymentHeader } from "components";
import useWindowSize from "hooks/useWindowSize";
import { headerContainerStyles } from "./employmentStyles";
import { usualItems } from "./headerItemsData";
import LgScreen from "./LgScreen";
// import SmScreen from "./SmScreen";
import genderIcon from "assets/icons/gender.svg";
import nationalityIcon from "assets/icons/nationality.svg";
import {
  personalTextFields01,
  personalTextFields02,
  personalTextFields03,
  personalTextFields04,
  personalTextFields05,
  personalTextFields06,
} from "./formData";

function Employment() {
  const { innerWidth } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const [debouncedPersonalTextFields, setDebouncedPersonalTextFields] =
    useState({
      personalTextFields01,
      personalTextFields02,
      personalTextFields03,
      personalTextFields04,
      personalTextFields05,
      personalTextFields06,
    });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_LINK}locations/state/`)
      .then((res) => {
        const { data } = res;
        setDebouncedPersonalTextFields((prevState) => ({
          ...prevState,
          personalTextFields03: [
            {
              items: [
                {
                  inputProps: {
                    name: "state",
                    placeholder: "استان",
                    type: "select",
                    selectItems: [
                      {
                        title: "loading...",
                      },
                    ],
                  },
                  icon: nationalityIcon,
                  id: 4,
                },
                {
                  inputProps: {
                    name: "city",
                    placeholder: "شهر",
                    type: "select",
                    selectItems: data,
                  },
                  icon: genderIcon,
                  id: 5,
                },
              ],
              id: 2,
            },
          ],
        }));
      });
  }, []);

  return (
    <Box>
      <Grid container sx={headerContainerStyles}>
        <EmploymentHeader headerItems={usualItems} avatarUrl={""} />
      </Grid>
      {innerWidth >= 720 ? (
        <LgScreen
          personalTextFields={Object.values(debouncedPersonalTextFields)}
        />
      ) : (
        // <SmScreen />
        <div>not</div>
      )}
    </Box>
  );
}

export default Employment;
