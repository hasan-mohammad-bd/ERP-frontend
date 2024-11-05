import { Card } from "@/components/ui/card";
import { mainNavItems } from "@/constants/main-nav";
import { ThemeToggle } from "@/layout/theme-toggle";
import { UserNav } from "@/layout/user-nav";
import { useAuth } from "@/store/hooks";
import { Link } from "react-router-dom";
import logo from "@/assets/images/sticky-logo.png";

const Lobby = () => {
  const { user } = useAuth();
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-12 items-center px-4">
        <Link
          to={"/"}
          className="hidden items-center justify-between gap-2 md:flex"
        >
          <div className="h-9">
            <img
              src={user?.organization?.logo || logo}
              alt="logo-image"
              className="h-full w-full"
            />
          </div>
          {/* <Boxes className="h-6 w-6" /> */}
          {/* <h1 className="text-lg font-semibold">{user?.organization?.name || siteConfig.name}</h1> */}
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          {user && <UserNav user={user} />}
          <ThemeToggle />
        </div>
      </div>

      <div className="w-1/3 mx-auto grid grid-cols-3 gap-4 mt-[20vh]">
        {mainNavItems.map((item) => (
          <Link key={item.href} to={item.href}>
            <Card className="px-4 py-6 flex flex-col items-center gap-y-4">
              <div className="h-20 w-20 rounded-full bg-muted p-4">
                <img src={item.image} alt={item.title} />
              </div>
              {item.title}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lobby;
