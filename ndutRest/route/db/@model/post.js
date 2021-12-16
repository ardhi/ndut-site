module.exports = {
  schema: {
    description: 'Create and persist data',
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
    if (!schema.expose.create) throw this.Boom.notFound('Resource not found')
    const model = this.ndutDb.helper.getModelByAlias(request.params.model, true)
    const data = await model.create(request.body)
    return {
      data,
      message: 'Record successfully created'
    }
  }
}
