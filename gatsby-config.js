module.exports = {
  siteMetadata: {
    title: `Sushil Buragute`,
    name: `Sushil Buragute`,
    siteUrl: `https://sushilburagute.github.io`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Hi! I'm Sushil. I communicate with Machines using Code and with Humans using Design.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/codetastic1`,
      },
      {
        name: `github`,
        url: `https://github.com/sushilburagute`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/sushil.buragute`,
      },
      {
        name: `linkedin`,
        url: `https://in.linkedin.com/in/sushil-buragute`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/sushilburagute`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
