export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  calories: number;
  basePrice: number;
  sizeOptions: {
    key: string;
    name: string;
    priceExtended: number;
  }[];
  customizeOptions: {
    name: string;
    key: string;
    type: "select" | "input";
    options?: {
      key: string;
      name: string;
      priceExtended: number;
    }[];
    defaultValue?: number;
    unit?: string;
  }[];
}

export type SelectedProduct = {
  id: number;
  options: {
    type: string;
    value: string;
  }[];
};
