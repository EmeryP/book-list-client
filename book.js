'use strict';

var app = {}; //input comes from the IFFE

//define a global variable called bookView and assign an empty object literal its value

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://ep-jb-booklist.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module){  //wrapping all function is IFFE

function Book(obj){ //defining Book constructor
  Object.assign(this, obj) //passing object literal as an arguement. THIS starts out with nothing and get fed by the object
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
  Book.all = rows.map(book => new Book(book)); //assigning new array of Book to Book.all
  console.log(Book.all);
}

Book.fetchAll = callback => { //defining static method fetchall which takes callback as arguement
  $.get(`${ENV.apiUrl}/apiv1/books`) //make request to the API at GET to this filepath
    .then(Book.loadAll) //on success, pass the results to Book.all
    .then(callback)//invoke callback
    .catch(errorCallback);
};

Book.add = book => {

}

//errorView.js
(function(module){
  var errorView = {};
  errorView.initErrorPage = err =>{
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();

    var template = Handlebars.compile($('#error-template').text());

    $('#error-message').append(template(err));


    //more error stuff going on here
    

  }
}

module.Book = Book;

})(app);