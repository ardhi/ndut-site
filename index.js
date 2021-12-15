module.exports = async function (fastify) {
  const { fp } = fastify.ndut.helper
  const name = 'ndut-site'
  const dependency = ['ndut-db']
  const plugin = fp(require('./lib/plugin'))
  return { name, plugin, dependency }
}
