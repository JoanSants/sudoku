import { GRID, NUMBERS } from '../../../typings'

export default ({
  grid,
  row,
  value,
}: {
  grid: GRID
  row: number
  value: NUMBERS
}): boolean => grid[row].includes(value)
