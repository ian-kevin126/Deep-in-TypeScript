/**
 * https://ts.xcatliu.com/introduction/what-is-typescript.html
 *
 * 1，什么是TypeScript：Typed JavaScript at any Scale.添加了类型系统的JavaScript，适用于任何规模的项目。
 * 以上是官网对于TypeScript的定义，它强调了TypeScript的两个最重要的特性——类型系统、适用于任何规模的项目。
 *
 * TypeScript的特性
 * 1，类型系统：从TypeScript的名字就可以看出来，【类型】是其最核心的特性，我们知道，JavaScript是一门非常灵活的语言：
 *   - 它没有类型约束，一个变量可能初始化时是字符串，过一会又被赋值为数字
 *   - 由于隐式类型转换的存在，有的变量的类型很难在运行前九确定
 *   - 基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改
 *   - 函数的JavaScript中的一等公民，可以赋值给变量，也可以当做参数或返回值
 *
 * 这种灵活性就像一把双刃剑，一方面使得JavaScript蓬勃发展，无所不能，从2013开始就一直蝉联最普遍使用的编程语言排行榜冠军
 * ；另一方面也使得它的代码质量参差不齐，维护成本高，运行时错误多。而TypeScript的类型系统，在很大程度上弥补了JavaScript的缺点。
 *
 * 2，TypeScript是静态类型
 * 类型系统按照【类型检查的时机】来分类，可以分为动态类型和静态类型：
 *   - 动态类型：是指在运行时才会进行类型检查，这种语言的类型往往会导致运行时错误。JavaScript是一门解释型语言，没有编一阶段
 *              所以它是动态类型，以下这段代码只有在运行时才会报错：
 * let foo = 1;
 * foo.split(' ');
 * Uncaught TypeError: foo.split is not a function
 * 运行时会报错（foo.split 不是一个函数），造成线上 bug
 *
 * 静态类型是值编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。TypeScript在运行前需要先编译
 * 成JavaScript，而在编译阶段就会进行类型检查，所以，TypeScript是静态类型，这段TypeScript代码在编译阶段就会报错了：
 *
 * let foo = 1;
 * foo.split(' ');
 * Property 'split' does not exist on type 'number'.
 * 编译时会报错（数字没有 split 方法），无法通过编译
 *
 * 大部分 JavaScript 代码都只需要经过少量的修改（或者完全不用修改）就变成 TypeScript 代码，这得益于 TypeScript
 * 强大的【类型推论】，即使不去手动声明变量 foo 的类型，也能在变量初始化时自动推论出它是一个 number 类型。
 *
 * 3，TypeScript是弱类型
 * 类型系统按照【是否允许隐式类型转换】来分类，可以分为强类型和弱类型。
 * console.log(1 + '1'); // 打印出字符串 '11'
 *
 * TypeScript是完全兼容JavaScript的，它不会就该JavaScript运行时的特性，所以它们都是弱类型。
 */

/**
 * 一、接口
 */
interface NewPerson {
  name: string;
  age: number;
}

let tom: NewPerson = {
  name: "tom",
  age: 18,
};

// 定义的变量比接口少一些属性是不允许的
// let tom2:NewPerson = {
//   name: 'tom'
// }

// 多一些属性也是不允许的
// 不能将类型“{ name: string; age: number; gender: string; }”分配给类型“NewPerson”。对象文字可以只指定已知属性，并且“gender”不在类型“NewPerson”中
// let tom3: NewPerson = {
//   name: "tom",
//   age: 18,
//   gender: "male",
// };

// 1，可选属性
interface NewPerson1 {
  name: string;
  age?: number;
}

let tom4: NewPerson1 = {
  name: "tom",
};

// 这时，仍然不允许添加未定义的属性
// let tom5: NewPerson1 = {
//   name: "tom",
//   age: 18,
//   gender: "male",
// };

// 2，任意属性
interface NewPerson2 {
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom6: NewPerson2 = {
  name: "tom",
  age: 18,
  gender: "male",
};

// 3，只读属性
interface NewPerson3 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom7: NewPerson3 = {
  name: "tom",
  age: 18,
  gender: "male",
  id: 12112,
};

// tom7.id = 212121321322; // 无法分配到 "id" ，因为它是只读属性。

/**
 * 二、数组的类型
 */
