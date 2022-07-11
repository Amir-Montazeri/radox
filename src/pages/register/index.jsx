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
import { buttonItems, renderOnCodeSent, textFieldItems } from "./sampleDatas";

const Register = () => {
  const [codeSent, setCodeSent] = useState(false),
    [selectedType, setSelectedType] = useState(null);
  const extraTextFields = codeSent ? renderOnCodeSent : [],
    textFieldfooter = (
      <RegisterTextfieldFooter>
        <TextFieldsFooter setTypeValue={setSelectedType} />
      </RegisterTextfieldFooter>
    );

  const handelSendingCode = (data) => {
    const { phone_number } = data;
    setCodeSent(true);
    axios
      .post(`${process.env.REACT_APP_BASE_API_LINK}`, {
        phone_number,
      })
      .then((res) => {
        if (res.code === "1") {
          setCodeSent(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
          textFieldItems={[
            {
              status: "oke",
              disabled: codeSent ? true : false,
              data: textFieldItems,
            },
            {
              visibility: codeSent ? "visible" : "hidden",
              data: extraTextFields,
            },
          ]}
          textFieldFooters={textFieldfooter}
          buttonItems={buttonItems}
          footer={<RegisterFooter />}
          formSubmited={(data) =>
            !codeSent ? handelSendingCode(data) : handleSubmit(data)
          }
        />
      </AuthComponents>
    </Home>
  );
};

export default Register;
