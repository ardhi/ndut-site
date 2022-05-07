module.exports = async function (request, reply) {
  const { getNdutConfig } = this.ndut.helper
  const hostname = request.hostname.split(':')[0]
  const cfg = getNdutConfig('ndut-site')
  const where = cfg.singleSite ? { id: 'default' } : { hostname, status: 'ENABLED' }
  const rec = await this.ndutDb.model.SiteInfo.findOne({ params: { where } })
  if (!rec) throw new Error('unknownSiteOrDisabled')
  request.site = rec
}
