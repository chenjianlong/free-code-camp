const books = [
    {
      title: "The Pragmatic Programmer",
      authorName: "Andrew Hunt & David Thomas",
      releaseYear: 1999
    },
    {
      title: "Clean Code",
      authorName: "Robert C. Martin",
      releaseYear: 2008
    },
    {
      title: "You Don't Know JS",
      authorName: "Kyle Simpson",
      releaseYear: 2015
    }
  ];
  
  function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) {
      return -1;
    } else if (book1.releaseYear === book2.releaseYear) {
      return 0;
    } else {
      return 1;
    }
  }
  
  const filteredBooks = books.filter(book => book.releaseYear > 2000);
  
  filteredBooks.sort(sortByYear);
  
  console.log(filteredBooks);