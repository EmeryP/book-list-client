'use strict';

var app = {}; //input comes from the IFFE

//define a global variable called bookView and assign an empty object literal its value

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:'; //
ENV.productionApiUrl = 'https://ep-jb-booklist.herokuapp.com'; //heroku database URL
ENV.developmentApiUrl = 'http://localhost:3000'; //local dev database URL
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module){ //wrapping all function is IFFE

  function Book(obj){ //defining Book constructor
    Object.assign(this, obj); //passing object literal as an arguement. THIS starts out with nothing and get fed by the object
  }

  Book.all = []; //defining static property on Book called all, assigning an empty array it's value

  Book.prototype.toHtml = function() { //rendering to html
    var template = Handlebars.compile($('#book-template').text()); //assigning template the value of our handlebars
    return template(this);
  };

  Book.prototype.detailToHtml = function() { //rendering to html
    var template = Handlebars.compile($('#book-detail-template').text()); //assigning template the value of our handlebars
    return template(this);
  };

  Book.loadAll = rows => { //defining static method on Book called load all passing rows as arguemnent and sorts rows by title
  //sort by title before we map .sort in front on map
    Book.all = rows.map(book => new Book(book)); //assigning new array of Book to Book.all
    console.log(Book.all);
  };

  Book.fetchAll = callback => { //defining static method fetchall which takes callback as arguement
    $.get(`${ENV.apiUrl}/api/v1/books`) //make request to the API at GET to this filepath
      .then(Book.loadAll) //on success, pass the results to Book.all
      .then(callback)//invoke callback; define this function!!!!!! initIndexPage is the callback being passed in here
      .catch(errorCallback);
  };

  Book.fetchOne = (callback, ctx) => { //defining static method fetchall which takes callback as arguement
    $.get(`${ENV.apiUrl}/api/v1/books/${ctx}.params.book_id`) //make request to the API at GET to this filepath
      .then(Book.loadAll) //on success, pass the results to Book.all
      .then(callback)//invoke callback; define this function!!!!!! initIndexPage is the callback being passed in here
      .catch(errorCallback);
  };

  Book.add = book => {
    $.post(`${ENV.apiUrl}/api/v1/books`, book)
      .then(() => page('/'))
      .catch(errorCallback);
  };

  function errorCallback(err){
    console.log(err);
    module.errorView.initErrorPage(err);
  }

  module.Book = Book;

})(app);

//errorView.js, goes on different page
// (function(module){
//   var errorView = {};
//   errorView.initErrorPage = err =>{
//     $('.container').hide();
//     $('.error-view').show();
//     $('#error-message').empty();

//     var template = Handlebars.compile($('#error-template').text());

//     $('#error-message').append(template(err));
//     //more error stuff going on here
//   }
// }