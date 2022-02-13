module.exports = async function beforeFindOneSite ({ model, params = {}, filter = {} }) {
  const supported = await this.ndutSite.helper.isSiteSupportedModel(model)
  params.where = params.where || {}
  if (supported && (filter.site || {}).id) params.where.siteId = filter.site.id
}
