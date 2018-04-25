'use strict';

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://ep-jb-booklist.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;


function Book(){
  Object.keys(opts).forEach(e => {
    this[e] = opts[e]
  }, this);
}

books.all = [];

Book.prototype.toHtml = function() {
  var template = Handlebars.compile($('#books-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

Book.fetchAll = callback => {
  $.get('/')
    .then(results => {
      Article.loadAll(results);
      callback();
    }
    )
};
