type Worker = {
  custom: string;
};

type Customer = {
  custname: string;
  age: number;
};

type OneType<T> = T extends keyof any ? T : never;

type OneAnyType = keyof any; // string | number | symbol

type OneResultType = OneType<Worker>; // never

let count = 3;
type TwoResultType = OneType<typeof count>; // number

type TwoResultType2 = OneType<3>; // => 3 | 3被当做一个值类型 符合number类型

export default void 0;
