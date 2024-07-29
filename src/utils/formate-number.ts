export function numberToWords(num: number): string {
  const ones: string[] = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens: string[] = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens: string[] = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const thousands: string[] = ["", "Thousand", "Million", "Billion"];

  if (num === 0) return "Zero only";


  function getBelowThousand(n: number): string {
    if(typeof n !== "number") return "invalid number";
      let str = "";

      if (n >= 100) {
          str += ones[Math.floor(n / 100)] + " Hundred ";
          n %= 100;
      }

      if (n >= 20) {
          str += tens[Math.floor(n / 10)] + " ";
          n %= 10;
      } else if (n >= 11 && n <= 19) {
          str += teens[n - 10] + " ";
          n = 0;
      }

      if (n > 0 && n < 10) {
          str += ones[n] + " ";
      }

      return str.trim();
  }

  let word = "";
  let place = 0;

  while (num > 0) {
      const n = num % 1000;

      if (n > 0) {
          word = getBelowThousand(n) + " " + thousands[place] + " " + word;
      }

      num = Math.floor(num / 1000);
      place++;
  }

  return word.trim() + " only";
}

console.log(numberToWords(123456));  // Output: "One Hundred Twenty Three Thousand Four Hundred Fifty Six only"
