import usernameIcon from "assets/icons/username-icon.svg";
import passwordIcon from "assets/icons/password-icon.svg";

export const textFieldItems = [
    {
      name: "phone_number",
      placeholder: "تلفن همراه",
      type: "tel",
      pattern: "*",
      required: true,
      icon: usernameIcon,
    },
  ],
  renderOnCodeSent = [
    {
      name: "otp",
      placeholder: "کد را وارد کنید",
      type: "number",
      pattern: "[0-9]{4,5}",
      required: true,
      icon: passwordIcon,
    },
  ],
  buttonItems = [
    {
      title: "عضویت",
      type: "submit",
      color: "#EE5D25",
      bgcolor: "#FFE8E0",
      width: "60%",
    },
  ],
  selectItems = [
    {
      title: "نیروی کار",
      value: "force",
    },
    {
      title: "تامین کننده",
      value: "supplier",
    },
  ];
