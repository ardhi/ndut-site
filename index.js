const plugin = require('./lib/plugin')

module.exports = async function (fastify) {
  const name = 'ndut-site'
  const dependency = ['ndut-db']
  return { name, plugin, dependency }
}
