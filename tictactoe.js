// install npm module prompt to receive user input
const prompt = require('prompt');
const matrix = []

prompt.start();

// boardCreation function to generate new matrix
const boardCreation = () => {
  const board = () => {
    for (let i = 0; i < 3; i++) {
      matrix.push(new Array(3).fill(' '));
    }
  }
  board();
}
boardCreation();

// Win condition checkers
const winCheck = () => {
  const rowResult = rowCheck(matrix);
  const colResult = colCheck(matrix);
  const diagResult = diagCheck(matrix);
  if (rowResult || colResult || diagResult) {
    console.log('you win!');
    return true;
  } else {
    return false;
  }
}

const rowCheck = (matrix) => {
  if ((matrix[0][0] === matrix[0][1] && matrix[0][0] === matrix[0][2]) && !(matrix[0][0] === ' ' && matrix[0][1] === ' ' && matrix[0][2] === ' ')) {
    return true;
  }
  else if ((matrix[1][0] === matrix[1][1] && matrix[1][0] === matrix[1][2]) && !(matrix[1][0] === ' ' && matrix[1][1] === ' ' && matrix[1][2] === ' ')) {
    return true;
  }
  else if ((matrix[2][0] === matrix[2][1] && matrix[2][0] === matrix[2][2]) && !(matrix[2][0] === ' ' && matrix[2][1] === ' ' && matrix[2][2] === ' ')) {
    return true;
  } else {
    return false;
  }
}

const colCheck = (matrix) => {
  if ((matrix[0][0] === matrix[1][0] && matrix[0][0] === matrix[2][0]) && !(matrix[0][0] === ' ' && matrix[1][0] === ' ' && matrix[2][0] === ' ')) {
    return true;
  }
  else if ((matrix[0][1] === matrix[1][1] && matrix[0][1] === matrix[2][1]) && !(matrix[0][1] === ' ' && matrix[1][1] === ' ' && matrix[2][1] === ' ')) {
    return true;
  }
  else if ((matrix[0][2] === matrix[1][2] && matrix[0][2] === matrix[2][2]) && !(matrix[0][2] === ' ' && matrix[1][2] === ' ' && matrix[2][2] === ' ')) {
    return true;
  } else {
    return false;
  }
}

const diagCheck = (matrix) => {
  if ((matrix[0][0] == matrix[1][1] && matrix[0][0] === matrix[2][2]) && !(matrix[0][0] === ' ' && matrix[1][1] === ' ' && matrix[2][2] === ' ')) {
    return true;
  }
  else if ((matrix[0][2] == matrix[1][1] && matrix[0][2] === matrix[2][0]) && !(matrix[0][2] === ' ' && matrix[1][1] === ' ' && matrix[2][0] === ' ')) {
    return true;
  } else {
    return false;
  }
}

// prompt.get(['x_coord', 'y_coord'], (err, result) => {
//   if (err) {
//     throw new Error('cannot do that');
//   } else {
//     console.log('whats your move');
//     console.log(' x coord is: ', result.x_coord)
//     console.log(' y coord is: ', result.y_coord)
//     console.log(matrix);
//   }
// })

console.log(matrix)
