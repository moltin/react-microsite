import React from 'react'

import { Wrapper, Img } from './styles'

export default ({ src, ...props }) => {
  const url = typeof src === 'object' ? src.href : src

  return (
    <Wrapper {...props}>
      <Img src={url} {...props} />
    </Wrapper>
  )
}
