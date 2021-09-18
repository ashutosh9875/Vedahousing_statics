module.exports = {
  siteMetadata: {
    title: `Vedahousing.com`,
    description: `Rent in Varanasi, Rent in Mahmoorganj, Rent Mahmoorganj, Rent Varanasi, 1 BHK, 2BHK, 1BHK, 2BHK 3BHK 3 BHK Property Buy Sigra sigra varanasi mahmoorganj 2bhk 3bhk 1bhk .`,
    author: `@Vedahousing`,
    siteUrl: `https://vedahousing.com`,
    keywords: `Rent in Varanasi, Rent in Mahmoorganj, Rent Mahmoorganj, Rent Varanasi, 1 BHK, 2BHK, 1BHK, 2BHK, 3BHK, 3 BHK, Property, Buy Sigra, sigra, varanasi, mahmoorganj, 2bhk, 3bhk, 1bhk, vedahousing, veda housing, varanasi engineering design assocates`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/vedahousing-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
