export const currencyFormatter = (amount) => {
  return amount?.toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
  });
};
