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
            { key: "short", name: "Short", priceExtended: -0.5 },
            { key: "tall", name: "Tall", priceExtended: 0 },
            { key: "grande", name: "Grande", priceExtended: 0.5 },
            { key: "venti", name: "Venti", priceExtended: 1.0 },
          ],
          customizeOptions: [],
        },
        {
          id: 4,
          name: "Pike Place® Roast",
          slug: "pike-place-roast",
          image:
            "https://images.unsplash.com/photo-1502462041640-b3d7e50d0660?q=80&w=200",
          calories: 10,
          basePrice: 2.95,
          sizeOptions: [
            { key: "tall", name: "Tall", priceExtended: 0 },
            { key: "grande", name: "Grande", priceExtended: 0.4 },
            { key: "venti", name: "Venti", priceExtended: 0.8 },
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
            { key: "tall", name: "Tall", priceExtended: 0 },
            { key: "grande", name: "Grande", priceExtended: 0.5 },
          ],
          customizeOptions: [
            {
              key: "milk",
              type: "select",
              name: "Milk",
              options: [
                { key: "2-percent", name: "2% Milk", priceExtended: 0 },
                { key: "oat", name: "Oatmilk", priceExtended: 0.75 },
                { key: "almond", name: "Almondmilk", priceExtended: 0.75 },
              ],
            },
          ],
        },
        {
          id: 5,
          name: "Caramel Macchiato",
          slug: "caramel-macchiato",
          image:
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=200",
          calories: 250,
          basePrice: 4.95,
          sizeOptions: [
            { key: "tall", name: "Tall", priceExtended: 0 },
            { key: "grande", name: "Grande", priceExtended: 0.7 },
            { key: "venti", name: "Venti", priceExtended: 1.3 },
          ],
          customizeOptions: [
            {
              key: "milk",
              type: "select",
              name: "Milk",
              options: [
                { key: "2-percent", name: "2% Milk", priceExtended: 0 },
                { key: "oat", name: "Oatmilk", priceExtended: 0.8 },
              ],
            },
            {
              key: "toppings",
              type: "select",
              name: "Toppings",
              options: [
                {
                  key: "caramel-drizzle",
                  name: "Caramel Drizzle",
                  priceExtended: 0,
                },
                {
                  key: "extra-caramel",
                  name: "Extra Caramel",
                  priceExtended: 0.6,
                },
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
            { key: "tall", name: "Tall", priceExtended: 0 },
            { key: "grande", name: "Grande", priceExtended: 0.4 },
            { key: "venti", name: "Venti", priceExtended: 0.8 },
          ],
          customizeOptions: [],
        },
        {
          id: 6,
          name: "Vanilla Sweet Cream Cold Brew",
          slug: "vanilla-sweet-cream-cold-brew",
          image:
            "https://images.unsplash.com/photo-1523365280197-f21d6e9de0c0?q=80&w=200",
          calories: 200,
          basePrice: 4.95,
          sizeOptions: [
            { key: "tall", name: "Tall", priceExtended: 0 },
            { key: "grande", name: "Grande", priceExtended: 0.5 },
            { key: "venti", name: "Venti", priceExtended: 1.0 },
          ],
          customizeOptions: [
            {
              key: "cream",
              type: "select",
              name: "Cream",
              options: [
                {
                  key: "vanilla-sweet-cream",
                  name: "Vanilla Sweet Cream",
                  priceExtended: 0,
                },
                {
                  key: "extra-sweet-cream",
                  name: "Extra Sweet Cream",
                  priceExtended: 0.7,
                },
              ],
            },
          ],
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
              key: "add-ons",
              type: "select",
              name: "Add-ons",
              options: [
                { key: "extra-bacon", name: "Extra Bacon", priceExtended: 1.5 },
              ],
            },
          ],
        },
        {
          id: 23,
          name: "Sausage, Cheddar & Egg Sandwich",
          slug: "sausage-cheddar-egg-sandwich",
          image:
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=200",
          calories: 480,
          basePrice: 4.95,
          sizeOptions: [],
          customizeOptions: [],
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
        {
          id: 24,
          name: "Plain Bagel",
          slug: "plain-bagel",
          image:
            "https://images.unsplash.com/photo-1577563826477-9da6c8a854fd?q=80&w=200",
          calories: 280,
          basePrice: 2.45,
          sizeOptions: [],
          customizeOptions: [
            {
              key: "spreads",
              type: "select",
              name: "Spreads",
              options: [
                {
                  key: "cream-cheese",
                  name: "Cream Cheese",
                  priceExtended: 0.8,
                },
                { key: "butter", name: "Butter", priceExtended: 0.4 },
              ],
            },
          ],
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
            { key: "250g", name: "250g", priceExtended: 0 },
            { key: "500g", name: "500g", priceExtended: 12.0 },
          ],
          customizeOptions: [],
        },
        {
          id: 32,
          name: "Pike Place® Whole Bean",
          slug: "pike-place-whole-bean",
          image:
            "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=200",
          calories: 0,
          basePrice: 14.95,
          sizeOptions: [
            { key: "250g", name: "250g", priceExtended: 0 },
            { key: "1kg", name: "1kg", priceExtended: 22.0 },
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
            { key: "12oz", name: "12 fl oz", priceExtended: 0 },
            { key: "16oz", name: "16 fl oz", priceExtended: 3.0 },
          ],
          customizeOptions: [],
        },
        {
          id: 42,
          name: "Holiday Ceramic Mug",
          slug: "holiday-ceramic-mug",
          image:
            "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=200",
          calories: 0,
          basePrice: 18.95,
          sizeOptions: [{ key: "12oz", name: "12 fl oz", priceExtended: 0 }],
          customizeOptions: [],
        },
      ],
    },
  ],
};
