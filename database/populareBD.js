module.exports = function () {
    
  db.Book.bulkCreate([{
      title: 'Adulter',
      author: 'Paulo Coehlo',
      description: "Povestea zbuciumata si complicata a unei tinere este una care a cucerit inimile tuturor cititorilor si se termina fara un final fericit, ci mai degraba in expectativa.",
      price: 30,
      image: 'images/adulter.jpg'
    }, {
      title: 'Unsprezece minute',
      author: 'Paulo Coehlo',
      description: "Romanul prezintă o călătorie de iniţiere a unei tinere, drumul acesteia către spiritualitate, maturizare, înţelepciune, un drum pavat cu tentaţii şi ispite uşoare",
      price: 22.90,
      image: 'images/11_minute.jpg',
    }]).success (function (err) {
        if (err) {
            console.log("error");
        } else {
            console.log("inserare efectuata cu succes");
        }
    });  
};