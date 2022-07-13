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
    axios
      .post(`${process.env.REACT_APP_BASE_API_LINK}accounts/register/`, {
        phone_number,
      })
      .then((res) => {
        const { data } = res;
        if (data.code === "1") {
          console.log("okeye baba ", data);
          setCodeSent(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmit = (data) => {
    const { otp, phone_number } = data;
    axios
      .post(`${process.env.REACT_APP_BASE_API_LINK}`, {
        otp,
        phone_number,
        type: selectedType,
      })
      .then((res) => {
        const { data } = res;
        console.log("success! ", data);
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
