import axios from "axios";
import { AuthComponents, AuthForm, RegisterTextfieldFooter } from "components";
import { Home } from "pages";
import Footer from "./Footer";
import { buttonItems, textFieldItems } from "./sampleDatas";

const Login = () => {
  const footer = (
    <RegisterTextfieldFooter>
      <Footer />
    </RegisterTextfieldFooter>
  );

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
          textFieldFooters={footer}
          buttonItems={buttonItems}
          formSubmited={handleSubmit}
        />
      </AuthComponents>
    </Home>
  );
};

export default Login;
