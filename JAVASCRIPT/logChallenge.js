// Assume n is a positive integer
export default n => {
  if (n < 11) return 1;
  if (Math.ceil(Math.log10(n)) === Math.ceil(Math.log10(2 * n)))
    return 10 ** Math.floor(Math.log10(n)) / 2;
  return 10 ** (Math.ceil(Math.log10(n)) - 1);
};
