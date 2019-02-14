const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `WeMe`,
    description: `WeMe Project is a joint project between The University of Turku and Fudan University studying and helping elderly people that are socially isolated.`,
    author: `WeMe Project`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: 
        {
          name: `images`,
          path: path.join(__dirname, 'src', 'assets', 'images'),
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
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/assets/css/style.css'], // Purge only tailwind
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
