import * as React from 'react'
import { Link, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Home from '../components/Home';

const IndexPage = (props: PageProps) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Home />
    </Layout>
  )
}

export default IndexPage
