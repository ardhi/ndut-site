module.exports = async function beforeFindSite ({ model, params = {}, filter = {} }) {
  const supported = await this.ndutSite.helper.isSiteSupportedModel(model)
  params.where = params.where || {}
  if (supported && (filter.site || {}).id) {
    filter.orWhere.push({ siteId: filter.site.id }, { siteId: null })
  }
}
