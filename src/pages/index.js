import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby" // highlight-line
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Layout from "../layouts/en"

export default function Home({ data }) 
{
  return (
    <Layout>

      <SEO title={data.markdownRemark.frontmatter.title = "Amazing"} description={data.markdownRemark.excerpt} />

      <div>
        <h1 css={css` display: inline-block; border-bottom: 1px solid;`}> Amazing Pandas Eating Things</h1>
        <img src="https://source.unsplash.com/400x200/?coffee,tea" alt="" />

        <h4>{data.allMarkdownRemark.totalCount} Publicações</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            {/* highlight-start */}
            <Link to={node.fields.slug} css={css` text-decoration: none; color: inherit;`}>
              {/* highlight-end */}
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </Link>{" "}
            {/* highlight-line */}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query 
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) 
    {
      totalCount
      edges 
      {
        node 
        {
          id
          frontmatter 
          {
            title
            date(
              formatString: "dddd, DD [de] MMMM [de] YYYY [às] HH:mm"
              locale: "pt"
            )
          }
          fields 
          {
            slug
          }
          excerpt(truncate: true)
          html
        }
      }
      nodes 
      {
        html
      }
    }
    markdownRemark 
    {
      html
      fields 
      {
        slug
      }
      frontmatter 
      {
        date(formatString: "DD MMMM, YYYY", locale: "pt")
        title
      }
      id
    }
  }
`
