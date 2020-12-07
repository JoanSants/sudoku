import { GRID, NUMBERS } from '../../../typings'

const isInRow = ({
  grid,
  row,
  value,
}: {
  grid: GRID
  row: number
  value: NUMBERS
}): boolean => grid[row].includes(value)

export default isInRow
