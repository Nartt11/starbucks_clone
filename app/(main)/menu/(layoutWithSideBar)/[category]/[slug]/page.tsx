"use client";
const ProductItem = lazy(
  () => import("../../../../../../components/product/ProductItem"),
);
import LoadingSkeleton from "@/components/LoadingSkeleton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { menuData } from "@/data/menuData";
import { useParams } from "next/navigation";
import { lazy, Suspense } from "react";

export default function Page() {
  const params = useParams<{ category: string; slug: string }>();
  const formatSlug = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const slug: string = params.slug;
  const categorySlug: string = params.category;
  console.log("categorySlug: ", categorySlug);

  const getProducts = (categorySlug: string, subCategorySlug: string) => {
    const category = menuData.find((item) => item.slug === categorySlug);

    if (!category) {
      console.warn(`Không tìm thấy Category với slug: ${categorySlug}`);
      return;
    }

    const subCategory = category.subCategories.find(
      (sub) => sub.slug === subCategorySlug,
    );

    if (!subCategory) {
      console.warn(
        `Không tìm thấy SubCategory với slug: ${subCategorySlug} trong ${categorySlug}`,
      );
      return undefined;
    }

    return subCategory;
  };

  const products = getProducts(categorySlug, slug);

  return (
    <div className="flex flex-col gap-2 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/menu">Menu</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{formatSlug(slug)}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h2 className="text-2xl font-bold text-gray-800">{formatSlug(slug)}</h2>

      {products ? (
        products.productGroups.map((group) => (
          <div key={group.id} className="flex flex-col gap-4 w-full">
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
              {group.name}
            </h3>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {group.products.map((product) => (
                <Suspense key={product.id} fallback={<LoadingSkeleton />}>
                  <ProductItem product={product} />
                </Suspense>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">Không tìm thấy sản phẩm nào.</p>
      )}
    </div>
  );
}

// const items = [
//   {
//     id: 1,
//     name: "Hot Coffee",
//     slug: "hot-coffee",
//     category: "Drinks",
//     products: [
//       {
//         id: 1,
//         name: "Caffee Americano",
//       },
//     ],
//   },
// ];

// const products = (categorySlug: string) => {
//   const category = items.filter((item) => item.slug === categorySlug);
//   return category;
// };
