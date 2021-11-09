// there are three types of enums:
// 1. Numeric enum
// 2. String enum
// 3. Heterogeneous enum

// Numeric Enum
enum PrintMedia {
  Newspaper,
  Newsletter,
  Magazine,
  Book
}

// Newspaper = 0
// Newsletter = 1
// Magazine = 2
// Book = 3

//String Enum
enum PrintMediaStr {
  Newspaper = 'NEWSPAPER',
  Newsletter = 'NEWSLETTER',
  Magazine = 'MAGAZINE',
  Book = 'BOOK'
}

// PrintMedia.Newspaper;
// PrintMedia['Magazine'];

// Heterogeneous Enum
enum Status {
  Active = 'ACTIVE',
  Deactivate = 1,
  Pending
}
