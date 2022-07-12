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
        name: "fullname",
        placeholder: "نام و نام خانوادگی",
        type: "text",
        icon: accountIcon,
        id: 0,
      },
      {
        name: "phone_number",
        placeholder: "شماره همراه",
        type: "tel",
        icon: phoneNumberIcon,
        id: 1,
      },
    ],
    id: 0,
  },
  {
    items: [
      {
        name: "birth",
        placeholder: "تاریخ تولد",
        type: "date",
        icon: birthIcon,
        id: 2,
      },
      {
        name: "degree",
        placeholder: "مدرک تحصیلی",
        type: "select",
        icon: degreeIcon,
        id: 3,
      },
    ],
    id: 1,
  },
  {
    items: [
      {
        name: "Nationality",
        placeholder: "ملیت",
        type: "select",
        icon: nationalityIcon,
        id: 4,
      },
      {
        name: "gender",
        placeholder: "جنسیت",
        type: "select",
        icon: genderIcon,
        id: 5,
      },
    ],
    id: 2,
  },
  {
    items: [
      {
        name: "address",
        placeholder: "آدرس",
        type: "select",
        icon: addressIcon,
        id: 6,
      },
    ],
    id: 3,
  },
];
