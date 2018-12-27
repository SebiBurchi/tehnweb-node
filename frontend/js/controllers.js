var app = angular.module('bookStoreControllers', ['ui.router']);

//vom lua defapt cartile dintr-un fisier JSON
  /*app.controller('StoreController', function(){
    this.products = books;
  });*/
  //i will fetch the books from an API
  //store controller needs the $http service, so $http gets injected as an argument
  
  app.controller ('StoreController', function ($scope, $http, $state) {
    $scope.book = {}
    
    $http.get('/api/books')
    .success(function (data) {
        $scope.status = "alive"
        //$http returns a promise, so scuccess() gets the data
        $scope.products = data;
        angular.forEach($scope.products, function(product) {
          console.log(product)
          console.log('id '+product.id)
          $http.get('/api/reviews/' + product.id)
            .success(function (data) {
                product.reviews = data
                console.log(data)
                });
        console.log(data)
        });
    })
    .error (function () {
        $scope.status = "dead"
    })
    /*
    $scope.addBook = function (book, books) {
      console.log(book)
      books.push(book)
      $http.post('/api/books', book)
        .success(function () {
        console.log('added')
        $scope.book = {}
        }).error(function () {
        console.log('book not added')
      })
    }*/
    
     $scope.addBook = function (book) {
      console.log(book)
      $scope.products.push(book)
      $http.post('/api/books', book)
        .success(function () {
        console.log('added')
        $scope.book = {}
        }).error(function () {
        console.log('book not added')
      })
    }
    
    /*
    $scope.delete = function (book) {
      $http.delete('/api/books', book)
        .success (function () {
          console.log('deleted')
        })
    }
    */
  });
  

  app.controller('ReviewController', function($scope, $http, $state) {
    $scope.review = {};

    $scope.addReview = function(review, book) {
          console.log(review)
          review.createdOn = Date.now();
          book.reviews.push(review);
          //inserez si in BD
          $http.post('/api/reviews/' + book.id, review).success(function () {
            $scope.status = 'added'
            console.log('added')
            $scope.go ($state.current, {}, {reload: true})
            $scope.review = {};
        }).error (function () {
            $scope.status = 'not added'
            console.log('not added')
        })
    }
  });
  
  app.controller("PanelController", function () {
    this.tab = 1; //initial setam tab-ul 1 (description)
    
    this.selectTab = function (setTab) {
      this.tab = setTab;
    };
    
    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    };
  });