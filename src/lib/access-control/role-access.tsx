import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/store/hooks";
import UnauthorizedPage from "@/pages/unauthorized-page";

interface RoleAccessProps {
  roles: string[];
  children: ReactNode;
  requireAll?: boolean; // If true, all roles are required for access
  showUnauthorizedPage?: boolean;
  fallback?: ReactNode;
}

export default function RoleAccess({
  roles,
  children,
  requireAll = false,
  showUnauthorizedPage = false,
  fallback = null,
}: Readonly<RoleAccessProps>) {
  const { user } = useAuth();
  const location = useLocation();

  // Redirect to login if the user is not authenticated
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user has the required roles
  const hasAccess = hasPermission(user.role?.permissions || [], roles, requireAll);

  // Redirect to home if user lacks necessary roles
  if (!hasAccess) {
    // return <Navigate to="/" replace />;
    return fallback ? fallback : showUnauthorizedPage ? <UnauthorizedPage /> : null;
  }

  // Render children if user has the required roles
  return <>{children}</>;
}

// Utility function to check if the user has the required permissions
function hasPermission(
  userPermissions: string[],
  requiredRoles: string[],
  requireAll: boolean
): boolean {
  const permissionSet = new Set(userPermissions);
  return requireAll
    ? requiredRoles.every((role) => permissionSet.has(role)) // ALL roles required
    : requiredRoles.some((role) => permissionSet.has(role)); // ANY role is enough
}
