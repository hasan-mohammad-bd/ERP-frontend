import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import LoginScreen from "./pages/login.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateOutlet } from "./utils/PrivateOutlet.tsx";
import "./index.css";
import App from "./App.tsx";

const router = createBrowserRouter([
	// Route for /login
	{ path: "/login", element: <LoginScreen />, errorElement: <ErrorPage /> },
	// Private routes with outlet for nested routes
	{
		path: "*",
		element: <PrivateOutlet />,
		children: [
			// Index route within the outlet
			{ index: true, element: <App /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
