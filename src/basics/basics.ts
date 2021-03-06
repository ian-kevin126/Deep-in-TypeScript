/**
 * TypeScript基础
 */

/**
 * 一，数据类型
 * （1）ES6数据类型（9种）：Boolean、Number、String、Array、Function、Object、Symbol、undefined、null
 * （2）TypeScript新增的数据类型（6种）：void、any、never、元组（tuple）、枚举（ENUM）、高级类型
 */
// 1，undefined 和 null 是所有类型的子类型，也就是说，undefined或null类型的变量可以赋值给其他类型的变量，反之则不行
let u: undefined;

// 这里如果不修改tsconfig.json，则会报错“不能将类型“undefined”分配给类型“number”。”，
// 可以通过改配置把"strictNullChecks": false, 设置为false，报错立马消失
let num: number = u;
console.log(num); // undefined

let un: undefined;
let num2: number = 2;
num2 = un;
console.log('num2', num2); // num2 undefined

// 2，数组：两种等价的声明方式
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [1, 2, 3, 4];

// 3，元组：是一种特殊的数组，限定了数组的类型和个数
let tuple1: [number, string] = [1, 'kevin'];
// 可以为元组添加一个新的元素
tuple1.push(2);
console.log('tuple2', tuple1); // [1, 'kevin', 2]
// 但是不能访问我们刚刚添加的元素
// console.log(tuple1[2]); // 长度为 "2" 的元组类型 "[number, string]" 在索引 "2" 处没有元素。

// **********************所以非常不推荐通过push往元组里添加元素**********************************

// 4，函数类型，通常返回值的类型是可以省略的（通过返回值推断而来），可以看到返回值的类型仍然是number
let addFunc = (x: number, y: number) => x + y;
// 还可以先声明函数，再定义函数实现
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 5：对象类型
let obj: object = { x: 1, y: 2 };
// 不能直接给obj赋值
// obj.x = 3; // 类型“object”上不存在属性“x”。

// 这样的可以的
let obj1: { x: number; y: number } = { x: 1, y: 2 };
obj1.x = 3;

// 6，symbol类型：表示唯一的值
let sym1: symbol = Symbol();
let sym2: symbol = Symbol();
console.log('sym1 == sym2', sym1 == sym2); // sym1 == sym2 false

// 7，void：是一种运算符，可以让任何表达式返回undefined，void运算符对给定的表达式进行求值，然后返回undefined
// void运算符通常只用于undefined的原始值，一般使用void(0)，等同于void 0；

// 8，never：永远不会返回值的类型
let error = () => {
  throw new Error('error');
}; // let error: () => never
let endless = () => {
  while (true) {}
}; // let endless: () => never

// 9，枚举enum：
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
// 实现原理：反向映射
// "use strict";
// var Role;
// (function (Role) {
//   Role[(Role["Reporter"] = 1)] = "Reporter";
//   Role[(Role["Developer"] = 2)] = "Developer";
//   Role[(Role["Maintainer"] = 3)] = "Maintainer";
//   Role[(Role["Owner"] = 4)] = "Owner";
//   Role[(Role["Guest"] = 5)] = "Guest";
// })(Role || (Role = {}));

// 枚举分类
// - 常量枚举：编译时计算出结果，在运行时以常量出现
// - Computed枚举：非常量表达式
enum Char {
  //const 编译时算出结果
  a,
  b = Char.a,
  c = 1 + 3,
  //computed 运行时才会计算
  d = Math.random(),
  e = '123'.length
}

// 编译后
// "use strict";
// var Char;
// (function (Char) {
//     //const 编译时算出结果
//     Char[Char["a"] = 0] = "a";
//     Char[Char["b"] = 0] = "b";
//     Char[Char["c"] = 4] = "c";
//     //computed 运行时才会计算
//     Char[Char["d"] = Math.random()] = "d";
//     Char[Char["e"] = '123'.length] = "e";
// })(Char || (Char = {}));

// 常量枚举：（用const声明的枚举）会在编译阶段被移除。不需要对象，只需要对象的值的时候用常量枚举，可以减少编译后的代码。
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar];

// 编译后的js：
// "use strict";
// let month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
