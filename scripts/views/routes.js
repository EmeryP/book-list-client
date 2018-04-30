'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/:id', ctx => app.Book.fetchOne(ctx, app.bookView.initBookPage));
page('/books/new', ctx => app.bookView.initCreateFormPage(ctx));

page(); 
