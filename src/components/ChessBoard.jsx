import React, { useState } from 'react'
import './ChessBoard.css'

const ChessBoard = () => {
  const [selectedCell, setSelectedCell] = useState('')
  const isBlackCell = (row, col) => {
    return (row % 2 === 0 && col % 2 === 0) || (row % 2 === 1 && col % 2 === 1)
  }

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col })
  }

  const isCapturableByKnight = (row, col, selectedRow, selectedCol) => {
    const rowDiff = Math.abs(row - selectedRow)
    const colDiff = Math.abs(col - selectedCol)
    return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)
  }

  const renderBoard = () => {
    const board = []
    for (let row = 0; row < 8; row++) {
      const rowCells = []

      for (let col = 0; col < 8; col++) {
        const isBlack = isBlackCell(row, col)
        const isSelected =
          selectedCell && selectedCell.row === row && selectedCell.col === col
        const isCapturable =
          selectedCell &&
          isCapturableByKnight(row, col, selectedCell.row, selectedCell.col)

        rowCells.push(
          <div
            key={`${row}-${col}`}
            className={`cell ${isBlack ? 'black' : 'white'} ${
              isSelected && 'selected'
            } ${isCapturable && 'capturable'}`}
            onClick={() => handleCellClick(row, col)}
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
