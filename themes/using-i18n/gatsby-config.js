const languages = require('./src/data/languages');

module.exports = 
{
  siteMetadata: 
  {
    title: `Suru++ Folders`,
    languages
  },
  plugins: 
  [
    // Este plugin precisa estar no primeiro lugar
    // This plugin needs to be in the first place.
    `gatsby-plugin-react-helmet`,

    // {
    //   resolve: `gatsby-plugin-i18n`,
    //   options: 
    //   {
    //     langKeyForNull: 'any',
    //     langKeyDefault: languages.defaultLangKey,
    //     useLangKeyLayout: true,
    //     prefixDefault: false,
    //   }
    // },

    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        path: `${__dirname}/config/translations`,
        name: `translations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },

    `gatsby-transformer-json`,

    // Este plugin precisa estar no último lugar
    // This plugin needs to be in the last place.
    `gatsby-plugin-no-javascript`
  ],
}