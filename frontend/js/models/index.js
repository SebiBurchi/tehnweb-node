//import all models and creates relationships
var Sequelize = require('sequelize');
var config = require('config').database; //use node-config to handle environments

//initialize database connection
var sequelize = new Sequelize (config.name, config.username, config.password, config.options);

//load models
var models = ['Book', 'Review'];
models.forEach(function (model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

//describe relationships
(function (m) {
    m.Review.belongsTo(m.Book);
    m.Book.hasMany(m.Review);
})

//export connection
module.exports.sequelize = sequelize;

