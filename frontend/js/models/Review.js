module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Review', {
        stars: DataTypes.INTEGER,
        body: DataTypes.TEXT,
        author: DataTypes.STRING
    })
}