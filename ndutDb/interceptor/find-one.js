module.exports = async function (model, request, ...args) {
  if (this.ndutSite.helper.isSiteSupportedModel(model))
    args[0] = { where: { siteId: request.site.id } }
  return args
}
