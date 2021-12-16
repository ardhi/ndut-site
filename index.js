module.exports = async function () {
  const { fp } = this.ndut.helper
  const name = 'ndut-site'
  const dependency = ['ndut-db']
  const plugin = fp(require('./lib/plugin'))
  return { name, plugin, dependency }
}
