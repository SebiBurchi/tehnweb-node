var express = require ("express")
var cors = require ("cors")
var bodyParser = require ("body-parser")

//model.sequelize.sync(); //creez bd;

var app = express();

app.use(bodyParser.json());      
app.use(cors())

app.use(express.static(__dirname + '/frontend'))

//get an instance of the express Router
var router = express.Router();

//ROUTES FOR THE API

//middleware to use for all requests
router.use (function (request, response, next) {
  console.log('something is happening')
  next(); //make sure we go to the next routes and don't stop here
})

var model = require("./models");

router.get('/', function (req, res) {
    model.sequelize.sync({force: true})
    .complete( function (err) {
      if (err) {
          console.log((err))
      }   else {
        //res.status(201).send('created all')
        res.json({message: "mergeeeeeeeeeeee"});
        }
    })
})

var Book = model.Book;
var Review = model.Review;

//on routes that end in /books
router.route ('/books')
  //create a book (accesed at POST ../api/books)
  .post (function (req, res) {
    var book = req.body;
    //save the book and check for errors
    Book.create (book)
      .complete (function (err) {
        if (err) {
          res.send(err);
        } else {
          res.json({message: "book created"})
        }
    })
  })
  //get all the books
  .get (function (req, res) {
    Book.findAll()
    .complete (function (err, books) {
      if (err) {
        res.send(err)
      } else {
        res.json(books)
      }
    })
  })
//get a single book
router.route ('/books/:book_id') 
  .get (function (req, res) {
    Book.find ({where : {id: req.param('book_id')}
    }).complete (function (err, book){
      if (err) {
        res.send(err)
      } else {
        res.json(book)
      }
    })
  })  


//create a review
router.route ('/reviews/:book_id')
  //get all reviews for a specific book
  .get (function (req, res) {
    Review.findAll({where : {BookId: req.param('book_id')}
    }).complete (function (err, books) {
      if (err) {
        res.send(err)
      } else {
        res.json(books)
      }
    })
  }) //add a review for a specific animal
  .post (function (req, res) {
      var review = req.body
      Book.find ({where : {id: req.param('book_id')}
        }).complete(function (err, book) {
          if (err)
            console.log(err)
            else {
              //console.log(book)
              review.BookId = book.id;
              Review.create (review, book)
                .complete (function (err, response) {
                            if (err) {
                                res.json(book)
                                res.send(err)
                              } else {
                                res.json(response)
                              }
                          })
            }
      })
})

//REGISTER THE ROUTES
app.use('/api', router); //toate rutele vor fi prefixate cu /api

app.listen(8080); //pornim serverul pe portul 8080
console.log('server listening on port 8080')