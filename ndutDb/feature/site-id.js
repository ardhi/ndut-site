module.exports = async function ({ builder, model, schema, options }) {
  if (!model.definition.properties.siteId) {
    builder.defineProperty(schema.name, 'siteId', {
      type: Number,
      required: false,
      index: true,
      default: 0,
      scale: 0
    })
  }
}