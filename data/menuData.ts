import { Category } from "@/types/category.type";
import {
  HotCoffeesData,
  ColdCoffeesData,
  HotBreakfastData,
  BakeryData,
  WholeBeanData,
  MugsData,
} from "./productsData";

export const menuData: Category[] = [
  {
    id: 1,
    name: "Drinks",
    slug: "drinks",
    subCategories: [HotCoffeesData, ColdCoffeesData],
  },
  {
    id: 2,
    name: "Food",
    slug: "food",
    subCategories: [HotBreakfastData, BakeryData],
  },
  {
    id: 3,
    name: "At Home Coffee",
    slug: "at-home-coffee",
    subCategories: [WholeBeanData],
  },
  {
    id: 4,
    name: "Merchandise",
    slug: "merchandise",
    subCategories: [MugsData],
  },
];
