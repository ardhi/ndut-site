const handleOnRequest = require('../../lib/handle-on-request')

module.exports = async function (request, reply) {
  handleOnRequest.call(this, request, reply)
}
