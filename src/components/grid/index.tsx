import React, { Children, FC, useCallback, useEffect } from 'react'
import useMouseTrap from 'react-hook-mousetrap'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { BLOCK_COORDS, INDEX, N, NUMBERS } from '../../typings'
import { createGrid, fillBlock, IReducer, selectBlock } from '../../reducers'
import Block from './block'
import { Container, Row } from './styles'

interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue?: N
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  useEffect(() => {
    create()
  }, [create])

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0)
        dispatch(fillBlock(n, state.selectedBlock))
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  )

  useMouseTrap('1', () => fill(1))
  useMouseTrap('2', () => fill(2))
  useMouseTrap('3', () => fill(3))
  useMouseTrap('4', () => fill(4))
  useMouseTrap('5', () => fill(5))
  useMouseTrap('6', () => fill(6))
  useMouseTrap('7', () => fill(7))
  useMouseTrap('8', () => fill(8))
  useMouseTrap('9', () => fill(9))

  useMouseTrap('down', () => {
    if (state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      )
  })
  useMouseTrap('left', () => {
    if (state.selectedBlock && state.selectedBlock[1] > 0)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      )
  })
  useMouseTrap('right', () => {
    if (state.selectedBlock && state.selectedBlock[1] < 8)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      )
  })
  useMouseTrap('up', () => {
    if (state.selectedBlock && state.selectedBlock[0] > 0)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      )
  })

  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  colIndex={colIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
