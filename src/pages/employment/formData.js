import accountIcon from "assets/icons/account.svg";
import phoneNumberIcon from "assets/icons/phoneNumber.svg";
import birthIcon from "assets/icons/birth.svg";
import degreeIcon from "assets/icons/degree.svg";
import nationalityIcon from "assets/icons/nationality.svg";
import genderIcon from "assets/icons/gender.svg";
import addressIcon from "assets/icons/address.svg";

export const personalTextFields = [
  {
    items: [
      {
        inputProps: {
          name: "fullname",
          placeholder: "نام و نام خانوادگی",
          type: "text",
        },
        icon: accountIcon,
        id: 0,
      },
      {
        inputProps: {
          name: "phone_number",
          placeholder: "شماره همراه",
          type: "tel",
        },
        icon: phoneNumberIcon,
        id: 1,
      },
    ],
    id: 0,
  },
  {
    items: [
      {
        inputProps: {
          name: "birth",
          placeholder: "تاریخ تولد",
          type: "date",
        },
        icon: birthIcon,
        id: 2,
      },
      {
        inputProps: {
          name: "degree",
          placeholder: "مدرک تحصیلی",
          type: "select",
        },
        icon: degreeIcon,
        id: 3,
      },
    ],
    id: 1,
  },
  {
    items: [
      {
        inputProps: {
          name: "Nationality",
          placeholder: "ملیت",
          type: "select",
        },
        icon: nationalityIcon,
        id: 4,
      },
      {
        inputProps: {
          name: "gender",
          placeholder: "جنسیت",
          type: "select",
        },
        icon: genderIcon,
        id: 5,
      },
    ],
    id: 2,
  },
  {
    items: [
      {
        inputProps: {
          name: "address",
          placeholder: "آدرس",
          type: "select",
        },
        icon: addressIcon,
        id: 6,
      },
    ],
    id: 3,
  },
];
