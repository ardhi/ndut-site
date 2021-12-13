module.exports = {
  schema: {
    description: 'Update record by its ID',
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
    const { _ } = this.ndut.helper
    const id = request.params.id
    const model = this.ndutDb.helper.getModelByAlias(request.params.model, true)
    const existing = await model.findById(id)
    if (!existing) throw new this.Boom.Boom('Record not found', { statusCode: 404 })
    await model.update({ id }, _.omit(request.body, 'id'))
    const data = await model.findById(id)
    return {
      data,
      message: 'Record successfully updated'
    }
  }
}
