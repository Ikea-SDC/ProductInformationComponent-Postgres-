const mongoose = require('mongoose');


const productsSchema = mongoose.Schema({
  productId: Number,
  product_info: {
    product_dimensions: {
      max: Number,
      width: Number,
      diameter: Number,
      cord_length: Number,
      power: Number,
      assembly: Boolean,
      designer: String
    },
    bullets: [String],
    good_to_know: [String],
    care_instructions: [String]
  },
  materials_env: {
    weight: [String],
    shade: [String],
    tube: [String]
  },
  assembly_docs: {
    instructions: String,
    manual: String
  },
  package_details: {
    article_number: Number,
    packaged: Number,
    width: Number,
    height: Number,
    length: Number,
    weight: Number
  }
}); 

const Product = mongoose.model('Product', productsSchema);

module.exports = Product;
