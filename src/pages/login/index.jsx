import { useState } from "react";
import axios from "axios";
import { AuthComponents, AuthForm, RegisterTextfieldFooter } from "components";
import { Home } from "pages";
import Footer from "./Footer";
import { textFieldItems, renderOnCodeSent, buttonItems } from "./sampleDatas";
import { setItem } from "lcoalStorage";
import { api_url } from "api";

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
    axios
      .post(`${api_url}accounts/login/`, {
        phone_number,
      })
      .then((res) => {
        const { data } = res;
        if (data.code === 1) {
          setCodeSent(true);
        }
      })
      .catch((err) => {
        const { data } = err;
        console.error(data);
      });
  };

  const handleSubmit = (data) => {
    const { otp, phone_number } = data;
    axios
      .post(`${api_url}accounts/verify/`, {
        otp,
        phone_number,
      })
      .then((res) => {
        const { data } = res;

        setItem("access", data.access);
        setItem("refresh", data.refresh);
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
