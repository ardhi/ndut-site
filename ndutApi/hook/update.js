module.exports = async function (model, request, ...args) {
  const site = await this.ndutSite.helper.isSiteSupportedModel(model)
  args[0] = args[0] || {}
  if (site && request.site) args[0].siteId = request.site.id
  args[1] = args[1] || {}
  args[2] = args[2] || {}
  if (request.site) args[2].siteId = request.site.id
  return args
}
