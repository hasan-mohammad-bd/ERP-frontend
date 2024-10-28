import router from "./routes";
import { RouterProvider } from "react-router-dom";
import PersistUser from "./lib/access-control/persist-user";
import { ThemeProvider } from "next-themes";

function App() {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<RouterProvider router={router} />
				<PersistUser />
			</ThemeProvider>
		</>
	);
}

export default App;
