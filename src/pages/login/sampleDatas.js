import usernameIcon from "assets/icons/username-icon.svg";
import passwordIcon from "assets/icons/password-icon.svg";

export const textFieldItems = [
  {
    name: "username",
    placeholder: "نام کاربری",
    type: "text",
    icon: usernameIcon,
  },
  {
    name: "password",
    placeholder: "گذرواژه",
    type: "password",
    icon: passwordIcon,
  },
];

export const buttonItems = [
  {
    title: "ورود",
    type: "submit",
    color: "#EE5D25",
    bgcolor: "#FFE8E0",
    width: "100%",
  },
  {
    title: "عضویت",
    type: "button",
    color: "#EE5D25",
    bgcolor: "#FFE8E0",
    width: "100%",
  },
];
