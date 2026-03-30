import MenuSideBar from "@/components/menu/MenuSideBar";
import NavMenu from "@/components/menu/NavMenu";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavMenu />
      <main className="flex-1 container mx-auto w-full max-w-7xl flex flex-row gap-6 py-4 px-6 md:px-1">
        <MenuSideBar className="hidden lg:block" />
        {children}
      </main>
    </div>
  );
}
