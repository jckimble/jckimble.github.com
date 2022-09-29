import React from "react"
import { HeadFC, graphql, Link } from "gatsby"

import Layout from "../../components/layout"

function Blog({ data }: { data: any }) {
  const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" })
  return (
    <Layout>
      <main className="blog">
        {data.allMarkdownRemark.edges.map((edge: any) => (
          <article key={edge.node.id}>
            <header>
              <h2>
                <Link to={edge.node.frontmatter.slug}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <h3>{edge.node.frontmatter.date}</h3>
              <small>
                Reading Time: {rtf1.format(edge.node.timeToRead, "minute")}
              </small>
            </header>
            <section>
              <p>{edge.node.excerpt}</p>
            </section>
          </article>
        ))}
      </main>
    </Layout>
  )
}

export default Blog

export const Head: HeadFC = () => <title>James C Kimble :: Blog</title>

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
