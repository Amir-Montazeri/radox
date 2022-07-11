import axios from "axios";
import {
  AuthComponents,
  AuthForm,
  RegisterFooter,
  RegisterTextfieldFooter,
} from "components";
import { Home } from "pages";
import { buttonItems, textFieldItems } from "./sampleDatas";

const Login = () => {
  const handleSubmit = (data) => {
    const { username, phoneNumber } = data;
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
          textFieldItems={textFieldItems}
          textFieldFooters={<RegisterTextfieldFooter />}
          buttonItems={buttonItems}
          footer={<RegisterFooter />}
          formSubmited={handleSubmit}
        />
      </AuthComponents>
    </Home>
  );
};

export default Login;
