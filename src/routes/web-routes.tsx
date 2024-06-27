import withFallback from "@/utils/with-fallback";
import {
	ErrorPage,
	Layout,
	Organization,
	Location,
	Dashboard,
} from "./components";

const webRoutes = {
	path: "web/",
	element: withFallback(<Layout />),
	children: [
		{
			index: true,
			element: withFallback(<Dashboard title="Web" />),
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "organizations",
			element: withFallback(<Organization />),
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "locations",
			element: withFallback(<Location />),
			errorElement: withFallback(<ErrorPage />),
		},
	],
};

export default webRoutes;
