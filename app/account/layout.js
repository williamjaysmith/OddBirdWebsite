import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    // <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
    <div className="flex h-full flex-col gap-12 sm:flex-row">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
