import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}


/**
 * The function calculates the tax amount included in a price given the inclusive price and tax rate
 * percentage.
 * @param {number} inclusivePrice - The `inclusivePrice` parameter represents the total price that
 * includes tax. It is the price that the customer pays, which already includes the tax amount.
 * @param {number} taxRatePercentage - The `taxRatePercentage` parameter represents the tax rate in
 * percentage that is applied to the inclusive price. For example, if the tax rate is 10%, you would
 * input `10` for this parameter.
 * @returns The function `getInclusiveTaxAmount` returns the amount of tax included in the given
 * inclusive price, based on the provided tax rate percentage.
 */
export function getInclusiveTaxAmount(
    inclusivePrice: number,
    taxRatePercentage: number
): number {
    const taxRate = taxRatePercentage / 100;
    return (inclusivePrice * taxRate) / (1 + taxRate);
}


/**
 * The function calculates the base amount and tax amount from a given inclusive price and tax rate
 * percentage.
 * @param {number} inclusivePrice - The `inclusivePrice` parameter represents the total price that
 * includes tax.
 * @param {number} taxRatePercentage - The `taxRatePercentage` parameter represents the tax rate as a
 * percentage. For example, if the tax rate is 10%, you would pass 10 as the value for this parameter.
 * @returns An object is being returned with two properties: `baseAmount` and `taxAmount`, both of
 * which are numbers.
 */
export function calculateTaxInclusive(
    inclusivePrice: number,
    taxRatePercentage: number
): { baseAmount: number; taxAmount: number } {
    const taxAmount = getInclusiveTaxAmount(inclusivePrice, taxRatePercentage);
    const baseAmount = inclusivePrice - taxAmount;

    return {
        baseAmount,
        taxAmount,
    };
}


