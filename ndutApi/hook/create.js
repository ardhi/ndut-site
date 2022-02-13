module.exports = async function beforeCreateSite ({ model, body = {}, filter = {} }) {
  const supported = await this.ndutSite.helper.isSiteSupportedModel(model)
  if (supported && (filter.site || {}).id && !body.siteId) body.siteId = filter.site.id
}
