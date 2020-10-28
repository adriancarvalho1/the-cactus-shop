import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const Sucess = () => (
  <Layout>
    <SEO title="Payment Success" />
    <h2>Sucess! Your order is confirmed!</h2>
    <p>We will send you an e-mail with the shipment details soon.</p>
    <Image />
    <br></br>
    <Link to="/">Shop again</Link>
  </Layout>
)

export default Sucess
