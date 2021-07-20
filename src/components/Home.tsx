import React, { FC, ReactElement } from 'react'
import Button from './atoms/button'
import { useStaticQuery, graphql } from 'gatsby'

interface IHomeProps {}

const Home: FC<IHomeProps> = (): ReactElement => {
  const data = useStaticQuery(query);
  
    console.log(data)
  return (
    <div className="px-4">
      <img src={data.file.publicURL} />
      <section>
        <p className="text-t-big text-title-color font-semibold dark:text-white">
          Hi, I'm Rahul
        </p>
        <p className="text-t-h3 font-medium text-text-color dark:text-text-color-dark">
          Developer
        </p>
        <p className="text-t-h4 text-text-color mt-3 dark:text-color-dark">
          Enthusiastic and Passionate developer to contribute to team success
          through hardwork, attention to detail and excellent organisational
          skills.
        </p>
      </section>
      <Button text="Contact Me" classProps="mt-8"></Button>
    </div>
  )
}

export default Home

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.png" }) {
      publicURL
    }
  }
`
