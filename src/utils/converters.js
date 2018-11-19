export const numberToReal = number => {
  number = number.toFixed(2).split(".");

  number[0] = number[0].split(/(?=(?:...)*$)/).join(".");

  return number.join(",");
};
