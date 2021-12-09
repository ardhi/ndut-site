module.exports = async function (fastify) {
  const name = 'ndut-site'
  const dependency = ['ndut-db']
  return { name, dependency }
}
