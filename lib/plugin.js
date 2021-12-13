const { fp, bind } = require('ndut-helper')
const isSiteSupportedModel = require('./is-site-supported-model')

module.exports = fp(async function (fastify, options) {
  const helper = bind(fastify, {
    isSiteSupportedModel
  })

  fastify.decorate('ndutSite', { helper })
})
