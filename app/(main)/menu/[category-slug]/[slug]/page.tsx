"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ categorySlug: string; slug: string }>();
  const formatSlug = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const slug: string = params.slug;

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
//         name: "Caffe Americano",
//       },
//     ],
//   },
// ];

// const products = (categorySlug: string) => {
//   const category = items.filter((item) => item.slug === categorySlug);
//   return category;
// };
