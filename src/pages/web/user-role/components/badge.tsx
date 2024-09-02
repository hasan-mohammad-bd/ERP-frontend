import { Badge } from "@/components/ui/badge";
import { RoleRow } from "@/lib/validators/web/user-role";

interface BadgeProps {
  rowData?: RoleRow;
}

const RoleBadge = ({ rowData }: BadgeProps) => {
  const singlePermission = rowData?.permissions;

  return (
    <div>
      <div>
        {singlePermission?.map((permission) => (
          <Badge className="ml-1 mb-1" key={permission}>{permission}</Badge>
        ))}
      </div>
    </div>
  );
};

export default RoleBadge;
