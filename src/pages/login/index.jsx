import { useState } from "react";
import axios from "axios";
import { AuthComponents, AuthForm, RegisterTextfieldFooter } from "components";
import { Home } from "pages";
import Footer from "./Footer";
import { textFieldItems, renderOnCodeSent, buttonItems } from "./sampleDatas";

const Login = () => {
  const [codeSent, setCodeSent] = useState(false);
  const extraTextFields = codeSent ? renderOnCodeSent : [];

  const footer = (
    <RegisterTextfieldFooter>
      <Footer />
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
    console.log("submited: ", data);
    axios
      .post(`${process.env.REACT_APP_BASE_API_LINK}`, {
        username,
        phoneNumber,
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
      <AuthComponents title="ورود کاربر">
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
          textFieldFooters={footer}
          buttonItems={buttonItems}
          formSubmited={(data) =>
            !codeSent ? handelSendingCode(data) : handleSubmit(data)
          }
        />
      </AuthComponents>
    </Home>
  );
};

export default Login;
