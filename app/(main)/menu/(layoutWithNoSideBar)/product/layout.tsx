"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const param = useParams<{ id: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      {/* bread */}

      <div className="sticky w-full top-0  flex items-center gap-6 py-4 px-6 bg-gray-100 border-2 border-gray-300 inset-shadow-sm">
        <Breadcrumb className="container mx-auto max-w-7xl">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/menu">Menu</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{param.id}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="flex-1">{children}</main>

      <button className="fixed rounded-full bg-primary-dark font-bold text-xl text-white px-6 py-3 bottom-12 right-10 shadow-lg hover:bg-primary-dark-hover transition-colors">
        {" "}
        Add to order
      </button>
    </div>
  );
}
