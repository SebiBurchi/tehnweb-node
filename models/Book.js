
module.exports = function (sequelize, DataTypes) { //construim obiectul de tip Book si tabela in BD
    var Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    image: DataTypes.STRING
    }, { 
        //definim metodele asociate obiectului Book
       classMethods: { //metodele unui obiect de tip Book
            //functie pentru definirea relatiei 1:M
            associate: function(models) { 
                Book.hasMany(models.Review )//, { as : 'reviews', useJunctionTable: false });
            },
        }
    })
    
    return Book; //ceea ce exporta modelul nostru (fisierul)
}