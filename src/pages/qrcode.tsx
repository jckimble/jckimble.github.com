import React from "react"
import { HeadFC } from "gatsby"
import Link from "../components/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"

function QRCode() {
  return (
    <Layout>
      <div className="qr-page">
        <div className="qr-container">
          <h1>James C Kimble</h1>
          <p>Software Consultant &mdash; jckimble.com</p>
          <img src="/qr-code.svg" alt="QR Code linking to jckimble.com" />
          <br />
          <Link to="/" className="qr-back">
            <FontAwesomeIcon icon={["fas", "arrow-left"]} />
            Back to site
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default QRCode

export const Head: HeadFC = () => (
  <title>QR Code | James C Kimble</title>
)
