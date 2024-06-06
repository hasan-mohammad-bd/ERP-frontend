import router from "./routes";
import { RouterProvider } from "react-router-dom";
import PersistUser from "./utils/PersitUser";

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<PersistUser />
		</>
	);
}

export default App;
