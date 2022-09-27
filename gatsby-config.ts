import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `James C Kimble :: Software Consultant`,
    siteUrl: `https://jckimble.com`,
  },
  graphqlTypegen: false,
  plugins: ["gatsby-plugin-sass"],
}

export default config
