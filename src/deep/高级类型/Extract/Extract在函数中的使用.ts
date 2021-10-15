type func1 = (one: number, two: string) => string;
type func2 = (one: number) => string;

// 函数的泛型约束
type beginType1 = func1 extends func2 ? func1 : never;
type beginType2 = func2 extends func1 ? func2 : never;

// 函数的泛型约束 根据函数的参数类型和个数以及返回值进行匹配

/**
 * 1.在排除参数个数的情况下，函数的参数类型和返回值要完全匹配 否则返回never
 * 2.在参数个数不同，但参数类型和返回类型都相同的情况下
 *     T extends U 必须得满足 T的参数个数 <= U的参数个数 也就是被继承的函数的参数个数不能少于要继承的函数的个数
 *     否则条件不成立 返回never
 */

type extractType1 = Extract<func1, func2>;
type extractType2 = Extract<func2, func1>;

export default void 0;
