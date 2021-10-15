interface Info {
  a: string;
  b: number;
  c: boolean;
  d: symbol;
}

type A = Exclude<string | number | boolean, number | symbol>;

type B = Exclude<keyof Info, 'a' | 'c'>; // 'b' | 'd'

interface Worker {
  name: string;
  age: number;
  email: string;
  salary: number;
}

interface Student {
  name: string;
  age: number;
  email: string;
  grade: number;
}

type Diff = Exclude<keyof Worker, keyof Student>; // 'salary'
type Diff2 = Exclude<keyof Worker, keyof Student>; // 'salary'

// => 'name' | 'age' | 'email' | 'salary' | 'grade'
type Merge = Exclude<keyof Student, keyof Worker> | keyof Worker; // 'grade' | keyof Worker

export default void 0;
