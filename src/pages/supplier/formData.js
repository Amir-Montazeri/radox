import accountIcon from "assets/icons/account.svg";
import phoneNumberIcon from "assets/icons/phoneNumber.svg";
import birthIcon from "assets/icons/birth.svg";
import degreeIcon from "assets/icons/degree.svg";
import nationalityIcon from "assets/icons/nationality.svg";
import genderIcon from "assets/icons/gender.svg";
import addressIcon from "assets/icons/address.svg";

export const personalTextFields01 = [
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
            name: "name",
            placeholder: "نام مجموعه/نام و نام خانوادگی",
            type: "text",
          },
          icon: phoneNumberIcon,
          id: 1,
        },
      ],
      id: 0,
    },
  ],
  personalTextFields02 = [
    {
      items: [
        {
          inputProps: {
            name: "email",
            placeholder: "ایمیل",
            type: "email",
          },
          icon: birthIcon,
          id: 2,
        },
        {
          inputProps: {
            name: "home_number",
            placeholder: "شماره ثابت",
            type: "tel",
          },
          icon: degreeIcon,
          id: 3,
        },
      ],
      id: 1,
    },
  ],
  personalTextFields03 = [
    {
      items: [
        {
          inputProps: {
            name: "state",
            placeholder: "شهر",
            type: "select",
            selectItems: [
              {
                title: "loading...",
              },
            ],
          },
          icon: genderIcon,
          id: 5,
        },
        {
          inputProps: {
            name: "city",
            placeholder: "استان",
            type: "select",
            selectItems: [
              {
                title: "loading...",
              },
            ],
          },
          icon: nationalityIcon,
          id: 4,
        },
      ],
      id: 2,
    },
  ],
  personalTextFields04 = [
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
  ];

export const officeTextFields = [
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
