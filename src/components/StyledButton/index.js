import React from 'react'

import { Button } from './styles'
export { Wrapper } from './styles'

export default ({ text = 'Add to Cart', children, ...props }) => (
  <Button {...props} children={children || text} />
)
