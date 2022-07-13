import { PersonalFooter, OfficeHeader, OfficeFooter } from "components";
import { personalTextFields, officeTextFields } from "./formData";

export const titles = [
    {
      title: "اطلاعات فردی",
      value: "personal",
    },
    {
      title: "اطلاعات شغلی",
      value: "office",
    },
  ],
  sectionsBasedOnTitle = {
    personal: {
      textFieldItems: personalTextFields,
      footer: <PersonalFooter />,
    },
    office: {
      header: <OfficeHeader />,
      textFieldItems: officeTextFields,
      footer: <OfficeFooter />,
    },
  };
