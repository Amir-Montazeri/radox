import { useState } from "react";
import axios from "axios";
import {
  AuthComponents,
  AuthForm,
  RegisterFooter,
  RegisterTextfieldFooter,
} from "components";
import { Home } from "pages";
import TextFieldsFooter from "./TextFieldsFooter";
import { buttonItems, textFieldItems } from "./sampleDatas";

const Register = () => {
  const [selectedType, setSelectedType] = useState(null);
  const textFieldfooter = (
    <RegisterTextfieldFooter>
      <TextFieldsFooter setTypeValue={setSelectedType} />
    </RegisterTextfieldFooter>
  );

  const handleSubmit = (data) => {
    const { username, phoneNumber } = data;
    axios
      .post(`${process.env.REACT_APP_BASE_API_LINK}`, {
        username,
        phoneNumber,
        type: selectedType,
      })
      .then((res) => {
        console.log("success! ", res);
      })
      .catch((err) => {
        console.log("err! ", err);
      });
  };

  return (
    <Home>
      <AuthComponents title="عضو جدید">
        <AuthForm
          textFieldItems={textFieldItems}
          textFieldFooters={textFieldfooter}
          buttonItems={buttonItems}
          footer={<RegisterFooter />}
          formSubmited={handleSubmit}
        />
      </AuthComponents>
    </Home>
  );
};

export default Register;
