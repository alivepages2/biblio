let input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

//Todo: refactoring is so long

const output = (input) => {
  let rowIni = 0;
  let columnIni = 0;
  let columnEnd = input[0].length - 1;
  let rowEnd = input.length - 1;
  let row = 0;
  let column = 0;
  let step = 1;
  let result = [];

  result.push(input[row][column]);
  for (i = 0; i < 12; i++) {
    if (row == rowIni && column == columnEnd && step == 1 && row < rowEnd) {
      // by fist row
      rowIni++;
      row++;
      step = 2;

      result.push(input[row][column]);
    } else if (row == rowIni && step == 1 && column < columnEnd) {
      column++;

      result.push(input[row][column]);
    } else if (
      column == columnEnd &&
      row == rowEnd &&
      step == 2 &&
      column > columnIni
    ) {
      // by end column
      columnEnd--;
      column--;
      step = 3;

      result.push(input[row][column]);
    } else if (column == columnEnd && step == 2 && row < rowEnd) {
      row++;

      result.push(input[row][column]);
    } else if (
      column == columnIni &&
      row == rowEnd &&
      step == 3 &&
      row > rowIni
    ) {
      // by end  row
      rowEnd--;
      row--;
      step = 4;

      result.push(input[row][column]);
    } else if (row == rowEnd && step == 3 && column > columnIni) {
      column--;

      result.push(input[row][column]);
    }
    if (
      column == columnIni &&
      row == rowIni &&
      step == 4 &&
      column < columnEnd
    ) {
      // by first column
      columnIni++;
      column++;
      step = 1;

      result.push(input[row][column]);
    } else if (column == columnIni && step == 4) {
      row--;

      result.push(input[row][column]);
    }
  }
  return result;
};

console.log(output(input));
