import React, { ReactNode } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fab, fas)

import "./layout.scss"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {children}
    </>
  )
}
