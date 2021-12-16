module.exports = {
  schema: {
    description: 'Remove record by its ID',
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
    if (!schema.expose.remove) throw this.Boom.notFound('Resource not found')
    const model = this.ndutDb.helper.getModelByAlias(request.params.model, true)
    const id = request.params.id
    const existing = await model.findById(id)
    if (!existing) throw this.Boom.notFound('Record not found')
    await model.remove({ id })
    return {
      data: existing,
      message: 'Record successfully removed'
    }
  }
}
