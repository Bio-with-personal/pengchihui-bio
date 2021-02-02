// const SentryWebpackPlugin = require('@sentry/webpack-plugin')
// const {
//   NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
//   SENTRY_ORG,
//   SENTRY_PROJECT,
//   SENTRY_AUTH_TOKEN,
//   NODE_ENV,
//   VERCEL_GITHUB_COMMIT_SHA,
//   VERCEL_GITLAB_COMMIT_SHA,
//   VERCEL_BITBUCKET_COMMIT_SHA,
// } = process.env

// const COMMIT_SHA =
//   VERCEL_GITHUB_COMMIT_SHA ||
//   VERCEL_GITLAB_COMMIT_SHA ||
//   VERCEL_BITBUCKET_COMMIT_SHA

// process.env.SENTRY_DSN = SENTRY_DSN
// const basePath = ''

module.exports = {
  // productionBrowserSourceMaps: true,
  // env: {
  //   NEXT_PUBLIC_COMMIT_SHA: COMMIT_SHA,
  // },
  webpack: (config, options) => {
    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
      config.node = { fs: 'empty' }
    }

    // config.plugins.push(
    //   new options.webpack.DefinePlugin({
    //     'process.env.NEXT_IS_SERVER': JSON.stringify(
    //       options.isServer.toString()
    //     ),
    //   })
    // )

    // if (
    //   SENTRY_DSN &&
    //   SENTRY_ORG &&
    //   SENTRY_PROJECT &&
    //   SENTRY_AUTH_TOKEN &&
    //   COMMIT_SHA &&
    //   NODE_ENV === 'production'
    // ) {
    //   config.plugins.push(
    //     new SentryWebpackPlugin({
    //       include: '.next',
    //       ignore: ['node_modules'],
    //       stripPrefix: ['webpack://_N_E/'],
    //       urlPrefix: `~${basePath}/_next`,
    //       release: COMMIT_SHA,
    //     })
    //   )
    // }
    return config
  },
  basePath,
}