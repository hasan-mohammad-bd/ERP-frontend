// Function to format amount in 10,00,000 format
export const FormatIndianCurrency = ({amount}: {amount: number}) => {
  return amount.toLocaleString('en-IN');
};


