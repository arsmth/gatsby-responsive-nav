import React from 'react'

import { Content } from '../components/Scaffold'
import Layout from '../components/Layout'
import Lorem from '../components/Lorem'

export default () => (
  <Layout>
    <Content>
      <h1>Page 3</h1>
      <h3>
        A responsive nav example using Gatsby & Styled Components!
      </h3>
      <Lorem />
    </Content>
  </Layout>
)
