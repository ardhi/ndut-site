module.exports = async function (model, request, ...args) {
  const site = await this.ndutSite.helper.isSiteSupportedModel(model)
  args[0] = args[0] || {}
  const where = args[0].where || {}
  if (site && request.site) where.siteId = request.site.id
  args[0].where = where
  // find() doesn't support options, so pushed in query/filter
  if (request.site) args[0].siteId = request.site.id
  return args
}
