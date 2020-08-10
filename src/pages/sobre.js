import React from "react"
import Cabeçalho from "../components/header" // highlight-line
import { graphql } from "gatsby"
import "../styles/sass/compile.scss"
import Layout2 from "../components/layout2"

export default function Sobre({ data }) {
  return (
    <Layout2>
      {/* <Cabeçalho /> */}
      <h1>Sobre {data.site.siteMetadata.title}</h1>
      <Cabeçalho headerText="É tão giro." />
      <p>Such wow. Very React.</p>
    </Layout2>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
