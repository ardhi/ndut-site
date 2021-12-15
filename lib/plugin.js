const isSiteSupportedModel = require('./is-site-supported-model')

module.exports = async function (fastify, options) {
  const { _, bind } = fastify.ndut.helper
  const helper = bind(fastify, {
    isSiteSupportedModel
  })

  fastify.decorate('ndutSite', { helper })
}
