import { ToWords } from 'to-words';

export const numberToWords = (number: number) => {
    const toWords = new ToWords();
    const convertedNumber = toWords.convert(number, { currency: true, currencyOptions: { name: 'BDT', plural: 'Taka', symbol: '৳', fractionalUnit: { name: 'Poisha', plural: 'Poisha', singular: 'Poisha', symbol: 'P' } } })
     return convertedNumber


}