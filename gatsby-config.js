/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`, // Makes the local files available in the data layer
      options: {
        name: `posts`,
        path: `src/posts/`,
      },
    },
    `gatsby-mdx`,
    `gatsby-plugin-mdx`, // Looks for mdx files and transform them into GraphQL nodes

  ]
}
