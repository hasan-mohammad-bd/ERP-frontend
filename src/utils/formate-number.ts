import { ToWords } from 'to-words';

export const numberToWords = (number: number) => {
    const toWords = new ToWords();
    const convertedNumber = toWords.convert(number, { currency: true, currencyOptions: { name: 'BDT', plural: 'Taka', symbol: '৳', fractionalUnit: { name: 'Poisha', plural: 'Poisha', singular: 'Poisha', symbol: 'P' } } })
     return convertedNumber
}

export function formatToTwoDecimalPlaces(value: number): number {
    // Check if the input is a valid number
    if (typeof value !== "number" || isNaN(value)) {
      return 0;
    }

    // Format to two decimal places
    return parseFloat(value.toFixed(2));
}