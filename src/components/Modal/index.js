import React from 'react'

import { Wrapper, Box, CloseBtn, Title } from './styles'
import close from './close.svg'

export default ({ history, children }) => {
  const back = e => {
    e.stopPropagation()
    history.goBack()
  }

  return (
    <Wrapper onClick={back}>
      <Box>
        <CloseBtn onClick={back}>
          <img src={close} alt="Close" title="Close modal" />
        </CloseBtn>

        <Title>Info</Title>

        {children}
      </Box>
    </Wrapper>
  )
}
