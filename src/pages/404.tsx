import * as React from "react"
import { Link, HeadFC } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas)

import "../index.scss"

const NotFoundPage = () => {
  return (
    <>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
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
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>James C Kimble :: 404 Not Found</title>
