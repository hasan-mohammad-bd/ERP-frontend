export const FormatNumberTowDecimal = ({ number }: any) => {
  const formatValue = (num: any) => {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) return num;
    if (Number.isInteger(parsedNum)) {
      return parsedNum;
    }
    return parseFloat(parsedNum.toFixed(2));
  };

  return <span>{formatValue(number)}</span>;
};


