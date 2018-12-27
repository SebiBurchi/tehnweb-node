var Sequelize = require("sequelize");
//var db = {};

console.log("cacat");

//initializam ORM-ul pt lucrul cu BD
var sequelize = new Sequelize ('bd_books', 'root', '', {
    dialect: 'mysql',
    port: 3306 //pt mysql
});

//definim tabelele bazei de date
var Book = sequelize.define ('Book', {
    title: { type: Sequelize.STRING},
    author: { type: Sequelize.STRING},
    description: { type: Sequelize.STRING},
    price: { type: Sequelize.DECIMAL},
    image: { type: Sequelize.STRING}
    } /*, {
       classMethods: { //metodele unui obiect de tip Book
            associate: function() { //relatie 1:M
                Book.hasMany(Review, { as : 'reviews' });
            } 
        }
    }*/
);

var Review = sequelize.define('Review', {
   stars: { type: Sequelize.INTEGER},
   body: { type: Sequelize.STRING},
   author: { type: Sequelize.STRING}
   }/*, {
       classMethods: { //metodele unui obiect de tip Book
            associate: function() { //relatie 1:M
                Book.belongsTo(Book, {as: 'book'});
            } 
        }
    }*/
);

Book.hasMany(Review);
Review.belongsTo(Book);
//ne asiguram ca tabele sunt create inainte de a insera datele

sequelize.sync();

//var seed = require("./populareBD");
//seed();

Book.create({
      title: 'Adulter',
      author: 'Paulo Coehlo',
      description: "Povestea zbuciumata si complicata a unei tinere este una care a cucerit inimile tuturor cititorilor si se termina fara un final fericit, ci mai degraba in expectativa.",
      price: 30,
      image: 'images/adulter.jpg'
});

//returnam obiectul de tip carte prin functia Book
exports.Book = Book; 
exports.Review = Review;