#simple backend  for simple library system using nodejs connected to mongodb
---------------------------------------------------------------------
-postman guide:

/books pagination:
router.get('/',book.getbooks)-->get request to retrieve all books in the database (limit 5 books per page)
router.post('/addBOOK',book.addBook)-->post request api to add new book with author ,title,content and publish date (defult is publishing current date)
router.get('/book',book.searchBook)-->get request api to seatch a specific book by title of it
router.get('/:id',book.getBook)-->get requets api to get a specific book using its _id from the db
router.put('/:id',book.updateBook)-->update book info using its _id
router.delete('/delete/:id',book.deleteBook)-->delete book by its _id
---------------------------------------------------------------------
/author pagination:
router.get('/',author.getAuthors)>get request to retrieve all authors in the database (limit 5 authors per page)
router.post('/addAuthor',author.addAuthor)-->post request api to add new book with name ,birth date  and books 
router.get('/:id',author.getAuthorbyId)-->get requets api to get a specific author using its _id from the db
router.put('/:id',author.updateAuthorInfo)-->update author info using its _id
router.delete('/delete/:id',author.deleteAuthor)-->delete author by its _id
router.get('/search',author.searchAuthor)-->get request api to search a specific author by his name 
