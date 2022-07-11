import usernameIcon from "assets/icons/username-icon.svg";
import passwordIcon from "assets/icons/password-icon.svg";

export const textFieldItems = [
    {
      name: "phone_number",
      placeholder: "تلفن همراه",
      type: "tel",
      icon: usernameIcon,
    },
  ],
  renderOnCodeSent = [
    {
      name: "otp",
      placeholder: "کد را وارد کنید",
      type: "password",
      icon: passwordIcon,
    },
  ],
  buttonItems = [
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
      navigateOnClicked: { to: "/auth/register" },
    },
  ];
