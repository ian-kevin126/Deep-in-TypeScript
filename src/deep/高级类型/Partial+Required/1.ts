interface Book {
  ISBN: string;
  book_name: boolean;
  book_price: string;
  book_store_count: string;
  book_publish: string;
}

type _Partial<T> = {
  [P in keyof T]?: T[P];
};
// type Book_Partial = {
//   ISBN?: string | undefined;
//   book_name?: boolean | undefined;
//   book_price?: string | undefined;
//   book_store_count?: string | undefined;
//   book_publish?: string | undefined;
// }
type Book_Partial = _Partial<Book>;

type _Required<T> = {
  [P in keyof T]-?: T[P];
};
// type Book_Required = {
//   ISBN: string;
//   book_name: boolean;
//   book_price: string;
//   book_store_count: string;
//   book_publish: string;
// }
type Book_Required = _Required<Book>;

type _Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
// type Book_Readonly = {
//   readonly ISBN: string;
//   readonly book_name: boolean;
//   readonly book_price: string;
//   readonly book_store_count: string;
//   readonly book_publish: string;
// }
type Book_Readonly = _Readonly<Book>;

// type A = Required
export {};
