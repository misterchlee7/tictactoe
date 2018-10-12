// install npm module prompt to receive user input
const prompt = require('prompt');
const matrix = []
let isGameWon = false;

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
    isGameWon = true;
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

// Game logic for player 1 and player 2
const player1Turn = () => {
  prompt.get(['p1_y_coord', 'p1_x_coord'], (err, result) => {
    if (err) {
      throw new Error('cannot do that');
    } else {
      console.log('p1_y_coord is: ', result.p1_y_coord);
      console.log('p1_x_coord is: ', result.p1_x_coord);
      matrix[result.p1_y_coord][result.p1_x_coord] = 'x';
      console.log(matrix);
      winCheck();
      if (!isGameWon) {
        player2Turn();
      }
    }
  })
};

const player2Turn = () => {
  prompt.get(['p2_y_coord', 'p2_x_coord'], (err, result) => {
    if (err) {
      throw new Error('cannot do that');
    } else {
      console.log('p2_y_coord is: ', result.p2_y_coord);
      console.log('p2_x_coord is: ', result.p2_x_coord);
      matrix[result.p2_y_coord][result.p2_x_coord] = 'o';
      console.log(matrix);
      winCheck();
      if (!isGameWon) {
        player1Turn();
      }
    }
  })
};

player1Turn();