/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'

interface ILayoutProps {}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex bg-body-color dark:bg-body-color-dark h-screen w-screen">
      <main>{children}</main>
    </div>
  )
}

export default Layout
