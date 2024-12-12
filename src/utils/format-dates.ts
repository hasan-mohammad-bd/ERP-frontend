// Helper function to generate an array of dates between two dates

import { 
  format, 
  // parseISO 
  isValid,
  parse,
  parseISO,
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

/**
 * The function `getFormattedDate` takes a date string as input and returns the date formatted as
 * "dd-MM-yyyy". If the date is invalid, it returns an empty string.
 * @param {string} date - A string representing a date in the format "yyyy-MM-dd".
 * @returns The function `getFormattedDate` is returning a formatted date string in the format
 * "dd-MM-yyyy", or an empty string if the date is invalid.
 */
export const getFormattedDate = (date: string): string => {
  const parsedDate = parseISO(date);
  if (!isValid(parsedDate)) {
    return "";
  }
  return format(parsedDate, "dd-MM-yyyy");
};


/**
 * Formats a given date string to "MMMM yyyy" format.
 * @param {string} date - A date string in the format "yyyy-MM-dd".
 * @returns {string} - The formatted date string in "MMMM yyyy" format (e.g., "January 2023").
 */
export const getFormattedMonthYear = (date: string): string => {
  return format(date, "MMMM yyyy");
};


/**
 * The function `getFormattedTime` takes a time string in "HH:mm:ss" format, parses it into a Date
 * object, and returns the time in "hh:mm a" format.
 * @param {string} time - The `time` parameter is a string representing a time value in the format
 * "HH:mm:ss" (hours:minutes:seconds).
 * @returns The function `getFormattedTime` returns a formatted time string in the format "hh:mm a"
 * (e.g., "03:30 PM") based on the input time string provided in the "HH:mm:ss" format.
 */
export const getFormattedTime = (time: string) => {
  // Parse the time string to a Date object
  const parsedDate = parse(time, "HH:mm:ss", new Date());
  return format(parsedDate, "hh:mm a");
};


/**
 * Converts a time string in "HH:mm:ss" or "HH:mm" format to "HH:mm" (24-hour format).
 *
 * @param {string | Date} time - The time to format (e.g., "15:00:00" or "15:00").
 * @returns {string | null} - The formatted time as "HH:mm" or null if invalid.
 */
export function formatTo24HourTime(time: string | Date | undefined): string | null {
  let dateObj: Date;

  // Attempt to parse "HH:mm:ss" format, and fall back to "HH:mm" if needed
  if (typeof time === 'string') {
      dateObj = parse(time, 'HH:mm:ss', new Date());
      if (!isValid(dateObj)) {
          dateObj = parse(time, 'HH:mm', new Date());
      }
  } else if (time instanceof Date) {
      dateObj = time;
  } else {
      return null; // Return null for unsupported types.
  }

  // Check if the date object is valid
  if (!isValid(dateObj)) return null;

  // Format the date to "HH:mm"
  return format(dateObj, 'HH:mm');
}
