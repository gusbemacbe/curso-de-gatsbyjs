module.exports = 
{
  pathPrefix: "/curso-de-gatsbyjs",
  siteMetadata: 
  {
    title: `Blog do Gustavo Costa`,
    titleTemplate: "%s · O Aventureiro do GatsbyJS",
    description: `O aventureiro testando e enfrentando as dificuldades de mexer com o GatsbyJS`,
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: 
      {
        siteUrl: `https://gusbemacbe.pt`,
      },
    },

    'gatsby-plugin-dark-mode',

    {
      resolve: 'gatsby-plugin-html-attributes',
      options: 
      {
        lang: 'pt'
      }
    },

    {
      resolve: 'gatsby-plugin-i18n',
      options: 
      {        
        langKeyDefault: 'pt',
        langKeyForNull: 'pt',
        prefixDefault: false,
        useLangKeyLayout: false,
        markdownRemark: 
        {
          postPage: 'src/templates/blog-post.js',
          query: `
            {
              allMarkdownRemark 
              {
                edges 
                {
                  node 
                  {
                    fields 
                    {
                      slug,
                      langKey
                    }
                  }
                }
              }
            }
          `
        }
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: 
      {
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
        name: `Blog do Gustavo`,
        short_name: `gusbemacbe.pt`,
        start_url: `/`,
        theme_color: `#663399`,
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: 
      {
        host: 'https://www.gusbemacbe.pt',
        sitemap: 'https://www.gusbemacbe.pt/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },

    {
      resolve: `gatsby-plugin-sass`,
      options: 
      {
        cssLoaderOptions: 
        {
          camelCase: false,
        },
        includePaths: ["src/styles/sass/compile.scss"],
      },
    },

    // {
    //   resolve: `gatsby-plugin-styled-jsx`,
    //   options: 
    //   {
    //     jsxPlugins: ["styled-jsx-plugin-postcss"],
    //     optimizeForSpeed: true,
    //     sourceMaps: false,
    //     vendorPrefixes: true,
    //   },
    // },

    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-theme-style-guide',
      options: 
      {
        basePath: '/design-system',
      }
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: 
      {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: 
      {
        plugins: 
        [
          {
            resolve: `gatsby-remark-images`,
            options: 
            {
              maxWidth: 1280,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: 
            {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-jsx`,
    `gatsby-remark-responsive-iframe`,
    `gatsby-transformer-sharp`,
    // `styled-jsx-plugin-postcss`,
    `theme-ui`
  ],
}
