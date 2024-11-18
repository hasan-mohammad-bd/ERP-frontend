import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/store/hooks";

interface Props {
  roles: string[];
  requireAll?: boolean; // If true, all roles must exist
}

export default function RoleAccessOutlet({ roles, requireAll = false }: Readonly<Props>) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!roles?.length || !hasPermission(user.role?.permissions || [], roles, requireAll)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

// Utility function to check if user has required permissions
function hasPermission(
  userPermissions: string[],
  requiredRoles: string[],
  requireAll: boolean
): boolean {
  const permissionSet = new Set(userPermissions);
  return requireAll
    ? requiredRoles.every((role) => permissionSet.has(role)) // ALL roles must exist
    : requiredRoles.some((role) => permissionSet.has(role)); // ANY role is enough
}
