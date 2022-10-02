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
              <Link to="qrcode" data-tooltip="QrCode">
                <FontAwesomeIcon icon={["fas", "qrcode"]} />
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
          <Link className="profile-img" to="/">
            <img
              src="https://0.gravatar.com/avatar/43799da335050c4cebcc859ef15dd939?s=150"
              alt="James C Kimble"
              data-vcard="photo"
            />
          </Link>
          <h1>James C Kimble</h1>
          <h2>Software Consultant</h2>
          <p>
            James is a passionate software engineer &amp; pool player that
            dedicates most of his time between automating everything he can and
            playing pool.
          </p>
          <p>
            His primary focus is in security and automation. Even the best
            written and looking sites are worthless if they are easily hacked.
            The human element is always the weakest attack point.
          </p>
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
