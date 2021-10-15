type Worker = {
  custom: string;
};

type Customer = {
  custname: string;
  age: number;
};

type OneType<T, K> = K extends keyof T ? K : never;

type OneTypeResult = OneType<Customer, 'custname'>; // custname

type TwoType<T, K> = K extends keyof T ? T[K] : never;

type TwoTypeResult = TwoType<Customer, 'custname'>; // Customer['custname'] => string

export default void 0;
