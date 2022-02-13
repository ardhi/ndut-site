const preHandler = require('../../lib/handle-pre-handler')

module.exports = {
  level: 20,
  handler: async function (request, reply) {
    await preHandler.call(this, request, reply)
  }
}
