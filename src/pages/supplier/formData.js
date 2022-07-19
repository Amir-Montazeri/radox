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
            name: "phone_number",
            placeholder: "شماره همراه",
            type: "tel",
          },
          icon: accountIcon,
          id: 0,
        },
        {
          inputProps: {
            name: "fullname",
            placeholder: "نام مجموعه/نام و نام خانوادگی",
            type: "text",
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
            name: "state",
            placeholder: "استان",
            type: "select",
            selectItems: [
              {
                title: "البرز",
                value: "al",
              },
              {
                title: "تهران",
                value: "teh",
              },
            ],
          },
          icon: birthIcon,
          id: 2,
        },
        {
          inputProps: {
            name: "landline",
            placeholder: "تلفن ثابت",
            type: "tel",
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
            name: "email",
            placeholder: "ایمیل",
            type: "email",
          },
          icon: nationalityIcon,
          id: 4,
        },
        {
          inputProps: {
            name: "state",
            placeholder: "شهر",
            type: "select",
            selectItems: [
              {
                title: "کرج",
                value: "krj",
              },
              {
                title: "فردیس",
                value: "far",
              },
            ],
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
            type: "text",
          },
          icon: nationalityIcon,
          id: 6,
        },
      ],
      id: 3,
    },
  ],
  officeTextFields = [
    {
      items: [
        {
          inputProps: {
            name: "price",
            placeholder: "قیمت محصول",
            type: "number",
          },
          id: 0,
        },
        {
          inputProps: {
            name: "item_name",
            placeholder: "نام محصول",
            type: "text",
          },
          id: 1,
        },
      ],
      id: 0,
    },
    {
      items: [
        {
          inputProps: {
            name: "send_type",
            placeholder: "شهر",
            type: "select",
            selectItems: [
              {
                title: "هزینه دار",
                value: "cost",
              },
              {
                title: "رایگان",
                value: "free",
              },
            ],
          },
          id: 2,
        },
        {
          inputProps: {
            name: "product_unit",
            placeholder: "واحد حصول",
            type: "text",
          },
          id: 3,
        },
      ],
      id: 1,
    },
    {
      items: [
        {
          inputProps: {
            name: "pic",
            placeholder: "تصویر محصول",
            type: "file",
          },
          id: 4,
        },
      ],
      id: 2,
    },
    {
      items: [
        {
          inputProps: {
            name: "desc",
            placeholder: "توضیحات تکمیلی",
            type: "text",
          },
          id: 6,
        },
      ],
      id: 3,
    },
  ];
