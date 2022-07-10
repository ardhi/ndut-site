module.exports = {
  schema: {
    description: 'Show your site profile',
    tags: ['Site']
  },
  handler: async function (request, reply) {
    return {
      data: request.site
    }
  }
}
