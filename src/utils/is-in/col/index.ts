import { GRID, NUMBERS } from '../../../typings'

const isInCol = ({
  col,
  grid,
  value,
}: {
  col: number
  grid: GRID
  value: NUMBERS
}): boolean => {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true
  }
  return false
}

export default isInCol
