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
      <main className="flex-1 container mx-auto max-w-7xl flex flex-row gap-8 py-8">
        <MenuSideBar />
        {children}
      </main>
    </div>
  );
}
