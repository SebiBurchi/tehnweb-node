//top level module attached via ng-app
var app = angular.module ("bookStore", ["ui.router", "bookStoreControllers"])

app.config (function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/api/books")
    $stateProvider.state("products",{
        url:"/api/books",
        templateUrl:"partials/books1.html",
        controller:"StoreController"
    })
})
/*
var books = [{
      title: 'Adulter',
      author: 'Paulo Coehlo',
      description: "Povestea zbuciumata si complicata a unei tinere este una care a cucerit inimile tuturor cititorilor si se termina fara un final fericit, ci mai degraba in expectativa.",
      price: 30,
      image: 'images/adulter.jpg',
      canPurchase: true, //daca se poate adauga in cos, cu ng-show vom arata butonul de adauga in cos
      soldOut: false, //daca nu mai este pe stoc, nu se va mai afisa cartea (ng-hide)
      reviews: [
        {
          stars: 5,
          body: "I love this book",
          author: "jon_doe@gmail.com"
        },
        {
          stars: 4,
          body: "A good book to read in rainy days",
          author: "camelia@gmail.com"
        }]
    }, {
      title: 'Unsprezece minute',
      author: 'Paulo Coehlo',
      description: "Romanul prezintă o călătorie de iniţiere a unei tinere, drumul acesteia către spiritualitate, maturizare, înţelepciune, un drum pavat cu tentaţii şi ispite uşoare",
      price: 22.90,
      image: 'images/11_minute.jpg',
      canPurchase: false, 
      soldOut: false,
      reviews: []
    }, {
      title: 'Fulgi de iubire',
      author: 'John Green, Maureen Johnson şi Lauren Myracle',
      description: "Ce au în comun o furtună de zăpadă iscată în Ajunul Crăciunului, 14 majorete vesele, un restaurant Waffle House şi un tip învelit în folie de aluminiu? Răspuns: trei poveşti romantice de Crăciun. În aceste poveşti tandre, ingenios întreţesute, iubirea pluteşte printre fulgi de nea, beteală şi cadouri de Crăciun!",
      price: 45,
      image: 'images/fulgi_de_iubire.jpg',
      canPurchase: true,
      soldOut: false,
      reviews: []
    }, {
      title: 'Pe aripile vantului',
      author: 'Margaret Mitchell',
      description: "Dragoste si razboi! O combinatie frumoasa pentru un roman de succes! În această carte războiul se dă şi între popoare, şi între inimi, într-o manieră care-ţi alimentează încântarea şi-ţi amplifică curiozitatea.",
      price: 32,
      image: 'images/pe_aripile_vantului.jpg',
      canPurchase: true,
      soldOut: false,
      reviews: []
}]; 
*/