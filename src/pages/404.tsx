import * as React from "react"
import { HeadFC } from "gatsby"
import Link from "../components/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="error-page">
        <div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist or has moved.</p>
          <Link to="/" className="btn btn-primary">
            <FontAwesomeIcon icon={["fas", "arrow-left"]} />
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>404 Not Found | James C Kimble</title>
