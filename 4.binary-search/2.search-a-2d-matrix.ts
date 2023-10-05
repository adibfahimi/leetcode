function searchMatrix(matrix: number[][], target: number): boolean {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let t = 0;
  let b = rows - 1;

  while (t <= b) {
    let row = Math.floor((t + b) / 2);

    if (target > matrix[row][cols - 1])
      t = row + 1;
    else if (target < matrix[row][0])
      b = row - 1;
    else
      break
  }

  if (t > b) return false;

  let l = 0;
  let r = cols - 1;
  let row = Math.floor((t + b) / 2);

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (target > matrix[row][m])
      l = m + 1;
    else if (target < matrix[row][m])
      r = m - 1;
    else
      return true;
  }

  return false;
};

const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];

console.log(searchMatrix(matrix, 3)); // true

console.log(searchMatrix(matrix, 69)); // false
