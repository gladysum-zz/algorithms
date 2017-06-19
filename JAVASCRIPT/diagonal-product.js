// Write a function that takes in a 2-D array that represents a square matrix and returns the product of the diagonal of the matrix. For example [ [ 2, 3], [ 4, 5] ] will return 10 (2x5).

const product = (a, b) => a*b;

const diagonalProduct = matrix => {
  let diagonal = [];
  for (let i = 0; i < matrix.length; i ++) {
    diagonal.push(matrix[i][i]);
  }
  return diagonal.reduce(product);
}

console.log(diagonalProduct([ [ 2, 3], [ 4, 5] ]));