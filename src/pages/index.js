import React from 'react'

import { Content } from '../components/Scaffold'
import Layout from '../components/Layout'
import Lorem from '../components/Lorem'

export default () => (
  <Layout>
    <Content>
      <h1>Responsive Nav Example</h1>
      <h3>
        Using Gatsby & Styled Components!
      </h3>
      <Lorem />
    </Content>
  </Layout>
)
