import React from 'react'
import { Box } from '@blockstack/ui'
import { BoxProps } from '@blockstack/ui/dist/box'

interface GutterProps extends BoxProps {
  multiplier: number
  base?: number
}

export default ({ base = 6, multiplier, ...rest }: GutterProps) => {
  const boxes = [];
  for (let index = 0; index < multiplier; index++) {
    boxes.push(<Box py={base} {...rest} />);
  }
  return (
    <>{boxes}</>
  )
}
