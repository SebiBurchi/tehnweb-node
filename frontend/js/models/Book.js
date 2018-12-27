module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Book', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.FLOAT,
        image: DataTypes.STRING
    })
}