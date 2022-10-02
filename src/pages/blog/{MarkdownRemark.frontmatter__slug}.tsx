import React from "react"
import { HeadFC } from "gatsby"
import { graphql } from "gatsby"
import config from "../../../gatsby-config"
import { Disqus } from "gatsby-plugin-disqus"
import Link from "../../components/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../../components/layout"

export default function Post({ location, data }: { location: any; data: any }) {
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
        <header>
          <ul>
            <li>
              <Link
                to="/jckimble.vcf"
                download="jckimble.vcf"
                data-tooltip="vCard"
              >
                <FontAwesomeIcon icon={["fas", "address-card"]} />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/jckimble601" data-tooltip="Twitter">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/james-kimble-865092212/"
                data-tooltip="LinkedIn"
              >
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/jckimble" data-tooltip="GitHub">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </Link>
            </li>
            <li>
              <Link to="mailto:me@jckimble.com" data-tooltip="Email">
                <FontAwesomeIcon icon={["fas", "envelope"]} />
              </Link>
            </li>
            <li>
              <Link to="tel:+16017484093" data-tooltip="Phone">
                <FontAwesomeIcon icon={["fas", "phone"]} />
              </Link>
            </li>
          </ul>
          <Link className="profile-img" to="/">
            <img
              src="https://0.gravatar.com/avatar/43799da335050c4cebcc859ef15dd939?s=150"
              alt="James C Kimble"
              data-vcard="photo"
            />
          </Link>
          <h1>James C Kimble</h1>
          <h2>Software Consultant</h2>
        </header>
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
        <aside>
          <Disqus config={disqusConfig} />
        </aside>
        <footer>&copy; 2022 James C Kimble. All Rights Reserved</footer>
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
