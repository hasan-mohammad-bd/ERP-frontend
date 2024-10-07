// Helper function to generate an array of dates between two dates

import { 
  format, 
  // parseISO 
} from "date-fns";

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

/**
 * The function `getFormattedDateTime` takes a date string, parses it, and returns a formatted date and
 * time string in the "yyyy-MM-dd hh:mm a" format.
 * @param {string} date - The `getFormattedDateTime` function takes a `date` parameter as a string
 * input. This date string should be in a format that can be parsed by the `parseISO` function from
 * date-fns library. The function then formats this parsed date into a specific format "yyyy-MM-dd
 * hh:mm
 * @returns The function `getFormattedDateTime` returns a formatted date and time string in the format
 * "yyyy-MM-dd hh:mm a".
 */
export const getFormattedDateTime = (date: string) => {
  // const parsedDate = parseISO(date);
  const formattedDate = format(date, "yyyy-MM-dd hh:mm a");
  return formattedDate;
};
