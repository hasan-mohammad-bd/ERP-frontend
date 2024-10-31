import { Checkbox } from "@/components/ui/checkbox";
import { PermissionRow } from "@/lib/validators/web/user-role";

interface PermissionItemsProps {
  permissionSection: string;
  data?: PermissionRow[] | undefined;
  selectedPermissions: string[];
  setSelectedPermissions: (value: string[]) => void;
}

const PermissionItems = ({
  permissionSection,
  data,
  selectedPermissions,
  setSelectedPermissions,
}: PermissionItemsProps) => {
  const handleCheckboxChange = (permissionSlug: string, nestedSlugs: string[] = []) => {
    const prevSelected = [...selectedPermissions];
    const isSelected = prevSelected.includes(permissionSlug);

    let updatedSelected;
    if (isSelected) {
      // Remove permissionSlug and any nestedSlugs from selectedPermissions
      updatedSelected = prevSelected.filter(
        (slug) => slug !== permissionSlug && !nestedSlugs.includes(slug)
      );
    } else {
      // Add permissionSlug and all nestedSlugs to selectedPermissions
      updatedSelected = [...prevSelected, permissionSlug, ...nestedSlugs];
    }

    setSelectedPermissions(updatedSelected);
  };

  const sectionWiseData = data?.find((p) => p.slug === permissionSection);

  if (!sectionWiseData) return null;

  return (
    <div>
      {/* <span>{sectionWiseData.name}</span> */}
      {sectionWiseData?.permissions?.map((permissionOne, index) => {
        const nestedSlugs = permissionOne.permissions?.map((p) => p.slug) || [];

        return (
          <div key={index} className="my-5 items-center space-x-2">
            <div className="border-b border-gray-200 py-3">
              <Checkbox
                className=""
                id={`permissionOne-${permissionOne.slug}`}
                checked={selectedPermissions.includes(permissionOne.slug)}
                onCheckedChange={() =>
                  handleCheckboxChange(permissionOne.slug, nestedSlugs)
                }
              />
              <label
                htmlFor={`permissionOne-${permissionOne.slug}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
              >
                {permissionOne.name}
              </label>
            </div>

            {permissionOne.permissions &&
              permissionOne.permissions.length > 0 && (
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {permissionOne.permissions.map((permissionTwo, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`permissionTwo-${permissionTwo.slug}`}
                        checked={selectedPermissions.includes(permissionTwo.slug)}
                        onCheckedChange={() =>
                          handleCheckboxChange(permissionTwo.slug)
                        }
                      />
                      <label
                        htmlFor={`permissionTwo-${permissionTwo.slug}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {permissionTwo.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
};

export default PermissionItems;
