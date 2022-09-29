import * as React from "react"
import { Link, HeadFC } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <aside className="error profile">
        <header>
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />
          <h1>Page not found</h1>
          <p>
            Sorry 😔, we couldn’t find what you were looking for.
            <br />
            <Link to="/">Go Home</Link>
          </p>
        </header>
      </aside>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>James C Kimble :: 404 Not Found</title>
