// Helper function to generate an array of dates between two dates

/**
 * The function `getDatesInRange` generates an array of dates within a specified range.
 * @param {Date} startDate - startDate is the beginning date of the range for which you want to
 * generate dates.
 * @param {Date} endDate - The `endDate` parameter is the date that marks the end of the range for
 * which you want to generate dates.
 * @returns An array of Date objects representing all the dates within the range from the startDate to
 * the endDate (inclusive).
 */
export const getDatesInRange = (startDate: Date, endDate: Date) => {
  const dates = [];
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }
  return dates;
};
