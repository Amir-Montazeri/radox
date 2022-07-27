import { Box } from "@mui/material";
import {
  AuthComponents,
  EmploymentForm,
  PersonalFooter,
  OfficeFooter,
  SupplierHeader,
  OfficeHeader,
} from "components";
import { formContainerStyles } from "./employmentStyles";
import { officeTextFields } from "./formData";

const LgScreen = ({
  personalTextFields,
  selectingValue,
  setSelectingsValue,
  officeSelectingValue,
  setOfficeSelectingsValue,
  productsData,
}) => {
  return (
    <>
      <Box sx={formContainerStyles}>
        <AuthComponents
          title="اطلاعات تامین کننده"
          styles={{ width: "672px", height: "auto", minHeight: "478px" }}
        >
          <EmploymentForm
            textFieldItems={personalTextFields}
            selectingValue={selectingValue}
            setSelectingsValue={setSelectingsValue}
            apiPath="accounts/supplier/info/"
            footer={<PersonalFooter />}
          />
        </AuthComponents>
      </Box>
      <Box sx={formContainerStyles}>
        <AuthComponents
          title="ثبت محصول"
          styles={{
            width: "672px",
            height: "auto",
            minHeight: "478px",
            marginBottom: "20px",
          }}
        >
          <EmploymentForm
            header={<OfficeHeader data={productsData} />}
            // header={
            //   <OfficeHeader
            //     data={[
            //       {
            //         work_position: "گارسون",
            //         organization: "رستوران کیان",
            //         year: "3",
            //         month: "8",
            //         salary: "5",
            //         reason_of_quit: "همینجوری",
            //         id: 0,
            //       },
            //       {
            //         work_position: "گارسون",
            //         organization: "رستوران کیان",
            //         year: "3",
            //         month: "8",
            //         salary: "5",
            //         reason_of_quit: "همینجوری",
            //         id: 1,
            //       },
            //     ]}
            //   />
            // }
            body={
              <SupplierHeader
                selectingValue={officeSelectingValue}
                setSelectingsValue={setOfficeSelectingsValue}
              />
            }
            selectingValue={officeSelectingValue}
            setSelectingsValue={(data) => {
              setOfficeSelectingsValue(data);
              console.log("setOfficeSelectingsValue", setOfficeSelectingsValue);
            }}
            textFieldItems={officeTextFields}
            apiPath="market/products/"
            footer={<OfficeFooter />}
          />
        </AuthComponents>
      </Box>
    </>
  );
};

export default LgScreen;
