// const formatPrice = (amount, decimals) => {
//   const price = parseFloat(`${amount}.${decimals}`);
//   return price.toLocaleString("es-AR", {
//     style: "currency",
//     currency: "ARS",
//     minimumFractionDigits: 2,
//   });
// };

// export default formatPrice;

const formatPrice = (amount, decimals = null) => {
  let price = parseFloat(amount);

  if (decimals !== null && !isNaN(parseFloat(decimals))) {
    price += parseFloat(`0.${decimals}`);
  }

  const options = {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: decimals !== null ? 2 : 0,
  };

  return price.toLocaleString("es-AR", options);
};

export default formatPrice;