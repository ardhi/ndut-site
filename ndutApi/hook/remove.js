module.exports = async function ({ model, params = {}, filter = {} }) {
  const supported = await this.ndutSite.helper.isSiteSupportedModel(model)
  if (supported && (filter.site || {}).id) params.siteId = filter.site.id
}
