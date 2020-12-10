import React, { FC } from 'react'

import { Container } from './styles'
import Button from './button'
import { NUMBERS } from '../../typings'

interface IProps {}

const Numbers: FC = ({}: IProps) => (
  <Container>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((value) => (
      <Button key={value} value={value} />
    ))}
  </Container>
)

export default Numbers
