module.exports = async function (request, reply) {
  const hostname = request.hostname.split(':')[0]
  const rec = await this.ndutDb.model.SiteInfo.findOne({ where: { hostname, status: 'ENABLED' } })
  if (!rec) throw new Error('Unknown site or site is currently disabled')
  request.site = rec
}
