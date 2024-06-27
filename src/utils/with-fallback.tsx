import { Suspense } from "react";

const withFallback = (
	children: React.ReactNode,
	fallback: React.ReactNode = <div>Loading...</div>
) => <Suspense fallback={fallback}>{children}</Suspense>;

export default withFallback;
