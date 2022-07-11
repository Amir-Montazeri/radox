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
    name: "phoneNumber",
    placeholder: "شماره همراه",
    type: "tel",
    icon: passwordIcon,
  },
];

export const buttonItems = [
  {
    title: "عضویت",
    type: "submit",
    color: "#EE5D25",
    bgcolor: "#FFE8E0",
    width: "60%",
  },
];

export const selectItems = [
  {
    title: "نیروی کار",
    value: "force",
  },
  {
    title: "تامین کننده",
    value: "supplier",
  },
];
