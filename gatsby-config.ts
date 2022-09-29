import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `James C Kimble :: Software Consultant`,
    siteUrl: `https://jckimble.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: __dirname + "/src/posts",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-prismjs"],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `jckimble-1`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-HPCFMK48KC"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
  ],
}

export default config
