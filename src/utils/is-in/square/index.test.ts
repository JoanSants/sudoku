import { SQUARE } from '../../../typings'

import isInSquare from './'

describe('isInSquare', () => {
  it('returns true when value is in grid square', () => {
    const square: SQUARE = [
      [1, 2, 3],
      [4, 6, 7],
      [8, 9, 5],
    ]

    expect(isInSquare({ square, value: 5 })).toBeTruthy()
  })

  it('returns false when value is not in grid square', () => {
    const square: SQUARE = [
      [1, 2, 3],
      [4, 6, 7],
      [8, 9, 0],
    ]

    expect(isInSquare({ square, value: 5 })).toBeFalsy()
  })
})
