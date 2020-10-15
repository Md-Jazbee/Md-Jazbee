require(`dotenv`).config({
    path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    siteMetadata: {
        // You can overwrite values here that are used for the SEO component
        // Of course you can also add new values here to query them like usual
        // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
        siteTitleAlt: `Cara - Gatsby Starter Portfolio`,
    },
    plugins: [{
            resolve: `@lekoarts/gatsby-theme-cara`,
            // See the theme's README for all available options
            options: {},
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: process.env.GOOGLE_ANALYTICS_ID,

                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-174559722-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "https://mohammadjasbeer.me",

            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Cara - @lekoarts/gatsby-theme-cara`,
                short_name: `Cara`,
                description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
                start_url: `/`,
                background_color: `#141821`,
                theme_color: `#f6ad55`,
                display: `standalone`,
                icons: [{
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
    ].filter(Boolean),
}