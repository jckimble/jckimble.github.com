import React from "react"
import { HeadFC, Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"

function Home() {
  return (
    <Layout>
      <main>
        <header>
          <ul>
            <li>
              <Link to="/" data-tooltip="Home">
                <FontAwesomeIcon icon={["fas", "user"]} />
              </Link>
            </li>
            <li>
              <a
                href="/jckimble.vcf"
                download="jckimble.vcf"
                data-tooltip="vCard"
              >
                <FontAwesomeIcon icon={["fas", "address-card"]} />
              </a>
            </li>
          </ul>
          <img src="/qr-code.svg" height={500} />
        </header>
        <footer>
          <ul>
            <li>
              <OutboundLink
                href="https://twitter.com/jckimble601"
                data-tooltip="Twitter"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.linkedin.com/in/james-kimble-865092212/"
                data-tooltip="LinkedIn"
              >
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://github.com/jckimble"
                data-tooltip="GitHub"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </OutboundLink>
            </li>
            <li>
              <Link to="/blog" data-tooltip="Blog">
                <FontAwesomeIcon icon={["fas", "blog"]} />
              </Link>
            </li>
            <li>
              <a href="mailto:me@jckimble.com" data-tooltip="Email">
                <FontAwesomeIcon icon={["fas", "envelope"]} />
              </a>
            </li>
            <li>
              <a href="tel:+16017484093" data-tooltip="Phone">
                <FontAwesomeIcon icon={["fas", "phone"]} />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </Layout>
  )
}

export default Home

export const Head: HeadFC = () => (
  <title>James C Kimble :: Software Consultant</title>
)
