module.exports = async function ({ model, body = {}, filter = {} }) {
  const supported = await this.ndutSite.helper.isSiteSupportedModel(model)
  if (supported && (filter.site || {}).id) body.siteId = filter.site.id
}
