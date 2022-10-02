import React from "react"
import { HeadFC } from "gatsby"
import Link from "../components/link"
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
              <Link
                to="/jckimble.vcf"
                download="jckimble.vcf"
                data-tooltip="vCard"
              >
                <FontAwesomeIcon icon={["fas", "address-card"]} />
              </Link>
            </li>
          </ul>
          <img src="/qr-code.svg" height={500} />
        </header>
        <footer>
          <ul>
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
              <Link to="/blog" data-tooltip="Blog">
                <FontAwesomeIcon icon={["fas", "blog"]} />
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
        </footer>
      </main>
    </Layout>
  )
}

export default Home

export const Head: HeadFC = () => (
  <title>James C Kimble :: Software Consultant</title>
)
