import { Product } from "./product.type";

export interface Category {
  id: number;
  name: string;
  slug: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  products: Product[];
}
