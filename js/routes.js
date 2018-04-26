'use strict';

page("/", (ctx, next) => app.Book.fetchAll( app.bookView.initIndexPage)); //route established to select all books when indexPage is selected
page("/book/:id", ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage)); //route established to select a single book when clicked based on id
// page("//book/:id", ctx => app.bookView.initAddPage(ctx));

page(); //invoking page functions
