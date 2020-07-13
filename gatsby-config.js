module.exports = {
  siteMetadata: {
    title: `Sushil Buragute`,
    name: `Sushil Buragute`,
    siteUrl: `https://sushilburagute.github.io`,
    description: `Hey I'm Sushil⚡ I'm an UI/UX designer and a Web Dev working my way up the ladder in ReactJS and the MERN stack. `,
    hero: {
      heading: `Hi! I'm Sushil. I communicate with Machines using Code and to Humans using Design.`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-163929831-3",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
      },
    },
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
