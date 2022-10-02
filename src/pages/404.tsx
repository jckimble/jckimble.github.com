import * as React from "react"
import { HeadFC } from "gatsby"
import Link from "../components/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <main>
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
