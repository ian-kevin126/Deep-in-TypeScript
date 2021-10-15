interface Book {
  ISBN: string;
  book_name: boolean;
  book_price: string;
  book_store_count: string;
  book_publish: string;
}

// Omit 反向抓取属性数据 与 Pick正好相反 排序不要的 剩下的就是要的
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Exclude 排除指定的key 返回剩余的联合类型组成的 key
// type A = "book_store_count" | "book_publish"
type A = Exclude<keyof Book, 'ISBN' | 'book_name' | 'book_price'>;

// Pick 获取指定的键组成的对象类型
// A的结果就是我们想要取到的类型key
// 使用 Pick 提取就行了
type B = Pick<Book, A>;
/**
 * type B = {
 *   book_store_count: string;
 *   book_publish: string;
 * }
 */
export {};
