import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
import { getItem, removeItem } from "lcoalStorage";

function Employment() {
  const navigate = useNavigate();
  const { innerWidth } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const [selectingValue, setSelectingsValue] = useState({});
  const [statesData, setStatesData] = useState();
  const [citiesData, setCitiesData] = useState({});
  const [debouncedPersonalTextFields, setDebouncedPersonalTextFields] =
    useState({
      personalTextFields01,
      personalTextFields02,
      personalTextFields03,
      personalTextFields04,
      personalTextFields05,
      personalTextFields06,
    });

  console.log("selectingValue", selectingValue);

  const updateCityAndState = (type, data) => {
    switch (type) {
      case "state":
        setStatesData(data);
        break;
      case "city":
        !citiesData[selectingValue.state] &&
          setCitiesData((prevState) => ({
            ...prevState,
            [citiesData[selectingValue.state]]: { data },
          }));
        break;
      default:
        return;
    }

    setDebouncedPersonalTextFields((prevState) => ({
      ...prevState,
      personalTextFields03: [
        {
          items: [
            {
              inputProps: {
                name: "city",
                placeholder: "شهر",
                type: "select",
                selectItems:
                  type === "city" ? data : [{ title: '"loading..."' }],
              },
              icon: genderIcon,
              id: 5,
            },
            {
              inputProps: {
                name: "state",
                placeholder: "استان",
                type: "select",
                selectItems: type === "state" ? data : statesData,
              },
              icon: nationalityIcon,
              id: 4,
            },
          ],
          id: 2,
        },
      ],
    }));
  };

  useEffect(() => {
    const access = getItem("access");
    isLoading &&
      axios
        .get(`${process.env.REACT_APP_BASE_API_LINK}accounts/work/info/`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        })
        .then((res) => {
          if (res.data.code === 1) {
            console.log("mmd: ", res.data.data);
            setIsLoading(false);
            setSelectingsValue(res.data.data);
          } else if (res.data.code === -1) {
            console.log("err");
          }
        })
        .catch((err) => {
          const { response } = err;
          if (response.status === 401) {
            removeItem("access");
            removeItem("refresh");
            navigate("/auth/login");
          }
          console.log("err: ", response);
        });

    axios
      .get(`${process.env.REACT_APP_BASE_API_LINK}locations/state/`)
      .then((res) => {
        const { data } = res;
        updateCityAndState("state", data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectingValue.state) {
      if (citiesData[selectingValue.state]) {
        updateCityAndState("city", citiesData[selectingValue.state]);
      } else {
        axios
          .get(
            `${process.env.REACT_APP_BASE_API_LINK}locations/state/${selectingValue.state}/`
          )
          .then((res) => {
            const { data } = res;
            console.log(data);
            updateCityAndState("city", data.citys);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectingValue.state]);

  const handleValueChanged = (data) => {
    console.log("data: ", data);
    setSelectingsValue(data);
  };

  return (
    !isLoading && (
      <Box>
        <Grid container sx={headerContainerStyles}>
          <EmploymentHeader headerItems={usualItems} avatarUrl={""} />
        </Grid>
        {innerWidth >= 720 ? (
          <LgScreen
            selectingValue={selectingValue}
            setSelectingsValue={handleValueChanged}
            personalTextFields={Object.values(debouncedPersonalTextFields)}
          />
        ) : (
          // <SmScreen />
          <div>not</div>
        )}
      </Box>
    )
  );
}

export default Employment;
