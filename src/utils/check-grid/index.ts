import { format } from 'path'
import { GRID } from '../../typings'

export default (grid: GRID): boolean => {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) if (grid[i][j] === 0) return false
  return true
}
