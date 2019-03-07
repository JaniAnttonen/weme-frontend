const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `WeMe`,
    description: `WeMe Project is a joint project between The University of Turku and Fudan University studying and helping elderly people that are socially isolated.`,
    author: `WeMe Project`,
  },
  pathPrefix: '/weme-frontend',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
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
        icon: `src/assets/images/logo-small.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/assets/css/style.css'],
        whitelist: ["bg-green", "bg-orange", "bg-red", "bg-red-dark", "bg-red-light", "bg-blue-light", "bg-yellow-light", "bg-orange-light"],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
