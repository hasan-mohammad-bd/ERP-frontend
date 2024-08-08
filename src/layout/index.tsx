import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { Toaster } from "@/components/ui/sonner";
// { children }: { children: React.ReactNode }
const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex h-full border-collapse overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-mainBackground pt-16 md:px-5 pb-1">
          {/* {children} */}
          <Outlet />
        </main>
        <Toaster />
      </div>
    </>
  );
};

export default Layout;
