module.exports = 
{
  pathPrefix: "/suru-plus-folders",
  siteMetadata: 
  {
    title: `Suru++ Folders`,
    titleTemplate: "Folder colour switcher",
    description: `Suru++ Folders is a bash script that allows changing the color of folders`,
    siteUrl: "https://gusbemacbe.pt",
    author: 
    {
      name: "Gustavo Costa",
      url: "https://twitter.com/gusbemacbe",
      email: "gusbemacbe@gmail.com",
    },
    social: 
    {
      github: "https://github.com/gusbemacbe",
      twitter: "https://twitter.com/gusbemacbe",
    },
  },
  plugins: 
  [
    // Este plugin precisa estar no primeiro lugar
    // This plugin needs to be in the first place.
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: 
      {
        name: 'Suru++ Folders',
        short_name: 'Suru++ Folders',
        start_url: '/suru-plus-folders',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-mdx`,

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: 
      {
        name: `suru-plus-folders`,
        short_name: `folders`,
        start_url: `/suru-plus-folders`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        path: `${__dirname}/locale`,
        name: `locale`,
      },
    },
    
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,

    {
      resolve: `@wapps/gatsby-plugin-i18next`,
      options: 
      {
        availableLngs: [`en`, `el`],
        fallbackLng: `el`,
        i18nextOptions: 
        {
          debug: false,
        },
      },
    },

    // Este plugin precisa estar no último lugar
    // This plugin needs to be in the last place.
    `gatsby-plugin-offline`
  ],
}