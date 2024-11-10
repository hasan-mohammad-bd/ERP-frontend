// Utility function to render approval status
/**
 * The function `renderApprovalStatus` takes a status number as input and returns a styled span element
 * indicating the approval status based on the number.
 * @param {number} status - The `status` parameter in the `renderApprovalStatus` function is used to
 * determine the approval status of a particular item. It is a number that can have the following
 * values:
 * @returns The `renderApprovalStatus` function returns a JSX element based on the `status` parameter
 * provided. If the `status` is 0, it returns a "Pending" status element with yellow background. If the
 * `status` is 1, it returns an "Approved" status element with green background. For any other `status`
 * value, it returns a "Rejected" status element with red
 */
export const renderApprovalStatus = (status: number) => {
    switch (status) {
      case 0:
        return (
          <span className="text-yellow-600 text-[12px] py-1 px-2 bg-green-100 rounded-xl">
            Pending
          </span>
        );
      case 1:
        return (
          <span className="text-green-600 text-[12px] py-1 px-2 bg-yellow-100 rounded-xl">
            Approved
          </span>
        );
      default:
        return (
          <span className="text-red-600 text-[12px] py-1 px-2 bg-red-100 rounded-xl">
            Rejected
          </span>
        );
    }
  };
