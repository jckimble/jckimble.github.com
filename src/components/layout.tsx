import React, { ReactNode } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fab, fas)

import "./layout.scss"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="site-nav">
        <div className="nav-logo">
          JCK<span>.</span>
        </div>
        <div className="nav-links">
          <a href="/#services">Services</a>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#contact" className="nav-cta">Hire Me</a>
        </div>
      </nav>
      {children}
      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} James C Kimble &mdash; Software
          Consultant &mdash;{" "}
          <a href="mailto:me@jckimble.com">me@jckimble.com</a>
        </p>
      </footer>
    </>
  )
}
