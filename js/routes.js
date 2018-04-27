'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage)); //route established to select all books when indexPage is selected
page('/books/:id', ctx => app.Book.fetchOne(ctx, app.bookView.initBookPage)); //route established to select a single book when clicked based on id
// page('/book/:id', () => app.Book.fetchOne(app.bookView.initBookPage));
// page("//book/:id", ctx => app.bookView.initAddPage(ctx));

page(); //invoking page functions
