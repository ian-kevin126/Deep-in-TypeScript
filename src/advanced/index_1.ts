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
// 1，定义一个数组变量
let fibonacci: number[] = [1, 2, 3, 4, 5, 6];
let fibonacci1: Array<number> = [1, 2, 3, 4, 55, 6];

// 2，用接口表示数组，只要索引的类型是数字时，那么值的类型也必须是数字。
interface NumberArray {
  [index: number]: number;
}
let fibonacci2: NumberArray = [1, 2, 3, 4, 5];

// 3，类数组：虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂得多，不过有一种情况例外，那就是它常用来表示【类数组】。
function sum() {
  // let args: number[] = arguments;
  // 上一句会报错：类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 24 项。
  // 因为arguments实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口。
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}

// 在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有length和callee两个属性
// 事实上常用的类数组都有自己的接口定义，如IArguments，NodeList，HTMLCollection等；
function sum1() {
  let args: IArguments = arguments;
}
// IArguments是TypeScript中定义好的类型，它实际上就是：
interface IArguments {
  [index: number]: number;
  length: number;
  callee: Function;
}

// 4，any在数组中的应用
let list: any[] = ["xcatliu", 25, { website: "http://xcatliu.com" }];

/**
 * 三、函数的类型
 */
// 1，函数定义
function add(x: number, y: number): number {
  return x + y;
}
// add(1, 2, 3); 传入多余的参数是不允许的。

// 2，函数表达式
// 不要混淆TypeScript中的箭头【=>】和ES6中的【=>】，TS中的左边是入参类型（用括号括起来），右边是输出类型。
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// 3，用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};

// search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。
// 如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1。

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
// const regex = /[^\w\s]/g;
// console.log(paragraph.search(regex)); // expected output: 43
// console.log(paragraph[paragraph.search(regex)]); // expected output: "."

// 4，可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + "" + lastName;
  } else {
    return firstName;
  }
}

let tomcat = buildName("Tom", "Cat");
let tim = buildName("Tim");

// 需要注意的是：可选参数必须放在必需参数后面。换句话说，可选参数后面不允许再出现必需参数。

// 5，参数默认值
function buildName1(lastName: string = "cat", firstName: string) {
  return firstName + "" + lastName;
}
let tomcat1 = buildName("Tom", "Cat");
let cat = buildName(undefined, "Cat");
// 此时就不再受【可选参数必须接在必需参数后面】的限制了

// 6，剩余（rest）参数
// 事实上，items是一个数组，所以我们可以用数组的类型来定义它
function push(array: any[], ...items: any[]) {
  items.forEach((i) => array.push(i));
}
let aaa: any[] = [];
push(aaa, 1, 2, 3);

/**
 * 7，函数重载
 *
 * 重载允许一个函数接收不同数量或类型的参数时，做出不同的处理。比如，我们需要实现一个函数reverse，输入数字123的时候，输出
 * 反转的数字321，输入字符串hello的时候，输出反转的字符串olleh。
 */
function reverseString(x: string | number): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}

// 然而这样有一个缺点，就是不能精确地表达：输入为数字的时候，输出也为数字，输入为字符串的时候，输出也应该为字符串。
// 这时候，我们可以使用重载定义多个reverse的函数类型：
function reverseStringFunc(x: number): number; // 函数定义
function reverseStringFunc(x: string): string; // 函数定义
// 函数实现
function reverseStringFunc(x: string | number): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
// 需要注意的是：TypeScript会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。

/**
 * 四，类型断言：可以手动指定一个值的类型。
 *
 * 语法：
 * - 值 as 类型：在TSX语法（React的jsx语法的ts版）中必须使用这种。
 * - <类型>值
 *
 * 形如<Foo>的语法在TSX中表示的是一个ReactNode，在ts中除了表示类型断言之外，也可能是表示一个泛型。建议使用 as 方式
 */
// 1，类型断言的用途：将一个联合类型断言为其中一个类型
// 当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法
interface Cat12 {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}

function getAnimalName(animal: Cat12 | Fish) {
  return animal.name;
}

// 而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：
function isFish(animal: Cat12 | Fish) {
  // 报错：类型“Cat | Fish”上不存在属性“swim”。类型“Cat”上不存在属性“swim”。
  // if (typeof animal.swim === "function") {
  //   return true;
  // }

  // 只需要加上类型断言就可以解决这个问题
  if (typeof (animal as Fish).swim === "function") {
    return true;
  }

  return false;
}

// 需要注意的是：类型断言只能【欺骗】TypeScript编辑器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误。
function swim(animal: Cat12 | Fish) {
  (animal as Fish).swim();
}

const tom12: Cat12 = {
  name: "Tom",
  run() {
    console.log("run");
  },
};

