


interface AmountDisplayProps {
  amount: number;
}
const formatIndianCurrency = (amount: number) => {
  return amount.toLocaleString('en-IN');
};

const AmountDisplay = ({ amount }: AmountDisplayProps) => {
  const formatAmount = (amt : number) => {
    if (amt === 0) {
      return amt; 
    }
    const formattedAmount = formatIndianCurrency(Math.abs(amt));
    return amt < 0 ? `Cr ${formattedAmount} ` : `Dr ${formattedAmount}`;
  };

  return (
    <span className="whitespace-nowrap">{formatAmount(amount)}</span>
  );
};

export default AmountDisplay;
