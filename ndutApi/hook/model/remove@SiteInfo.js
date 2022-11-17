module.exports = async function beforeRemoveAuth ({ model, params = {}, filter = {} }) {
  if (['DEFAULT'].includes(params.id)) throw this.Boom.forbidden('cantRemoveDefaultSite', { ndut: 'site' })
}
