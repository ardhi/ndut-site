const fp = require('fastify-plugin')
const isSiteSupportedModel = require('./is-site-supported-model')

module.exports = fp(async function (fastify, options) {
  const { _, bind } = fastify.ndut.helper
  const helper = bind(fastify, {
    isSiteSupportedModel
  })

  fastify.decorate('ndutSite', { helper })
})
