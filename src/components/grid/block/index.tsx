import React, { FC } from 'react'

import { Container } from './styles'

interface Props {
  colIndex: number
  rowIndex: number
}

const Block: FC<Props> = ({ colIndex, rowIndex }) => (
  <Container data-test={`block-${colIndex}-${rowIndex}`} />
)

export default Block