swim(tom12); // 这个例子编译时不会报错，单在运行时会报错 —— Uncaught TypeError: animal.swim is not a function`
// 原因是 (animal as Fish).swim(); 这段代码隐藏了animal可能为Cat的情况，将animal直接断言为Fish了。而TypeScript编译器
// 信任了我们的断言，故而在调用swim()时没有编译报错。但是，一旦传入了Cat类型的参数，由于Cat上并没有swim方法，导致运行时
// 错误。

// 总之，适用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。

// 2，将一个父类断言为更加具体的子类：当类之间有几成关系时，类型断言也是很常见的
class ApiError extends Error {
  code: number = 0;
}

class HttpError extends Error {
  statusCode: number = 200;
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === "number") {
    return true;
  }
  return false;
}
// 上面的例子中，我们声明了函数isApiError，它用来判断传入的参数是不是ApiError类型，为了实现这样一个函数，它的参数的类型
// 肯定是比较抽象的父类Error，这样的话这个函数就能接受Error或它的子类作为参数了。但是由于父类Error中没有code属性，故直接
// 获取error.code会报错，需要使用类型断言获取(error as ApiError).code。

// 实际上，我们还有更好的方法来判断error的类型：instanceof，因为ApiError是一个JavaScript的类型，能够通过instanceof直接判断。
function isApiError1(error: Error) {
  if (error instanceof ApiError) {
    return true;
  }
  return false;
}

// 但是有的情况下 ApiError 和 HttpError 不是一个真正的类，而只是一个 TypeScript 的接口（interface），接口是一个类型，
// 不是一个真正的值，它在编译结果中会被删除，当然就无法使用 instanceof 来做运行时判断了：此时就只能用类型断言，通过判断是否
// 存在 code 属性，来判断传入的参数是不是 ApiError 了：
interface ApiError1 extends Error {
  code: number;
}

interface HttpError extends Error {
  statusCode: number;
}

function isApiError2(error: Error) {
  if (typeof (error as ApiError1).code === "number") {
    return true;
  }
  return false;
}

// 3，将任何一个类型断言为any：理想情况下，TypeScript的类型系统运转良好，每个值的类型都具体而精确，当我们引用一个在此类型上
// 不存在的属性或方法的时候，就会报错
const fooo: number = 1;
// fooo.length = 1; // 类型“number”上不存在属性“length”。

// 这种错误提示是非常有用的，但是有时候，我们非常确定这段代码不会报错，比如下面这个例子：
// window.fooo = 1; // 类型“Window & typeof globalThis”上不存在属性“fooo”。
// 但是，TypeScript编译时居然报错了，此时我们就可以使用as any临时将window断言为any类型：
(window as any).foooo = 1;
// 在any类型的变量上，访问任何属性都是允许的。需要注意的是，将一个变量断言为any可以说是解决TypeScript中类型问题的最后一个手段
// 它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用as any。

// 上面的例子中，我们也可以通过【扩展window的类型（TODO）】解决这个错误，不过如果只是临时的增加foooo属性，as any会更加方便

/**
 * 总之，一方面不能滥用as any，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡（这也是TypeScript的设计
 * 理念之一），才能发挥出TypeScript最大的价值。
 * https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals
 */

/**
 * 4，将any断言为一个具体的类型
 *
 * 在日常的开发中，我们不可避免地需要处理any类型的变量，它们可能是由于第三方库未能定义好自己的类型，也有可能是历史遗留或其他人
 * 编写的烂代码，还可能是受到TypeScript类型系统的限制而无法精确定义类型的场景。
 *
 * 遇到any类型的变量时，我们可以选择无视它，任由它滋生更多的any，我们也可以选择改进它，通过断言及时地把any断言为精确的类型，亡羊补牢
 * 使我们的代码向着高可维护性的目标发展。举例来说，历史遗留的代码中有个getCacheData，它的返回值是any：
 */
function getCacheData(key: string): any {
  return (window as any).cache[key];
}
// 那么我们在使用它时，最好能将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作。
interface Cat23 {
  name: string;
  run(): void;
}

const tom23 = getCacheData("tom") as Cat23;
tom23.run();
// 上面的例子中，我们调用完getCacheData之后，立即将它断言为Cat23类型，这样的话就明确了tom23的类型，后续对tom23的访问就有了代码补全，提高了代码的可维护性。

/**
 * 5，类型断言的限制
 *
 * 从上面的例子中，我们可以总结出：
 * - 联合类型可以被断言为其中一个类型
 * - 父类可以被断言为子类
 * - 任何类型都可以被断言为any
 * - any也可以被断言成任何类型
 *
 * 那么类型断言是不是没有什么限制呢？是不是任何一个类型都可以被断言成任何另一个类型呢？
 * 答案是否定的，并不是任何一个类型都可以被断言成任何另一个类型。具体来说，若A兼容B，
 */
