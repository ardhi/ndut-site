module.exports = {
  schema: {
    description: 'Get record by its ID',
    tags: ['Site'],
    params: {
      type: 'object',
      properties: {
        model: {
          type: 'string',
          description: 'Model ID'
        },
        id: {
          type: 'string',
          description: 'Record ID'
        }
      }
    }
  },
  handler: async function (request, reply) {
    const { getSchemaByAlias } = this.ndutDb.helper
    const schema = getSchemaByAlias(request.params.model)
    if (!schema.expose.get) throw this.Boom.notFound('Resource not found')
    const model = this.ndutDb.helper.getModelByAlias(request.params.model, true)
    const data = await model.findById(request.params.id)
    if (!data) throw this.Boom.notFound('Record not found')
    return {
      data
    }
  }
}
