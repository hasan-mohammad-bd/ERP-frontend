import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
// { children }: { children: React.ReactNode }
const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex h-screen border-collapse overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-mainBackground pt-16">
          <main className="min-h-[calc(100%-3rem)] md:px-5">
            <Outlet />
          </main>
          <Footer />
        </div>
        <Toaster richColors position="top-right"/>
      </div>
    </>
  );
};

export default Layout;
