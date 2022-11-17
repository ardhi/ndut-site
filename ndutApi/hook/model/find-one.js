module.exports = async function beforeFindOneSite ({ model, params = {}, filter = {} }) {
  const { getNdutConfig } = this.ndut.helper
  const cfg = getNdutConfig('ndut-site')
  const supported = await this.ndutSite.helper.isSiteSupportedModel(model)
  params.where = params.where || {}
  if (!cfg.singleSite && supported && (filter.site || {}).id) params.where.siteId = filter.site.id
}
