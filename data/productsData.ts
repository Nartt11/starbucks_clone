import { SubCategory } from "@/types/category.type";

// --- 1. DRINKS ---
export const HotCoffeesData: SubCategory = {
  id: 101,
  name: "Hot Coffees",
  slug: "hot-coffees",
  image:
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600",
  productGroups: [
    {
      id: 1001,
      name: "Brewed Coffees",
      slug: "brewed-coffees",
      products: [
        {
          id: 1,
          name: "Featured Blonde Roast",
          slug: "featured-blonde-roast",
          image:
            "https://images.unsplash.com/photo-1544787210-2211d7c929c7?q=80&w=200",
          calories: 5,
          basePrice: 2.75,
          sizeOptions: [
            { name: "Short", priceExtended: -0.5 },
            { name: "Tall", priceExtended: 0 },
            { name: "Grande", priceExtended: 0.5 },
            { name: "Venti", priceExtended: 1.0 },
          ],
          customizeOptions: [],
        },
      ],
    },
    {
      id: 1002,
      name: "Espresso Beverages",
      slug: "espresso-beverages",
      products: [
        {
          id: 2,
          name: "Caffè Latte",
          slug: "caffe-latte",
          image:
            "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=200",
          calories: 190,
          basePrice: 4.25,
          sizeOptions: [
            { name: "Tall", priceExtended: 0 },
            { name: "Grande", priceExtended: 0.5 },
          ],
          customizeOptions: [
            {
              name: "Milk",
              options: [
                { name: "2% Milk", priceExtended: 0 },
                { name: "Oatmilk", priceExtended: 0.75 },
                { name: "Almondmilk", priceExtended: 0.75 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const ColdCoffeesData: SubCategory = {
  id: 102,
  name: "Cold Coffees",
  slug: "cold-coffees",
  image:
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600",
  productGroups: [
    {
      id: 1101,
      name: "Cold Brews",
      slug: "cold-brews",
      products: [
        {
          id: 3,
          name: "Starbucks Cold Brew",
          slug: "starbucks-cold-brew",
          image:
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=200",
          calories: 5,
          basePrice: 4.45,
          sizeOptions: [
            { name: "Tall", priceExtended: 0 },
            { name: "Grande", priceExtended: 0.4 },
            { name: "Venti", priceExtended: 0.8 },
          ],
          customizeOptions: [],
        },
      ],
    },
  ],
};

// --- 2. FOOD ---
export const HotBreakfastData: SubCategory = {
  id: 201,
  name: "Hot Breakfast",
  slug: "hot-breakfast",
  image:
    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=600",
  productGroups: [
    {
      id: 2001,
      name: "Breakfast Sandwiches",
      slug: "breakfast-sandwiches",
      products: [
        {
          id: 21,
          name: "Bacon, Gouda & Egg Sandwich",
          slug: "bacon-gouda-egg-sandwich",
          image:
            "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=200",
          calories: 360,
          basePrice: 5.45,
          sizeOptions: [],
          customizeOptions: [
            {
              name: "Add-ons",
              options: [{ name: "Extra Bacon", priceExtended: 1.5 }],
            },
          ],
        },
      ],
    },
  ],
};

export const BakeryData: SubCategory = {
  id: 202,
  name: "Bakery",
  slug: "bakery",
  image:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600",
  productGroups: [
    {
      id: 2101,
      name: "Bagels & Muffins",
      slug: "bagels-muffins",
      products: [
        {
          id: 22,
          name: "Blueberry Muffin",
          slug: "blueberry-muffin",
          image:
            "https://images.unsplash.com/photo-1587538637146-8a84882c447f?q=80&w=200",
          calories: 330,
          basePrice: 3.25,
          sizeOptions: [],
          customizeOptions: [],
        },
      ],
    },
  ],
};

// --- 3. AT HOME COFFEE ---
export const WholeBeanData: SubCategory = {
  id: 301,
  name: "Whole Bean",
  slug: "whole-bean",
  image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600",
  productGroups: [
    {
      id: 3001,
      name: "Starbucks Reserve®",
      slug: "starbucks-reserve",
      products: [
        {
          id: 31,
          name: "Christmas 2024 Blend",
          slug: "christmas-2024-blend",
          image:
            "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=200",
          calories: 0,
          basePrice: 16.95,
          sizeOptions: [
            { name: "250g", priceExtended: 0 },
            { name: "500g", priceExtended: 12.0 },
          ],
          customizeOptions: [],
        },
      ],
    },
  ],
};

// --- 4. MERCHANDISE ---
export const MugsData: SubCategory = {
  id: 403,
  name: "Mugs",
  slug: "mugs",
  image:
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600",
  productGroups: [
    {
      id: 4001,
      name: "Ceramic Mugs",
      slug: "ceramic-mugs",
      products: [
        {
          id: 41,
          name: "Siren Logo Mug",
          slug: "siren-logo-mug",
          image:
            "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=200",
          calories: 0,
          basePrice: 14.95,
          sizeOptions: [
            { name: "12 fl oz", priceExtended: 0 },
            { name: "16 fl oz", priceExtended: 3.0 },
          ],
          customizeOptions: [],
        },
      ],
    },
  ],
};
