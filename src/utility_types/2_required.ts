interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserWithoutEmail = Omit<User, 'email'>;

// 等价于:
// interface Person {
//   id: string;
//   name: string;
//   age: number;
// }

export {};
