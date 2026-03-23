export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  calories: number;
  basePrice: number;
  sizeOptions: {
    name: string;
    priceExtended: number;
  }[];
  customizeOptions: {
    name: string;
    options: {
      name: string;
      priceExtended: number;
    }[];
  }[];
}
