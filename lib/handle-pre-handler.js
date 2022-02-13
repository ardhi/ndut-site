module.exports = async function (request, reply) {
  const { getNdutConfig } = this.ndut.helper
  const hostname = request.hostname.split(':')[0]
  const cfg = getNdutConfig('ndut-site')
  const where = cfg.singleSite ? { id: 1 } : { hostname, status: 'ENABLED' }
  const rec = await this.ndutDb.model.SiteInfo.findOne({ where })
  if (!rec) throw new Error('unknownSiteOrDisabled')
  request.site = rec
}
