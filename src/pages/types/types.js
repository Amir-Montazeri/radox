import cafeIcon from "assets/icons/cafe.svg";
import cateringIcon from "assets/icons/catering.svg";
import confectionaryIcon from "assets/icons/confectionary.svg";
import fastfoodIcon from "assets/icons/fastfood.svg";
import liverIcon from "assets/icons/liver.svg";
import restaurantIcon from "assets/icons/restaurant.svg";

export const itemTypes = [
  {
    items: [
      {
        title: "کافه",
        iconUrl: cafeIcon,
      },
      {
        title: "قنادی",
        iconUrl: confectionaryIcon,
      },
    ],
    id: 0,
  },
  {
    items: [
      {
        title: "رستوران",
        iconUrl: restaurantIcon,
      },
      {
        title: "کترینگ",
        iconUrl: cateringIcon,
      },
    ],
    id: 1,
  },
  {
    items: [
      {
        title: "فست فود",
        iconUrl: fastfoodIcon,
      },
      {
        title: "جگرکی",
        iconUrl: liverIcon,
      },
    ],
    id: 2,
  },
];
