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
    const model = this.ndutDb.helper.getModelByAlias(request.params.model, true)
    const id = request.params.id
    const existing = await model.findById(id)
    if (!existing) throw new this.Boom.Boom('Record not found', { statusCode: 404 })
    await model.remove({ id })
    return {
      data: existing,
      message: 'Record successfully removed'
    }
  }
}
