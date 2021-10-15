interface Book {
  ISBN: string;
  book_name: boolean;
  book_price: string;
  book_store_count: string;
  book_publish: string;
}

// 只想获取 ISBN book_name book_price
// 我们不应该单独定义一个接口 如果这样做 样板代码太多臃肿不好管理
// 原始接口或类型不应该动 应该单独定义对这个类型的补充类型代码

// type A = "ISBN" | "book_name" | "book_price"
type A = Extract<keyof Book, 'ISBN' | 'book_name' | 'book_price'>;

// type B = {
//   ISBN: string;
//   book_name: boolean;
//   book_price: string;
// }
type B = Pick<Book, 'ISBN' | 'book_name' | 'book_price'>;
