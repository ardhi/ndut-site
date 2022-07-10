module.exports = {
  schema: {
    description: 'Update your site profile',
    tags: ['Site']
  },
  handler: async function (request, reply) {
    const { _ } = this.ndut.helper
    const { t } = this.ndutI18N.helper
    const { getModelByAlias } = this.ndutDb.helper
    const body = _.omit(request.body, ['hostname', 'status', 'id', 'siteId'])
    const model = await getModelByAlias('site-info')
    const params = { id: request.site.id }
    const opts = { message: t('profileUpdated', { ns: 'site' }) }
    return await this.ndutApi.helper.update({ model, params, body, opts })
  }
}
