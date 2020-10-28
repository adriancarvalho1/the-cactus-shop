import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Products from '../components/Products/Products'

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Hi people,</h2>
    <p>We are The Cactus Shop! We sell cute cactus and succulents.</p>
    <Products />
  </Layout>
  
)

export default IndexPage
