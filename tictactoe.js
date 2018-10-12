// install npm module prompt to receive user input
const prompt = require('prompt');
const matrix = []

prompt.start();

// boardCreation function to generate new matrix
const boardCreation = () => {
  const board = () => {
    for (let i = 0; i < 3; i++) {
      matrix.push(new Array(3));
    }
  }
  board();
}
boardCreation();

prompt.get(['x_coord', 'y_coord'], (err, result) => {
  if (err) {
    throw new Error('cannot do that');
  } else {
    console.log('whats your move');
    console.log(' x coord is: ', result.x_coord)
    console.log(' y coord is: ', result.y_coord)
    console.log(matrix);
  }
})
