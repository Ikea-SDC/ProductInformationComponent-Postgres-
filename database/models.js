require('./index.js')

module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    productId: DataTypes.INTEGER,
    product_info: {
      product_dimensions: {
        max: DataTypes.INTEGER,
        width: DataTypes.INTEGER,
        diameter: DataTypes.INTEGER,
        cord_length: DataTypes.INTEGER,
        power: DataTypes.INTEGER,
        assembly: DataTypes.BOOLEAN,
        designer: DataTypes.STRING
      },
      bullets: DataTypes.ARRAY(DataTypes.STRING),
      good_to_know: DataTypes.ARRAY(DataTypes.STRING),
      care_instructions: DataTypes.ARRAY(DataTypes.STRING)
    },
    materials_env: {
      weight: DataTypes.DataTypes.ARRAY(DataTypes.STRING),
      shade: DataTypes.ARRAY(DataTypes.STRING),
      tube: DataTypes.ARRAY(DataTypes.STRING)
    },
    assembly_docs: {
      instructions: DataTypes.STRING,
      manual: DataTypes.STRING
    },
    package_details: {
      article_number: DataTypes.INTEGER,
      packages: DataTypes.INTEGER,
      width: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      length: DataTypes.INTEGER,
      weight: DataTypes.INTEGER
    }
  }); 

  const review = sequelize.define('review', {
    productId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review_body: DataTypes.STRING,
    review_title: DataTypes.STRING,
    created_at: DataTypes.STRING,
    recommended: DataTypes.BOOLEAN,
    helpful: { yes: DataTypes.INTEGER, no: DataTypes.INTEGER },
    specifics: {
      value: DataTypes.INTEGER,
      quality: DataTypes.INTEGER,
      appearance: DataTypes.INTEGER,
      ease: DataTypes.INTEGER,
      expected: DataTypes.INTEGER
    },
    username: DataTypes.STRING
  })
}