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
            name: "birth_day",
            placeholder: "تاریخ تولد",
            type: "date",
          },
          icon: birthIcon,
          id: 2,
        },
        {
          inputProps: {
            name: "degree_of_education",
            placeholder: "مدرک تحصیلی",
            type: "select",
            selectItems: [
              {
                title: "سیکل",
                id: "cycle",
              },
              {
                title: "دیپلم",
                id: "diploma",
              },
              {
                title: "کاردانی",
                id: "Associate ",
              },
              {
                title: "کارشناسی",
                id: "Bachelor",
              },
              {
                title: "ارشد",
                id: "Master",
              },
              {
                title: "سایر",
                id: "other",
              },
            ],
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
            name: "nationality",
            placeholder: "ملیت",
            type: "select",
            selectItems: [
              {
                title: "ایران",
                id: "ir",
              },
              {
                title: "افغان",
                id: "afg",
              },
            ],
          },
          icon: nationalityIcon,
          id: 6,
        },
        {
          inputProps: {
            name: "gender",
            placeholder: "جنسیت",
            type: "select",
            selectItems: [
              {
                title: "مذکر",
                id: "men",
              },
              {
                title: "مونث",
                id: "women",
              },
            ],
          },
          icon: genderIcon,
          id: 7,
        },
      ],
      id: 3,
    },
  ],
  personalTextFields05 = [
    {
      items: [
        {
          inputProps: {
            name: "email",
            placeholder: "ایمیل",
            type: "email",
          },
          icon: nationalityIcon,
          id: 8,
        },
      ],
      id: 4,
    },
  ],
  personalTextFields06 = [
    {
      items: [
        {
          inputProps: {
            name: "address",
            placeholder: "آدرس",
            type: "text",
          },
          icon: addressIcon,
          id: 9,
        },
      ],
      id: 5,
    },
  ];

export const officeTextFields = [
  {
    items: [
      {
        inputProps: {
          name: "workType",
          placeholder: "گروه شغلی",
          type: "select",
          selectItems: [
            {
              title: "سیکل",
              value: "cycle",
            },
            {
              title: "دیپلم",
              value: "diploma",
            },
            {
              title: "کاردانی",
              value: "Associate ",
            },
            {
              title: "کارشناسی",
              value: "Bachelor",
            },
            {
              title: "ارشد",
              value: "Master",
            },
            {
              title: "سایر",
              value: "other",
            },
          ],
        },
        id: 0,
      },
      {
        inputProps: {
          name: "companyName",
          placeholder: "نام مجموعه/شرکت",
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
          name: "position",
          placeholder: "سمت",
          type: "text",
        },
        id: 2,
      },
      {
        inputProps: {
          name: "colPeriod",
          placeholder: "مدت همکاری",
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
          name: "type",
          placeholder: "نوع همکاری",
          type: "select",
          selectItems: [
            {
              title: "",
            },
          ],
        },
        id: 4,
      },
      {
        inputProps: {
          name: "cost",
          placeholder: "میزان حقوق دریافتی",
          type: "text",
        },
        id: 5,
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
