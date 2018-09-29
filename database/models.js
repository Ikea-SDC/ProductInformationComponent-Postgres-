require('./index.js')

module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    productId: DataTypes.INTEGER,
    prod_max: DataTypes.INTEGER,
    prod_width: DataTypes.INTEGER,
    prod_diameter: DataTypes.INTEGER,
    prod_cord_length: DataTypes.INTEGER,
    prod_power: DataTypes.INTEGER,
    prod_assembly: DataTypes.BOOLEAN,
    prod_designer: DataTypes.STRING,
    bullets: DataTypes.ARRAY(DataTypes.STRING),
    good_to_know: DataTypes.ARRAY(DataTypes.STRING),
    care_instructions: DataTypes.ARRAY(DataTypes.STRING),
    weight: DataTypes.DataTypes.ARRAY(DataTypes.STRING),
    shade: DataTypes.ARRAY(DataTypes.STRING),
    tube: DataTypes.ARRAY(DataTypes.STRING),
    instructions: DataTypes.STRING,
    manual: DataTypes.STRING,
    article_number: DataTypes.INTEGER,
    packages: DataTypes.INTEGER,
    package_width: DataTypes.INTEGER,
    package_height: DataTypes.INTEGER,
    package_length: DataTypes.INTEGER,
    package_weight: DataTypes.INTEGER
  })

  const review = sequelize.define('review', {
    productId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review_body: DataTypes.STRING,
    review_title: DataTypes.STRING,
    created_at: DataTypes.STRING,
    recommended: DataTypes.BOOLEAN,
    helpful_yes: DataTypes.INTEGER,
    helpful_no: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    quality: DataTypes.INTEGER,
    appearance: DataTypes.INTEGER,
    ease: DataTypes.INTEGER,
    expected: DataTypes.INTEGER,
    username: DataTypes.STRING
  })
}