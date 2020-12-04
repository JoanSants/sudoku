import { NUMBERS, SQUARE } from '../../../typings'

export default ({
  square,
  value,
}: {
  square: SQUARE
  value: NUMBERS
}): boolean => [...square[0], ...square[1], ...square[2]].includes(value)
