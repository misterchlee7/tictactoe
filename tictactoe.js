const tictactoe = () => {
  const matrix = [];
  const board = () => {
    for (let i = 0; i < 3; i++) {
      matrix.push(new Array(3));
    } 
  }
  board();

  console.log(matrix);
}

tictactoe();