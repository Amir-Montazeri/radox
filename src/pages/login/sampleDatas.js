import usernameIcon from "assets/icons/username-icon.svg";
import passwordIcon from "assets/icons/password-icon.svg";

export const textFieldItems = [
    {
      name: "phone_number",
      placeholder: "تلفن همراه",
      type: "tel",
      pattern: "09(0[1-2]|1[0-9]|3[0-9]|2[0-2])-?[0-9]{3}-?[0-9]{4}",
      required: true,
      icon: usernameIcon,
    },
  ],
  renderOnCodeSent = [
    {
      name: "otp",
      placeholder: "کد را وارد کنید",
      type: "number",
      required: true,
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
