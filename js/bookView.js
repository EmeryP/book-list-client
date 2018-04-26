//iffe like book.js similar to book.js

const app = {};

const bookView = {};

bookView.initIndexPage = () => {
  console.log('index');
  $('#items ul').empty();
  show('items');
  app.Book.all.forEach(book => {
    if (parseInt(book.book_id) === parseInt(ctx.params.id)){
      $('#book').append(book.detailToHtml());
    }
  });
};