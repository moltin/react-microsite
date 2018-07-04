import React from 'react'

import Page from '../Page'

export default ({ match }) => (
  <Page>
    <h1>Product Details</h1>
    <pre>{JSON.stringify(match, '', '')}</pre>
  </Page>
)
