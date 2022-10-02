import * as React from "react"
import { Link, HeadFC } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <main>
        <header>
          <ul>
            <li>
              <a
                href="/jckimble.vcf"
                download="jckimble.vcf"
                data-tooltip="vCard"
              >
                <FontAwesomeIcon icon={["fas", "address-card"]} />
              </a>
            </li>
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
          <a className="profile-img" href="https://jckimble.com/">
            <img
              src="https://0.gravatar.com/avatar/43799da335050c4cebcc859ef15dd939?s=150"
              alt="James C Kimble"
              data-vcard="photo"
            />
          </a>
          <h1>James C Kimble</h1>
          <h2>Software Consultant</h2>
        </header>
        <aside className="error">
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />
          <h1>Page not found</h1>
          <p>
            Sorry 😔, we couldn’t find what you were looking for.
            <br />
            <Link to="/">Go Home</Link>
          </p>
        </aside>
        <footer>&copy; 2022 James C Kimble. All Rights Reserved</footer>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>James C Kimble :: 404 Not Found</title>
