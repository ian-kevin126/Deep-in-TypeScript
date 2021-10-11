/**
 * TypeScript基础
 */

/**
 * 一，数据类型
 * （1）ES6数据类型（9种）：Boolean、Number、String、Array、Function、Object、Symbol、undefined、null
 * （2）TypeScript新增的数据类型（6种）：void、any、never、元组（tuple）、枚举（ENUM）、高级类型
 */
// 1，undefined 和 null 是所有类型的子类型，也就是说，undefined类型的变量可以赋值给其他类型的变量，反之则不行
let u: undefined;

// 这里如果不修改tsconfig.json，则会报错“不能将类型“undefined”分配给类型“number”。”，
// 可以通过改配置把"strictNullChecks": false, 设置为false，报错立马消失
let num: number = u;

console.log(num); // undefined

// 2，数组：两种等价的声明方式
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [1, 2, 3, 4];

// 3，元组：是一种特殊的数组，限定了数组的类型和个数
let tuple1: [number, string] = [1, "kevin"];
// 可以为元组添加一个新的元素
tuple1.push(2);
console.log("tuple2", tuple1); // [1, 'kevin', 2]
// 但是不能访问我们刚刚添加的元素
// console.log(tuple1[2]); // 长度为 "2" 的元组类型 "[number, string]" 在索引 "2" 处没有元素。

// **********************所以非常不推荐通过push往元组里添加元素**********************************
