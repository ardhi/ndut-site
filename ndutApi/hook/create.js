module.exports = async function (model, request, ...args) {
  const site = await this.ndutSite.helper.isSiteSupportedModel(model)
  args[0] = args[0] || {}
  if (site && request.site) args[0].siteId = request.site.id
  args[1] = args[1] || {}
  if (request.site) args[1].siteId = request.site.id
  return args
}
