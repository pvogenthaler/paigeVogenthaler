module.exports = {
    siteMetadata: {
        title: `Paige Vogenthaler`,
        language: `english`,
        author: `Paige Vogenthaler`,
        designer: `Paige Vogenthaler`,
        publisher: `Paige Vogenthaler`,
        noemailcollection: `http://www.unspam.com/noemailcollection/`,
        viewport: `width=device-width, initial-scale=1`,
        description: `The portfolio of Paige Vogenthaler`,
        subject: `The portfolio of Paige Vogenthaler`,
        abstract: `The portfolio of Paige Vogenthaler`,
        topic: `The portfolio of Paige Vogenthaler`,
        keywords: `Software Engineer`,
        robots: `index,follow`,
        googlebot: `index,follow`,
        distribution: `web`,
        HandheldFriendly: `true`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
                options: {
                path: `${__dirname}/src/assets`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `paige-vogenthaler`,
                short_name: `paige-vogenthaler`,
                start_url: `/`,
                icon: `src/assets/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-148896184-1",
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/BlogLayout.jsx')
                }
            }
        },
    ],
}
