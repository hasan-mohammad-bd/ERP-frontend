import Header from "./header";
import Sidebar from "./sidebar";
import { Outlet } from "react-router";
// { children }: { children: React.ReactNode }
export const Layout = () => {
	return (
		<>
			<Header />
			<div className="flex h-screen border-collapse overflow-hidden">
				<Sidebar />
				<main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
					{/* {children} */}
					<Outlet />
				</main>
			</div>
		</>
	);
};
