import React from 'react'
import './ChessBoard.css'

const ChessBoard = () => {
  const isBlackCell = (row, col) => {
    return (row % 2 === 0 && col % 2 === 0) || (row % 2 === 1 && col % 2 === 1)
  }

  const renderBoard = () => {
    const board = []

    for (let row = 0; row < 8; row++) {
      const rowCells = []

      for (let col = 0; col < 8; col++) {
        const isBlack = isBlackCell(row, col)

        rowCells.push(
          <div
            key={`${row}-${col}`}
            className={`cell ${isBlack ? 'black' : 'white'}`}
          />
        )
      }

      board.push(
        <div key={row} className="row">
          {rowCells}
        </div>
      )
    }

    return board
  }

  return <div className="chess-board">{renderBoard()}</div>
}

export default ChessBoard
