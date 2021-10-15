interface Customer {
  name: string;
  age: number;
  phone: string;
}

type Record<K extends keyof any, T> = {
  [P in K]: T;
};

type resultRecord = Record<string, Customer>;

/**
 * type resultRecord = {
 *   [x: number]: Customer;
 * }
 */
type resultRecord2 = Record<number, Customer>;

const obj: resultRecord2 = { 1: { name: 'x', age: 0, phone: 'x' } };
const arr: resultRecord2 = [{ name: 'x', age: 0, phone: 'x' }];

// type Record2<K extends keyof any, T> = {
//   [P in 'name' | 'age' | 'phone']: T
// }
// type resultRecord2 = Record2<string, Customer>; // type resultRecord2 = {
//                                                 //   name: Customer;
//                                                 //   age: Customer;
//                                                 //   phone: Customer;
//                                                 // }

export default void 0;
