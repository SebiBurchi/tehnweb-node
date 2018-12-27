module.exports = function (sequelize, DataTypes) {
var Review = sequelize.define("Review", {
   stars: DataTypes.INTEGER,
   body: DataTypes.STRING,
   author: DataTypes.STRING
   }, {
       classMethods: { //metodele unui obiect de tip Review
            associate: function(models) { //relatie 1:1
                Review.belongsTo(models.Book)//, {as: 'book', useJunctionTable: false});
            } 
        }
    });
    
    return Review;
}