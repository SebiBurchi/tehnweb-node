var Sequelize = require("sequelize");//incarcam modulul sequelize
var db = {}; //aici retinem baza de date

//initializam ORM-ul pt lucrul cu BD
var sequelize = new Sequelize ('books_db', 'root', '', {
    dialect: 'mysql',
    port: 3306 //pt mysql
});

var fs = require("fs"); //manageriem sistemul de directoare

fs
    .readdirSync(__dirname) //detine numele directorului curent
    .filter(function (file) { //nu selectam directoarele si fisierul creareBD
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach (function (file) {
        //facem sa se execute fiecare fisier (model) => deci creez tabele din BD
        var model = sequelize.import( __dirname + "/" + file);
        //console.log( __dirname + "/" + file);
        db[model.name] = model;
    });
    
    //definim relatiile intre tabele
    Object.keys(db).forEach(function (modelName) {
        if ("associate" in db[modelName]) {
            db[modelName].associate(db);
        }
    });
    
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    
module.exports = db;