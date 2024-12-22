import React, { useState } from "react";

const TicTacToeApp = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newboard = board.slice();
    newboard[index] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setBoard(newboard);
  };
  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold mb-6">Tic Tac Toe</h1>

        <div className="grid grid-cols-3 gap-2 w-64">
          {board.map((square, index) => (
            <div
              key={index}
              className="w-full h-20 flex items-center justify-center bg-gray-700 text-3xl font-semibold rounded-lg cursor-pointer
        hover:bg-gray-600 transition-all"
              onClick={() => handleClick(index)}
            >
              {square}
            </div>
          ))}
        </div>
        <div className="mt-2 text-lg">
        {winner ? `Winner is ${winner} ` : `Next Player is ${isXNext ? "X" : "O"}`   }
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
          onClick={handleRestart}
        >
          Restart Game
        </button>
      </div>
    </>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToeApp;
