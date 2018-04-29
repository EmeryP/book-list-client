'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:'; //
ENV.productionApiUrl = 'https://ep-jb-booklist.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module){

  function Book(obj){
    Object.assign(this, obj);
  }

  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-template').text());
    return template(this);
  };

  Book.prototype.detailToHtml = function() {
    var template = Handlebars.compile($('#book-detail-template').text());
    return template(this);
  };

  Book.all = [];

  Book.loadAll = rows => {
  //sort by title before we map .sort in front on map
    Book.all = rows.map(book => new Book(book));
    console.log(Book.all);
  };

  Book.fetchAll = (callback) => {
    $.get(`${ENV.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  };

  Book.fetchOne = (ctx, callback) => {
    console.log('context', ctx);
    $.get(`${ENV.apiUrl}/api/v1/books/${ctx.params.id}`)
      .then(result => ctx.book = result[0])
      .then(callback)
      .then(console.log('I come from the fetchOne'))
      .catch(errorCallback);
  };

  Book.create = book => {
    $.post(`${ENV.apiUrl}/books/add`, book)
      .then(() => page('/'))
      .catch(errorCallback);
  };

  Book.update = (book, id) => {
    $.ajax({
      url: `${ENV.apiUrl}/api/v1/books${id}`,
      method: 'PUT',
      data: book,
    })
      .then(() => page(`/books/${id}`))
      .catch(errorCallback);
  };

  function errorCallback(err){
    console.log(err);
    module.errorView.initErrorPage(err);
  }

  module.Book = Book;

})(app);

