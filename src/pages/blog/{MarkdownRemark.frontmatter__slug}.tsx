import React from "react"
import { HeadFC } from "gatsby"
import { graphql } from "gatsby"
import config from "../../../gatsby-config"
import { Disqus } from "gatsby-plugin-disqus"
import Layout from "../../components/layout"

export default function Post({ data }: { data: any }) {
  const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" })
  const { markdownRemark: post } = data
  let disqusConfig = {
    url: `${config.siteMetadata?.siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <Layout>
      <main className="blog">
        <article key={post.id}>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.date}</h2>
            <small>
              Reading Time: {rtf1.format(post.timeToRead, "minute")}
            </small>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }}></section>
        </article>
        <aside className="comments">
          <Disqus config={disqusConfig} />
        </aside>
      </main>
    </Layout>
  )
}

export const Head: HeadFC = ({ data }: { data: any }) => (
  <title>James C Kimble :: {data.markdownRemark.frontmatter.title}</title>
)

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
