import React, { ReactNode } from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import config from "../../gatsby-config"

function isExternal(url: string) {
  var location = new URL(config.siteMetadata?.siteUrl as string)
  var match =
    url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/) ||
    []
  if (
    typeof match[1] === "string" &&
    match[1].length > 0 &&
    match[1].toLowerCase() !== location.protocol
  )
    return true
  if (
    typeof match[2] === "string" &&
    match[2].length > 0 &&
    match[2].replace(
      new RegExp(
        ":(" + { "http:": 80, "https:": 443 }[location.protocol] + ")?$"
      ),
      ""
    ) !== location.host
  )
    return true
  return false
}

export default function Link({
  children,
  ...props
}: {
  children: ReactNode
  to: string
  className?: string
}) {
  const { to, ...rest } = props
  if (isExternal(to)) {
    return (
      <OutboundLink href={to} {...rest}>
        {children}
      </OutboundLink>
    )
  }
  return (
    <GatsbyLink to={to} {...rest}>
      {children}
    </GatsbyLink>
  )
}
Link.propTypes = {
  to: PropTypes.string,
}
