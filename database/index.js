var Sequelize = require('sequelize');
var { password } = require('./password.js');
var sequelize = new Sequelize('ProductInfo', 'postgres', 'postgres', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch(err => {
    console.error(err);
  });