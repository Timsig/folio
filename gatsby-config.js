module.exports = {
  siteMetadata: {
    title: `Tim Signore`,
    siteURL: `timsignore.com`,
    description: `UX designer and front end developer`
  },
  plugins: [`gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/folio`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ]
}