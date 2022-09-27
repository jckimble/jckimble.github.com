import React from "react"
import { HeadFC } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fab, fas)

import "../index.scss"

function Home() {
  return (
    <>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <main className="profile">
        <header>
          <ul className="profile-vcf">
            <li>
              <a href="#qrcode" data-tooltip="QrCode">
                <FontAwesomeIcon icon={["fas", "qrcode"]} />
              </a>
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
          <a className="profile-img" href="https://jckimble.com/">
            <img
              src="https://0.gravatar.com/avatar/43799da335050c4cebcc859ef15dd939?s=150"
              alt="James C Kimble"
              data-vcard="photo"
            />
          </a>
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
        <ul className="profile-social-links">
          <li>
            <a href="https://twitter.com/jckimble601" data-tooltip="Twitter">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/james-kimble-865092212/"
              data-tooltip="LinkedIn"
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
          </li>
          <li>
            <a href="https://github.com/jckimble" data-tooltip="GitHub">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
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
      </main>
      <a href="#" className="lightbox" id="qrcode">
        <img src="./qr-code.svg" height={500} />
      </a>
    </>
  )
}

export default Home

export const Head: HeadFC = () => (
  <title>James C Kimble :: Software Consultant</title>
)
