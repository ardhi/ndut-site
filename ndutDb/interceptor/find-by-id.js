module.exports = async function (model, request, ...args) {
  if (this.ndutSite.helper.isSiteSupportedModel(model))
    args[0] = { where: { siteId: request.site.id, id: request.params.id } }
  else
    args[0] = { where: { id: request.params.id } }
  return args
}
