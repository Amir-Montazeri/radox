export const formTextFieldsData = [
  {
    inputProps: {
      name: "product_name",
      placeholder: "نام محصول",
      type: "text",
    },
    id: 0,
  },
  {
    inputProps: {
      name: "product_type",
      placeholder: "دسته محصول",
      type: "select",
      selectItems: [
        {
          title: "تره بار",
          value: "tarebar",
        },
        {
          title: "پروتین",
          value: "prot",
        },
        {
          title: "بهداشتی",
          value: "beh",
        },
      ],
      id: 1,
    },
  },
];
