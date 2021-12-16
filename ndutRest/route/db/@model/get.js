module.exports = {
  schema: {
    description: 'Get records. Use query string to filter, sort and pagination',
    tags: ['Site'],
    params: {
      type: 'object',
      properties: {
        model: {
          type: 'string',
          description: 'Model ID'
        }
      }
    }
  },
  handler: async function (request, reply) {
    const { getSchemaByAlias } = this.ndutDb.helper
    const schema = getSchemaByAlias(request.params.model)
    if (!schema.expose.list) throw this.Boom.notFound('Resource not found')
    const { parseQsForList } = this.ndutRest.helper
    const model = this.ndutDb.helper.getModelByAlias(request.params.model, true)
    const { limit, page, skip, order, where } = parseQsForList(request, model.name)
    const total = await model.count(where)
    const data = await model.find({ limit, order, skip, where })
    return {
      data,
      total,
      totalPage: Math.floor((total + limit - 1) / limit),
      pageSize: limit,
      page
    }
  }
}
