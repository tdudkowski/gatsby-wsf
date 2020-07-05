module.exports = {
  siteMetadata: {
    title: `Wrocławskie Stowarzyszenie Fortyfikacyjne`,
    description: `strona Stowarzyszenia`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsby-wsf.netlify.app`,
  },
  pathPrefix: "/gatsby-wsf",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        // path: path.join(__dirname, `static`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Germania One`,
          //`source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-2105423-14`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/standard-sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ["/404/"],
        query: `
            {
              site {
                siteMetadata {
                  siteUrl
                }
              }
              allSitePage {
                nodes {
                  path
                }
              }
          }`,
        resolveSiteUrl: ({ site, allSitePage }) => {
          //you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    "gatsby-plugin-netlify-cache",
    `gatsby-transformer-xml`,
  ],
}
