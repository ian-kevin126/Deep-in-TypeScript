// 1，类型别名：用来给一个类型起一个新的名字
type Name = string;
type NameResolver = () => string;

type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

// 2，字符串字面量类型：用来约束取值只能是某几个字符串中的一个
type EventNames = "click" | "scroll" | "mousemove";

function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById("hello"), "scroll");
// handleEvent(document.getElementById("world"), 'dbclick'); // 类型“"dbclick"”的参数不能赋给类型“EventNames”的参数。

// 3，枚举：用于取值被限定在一定范围内的场景，枚举成员会被赋值为从0开始递增的数字，同时也会对枚举值到枚举名进行反向映射；
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

// 反向映射
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

// 我们还可以给枚举手动赋值
enum Days1 {
  Sun = 7,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days1["Sun"] === 7); // true
console.log(Days1["Mon"] === 1); // true
console.log(Days1["Tue"] === 2); // true
console.log(Days1["Sat"] === 6); // true

/**
 * 4，类
 *
 * 类：定义了一件事物的抽象特点，包含它的属性和方法
 * 对象：类的实例，通过new生成
 *
 * 面向对象的三大特性：封装、继承、多态
 * - 封装（Encapsulation）：将对数据的操作细节隐藏起来，只对外暴露接口。外界不需要知道接口的实现细节，只需要通过接口来访问对象，
 *       同时也保证了外界无法任意更改对象内部的数据。
 * - 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性之外，还有一些更具体的特性；
 * - 多态（Polymorphism）：右继承而产生了相关的不同的类，对同一个方法可以有不同的响应，比如Cat和Dog都继承自Animal，但是分别实现了
 *       自己的eat方法。此时针对某一个实例，我们无需了解它是Cat还是Dog，就可以直接调用eat方法，程序会自动判断出应该如何执行eat方法。
 *
 * 存取器（getter&setter）：用以改变属性的读取和赋值的行为
 * 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质，比如public表示公有属性或方法
 * 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
 * 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口实现可以被类实现（implements）。一个类只能继承自另一个类
 *     但是可以实现多个接口。
 */
// 4-1，ES6中类型的用法
class Animal {
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  // 简写模式
  constructor(public name: string) {}
  sayHi() {
    return `My name is ${this.name}`;
  }
}

let a = new Animal("Tom");
console.log(a.sayHi()); // My name is Tom

// (1)，类的继承：使用extends关键字来实现继承，子类中使用super关键字来调用父类的构造函数和方法
class Cat extends Animal {
  constructor(name: string) {
    super(name); // 调用父类的constructor(name)
    console.log(this.name);
  }

  sayHi() {
    return `${super.sayHi()}`; // 调用父类的 sayHi 方法
  }
}

const c = new Cat("Jerry");
console.log(c.sayHi()); // My name is Jerry

// (2)，存取器：getter和setter，可以改变属性的赋值和读取行为
class Animal2 {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return "Jack";
  }

  set name(val) {
    console.log("setter", val);
  }
}
const a1 = new Animal2("Jeerrr");
console.log(a1.name); // Jack
a1.name = "Tommm"; // setter Tommm

// (3)，静态方法 static：修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
class Animal3 {
  static isAnimal(a) {
    return a instanceof Animal3;
  }
}

let a2 = new Animal3("JAck");
console.log(Animal3.isAnimal(a2)); // true
// console.log(a2.isAnimal(a2)); // Uncaught TypeError: a2.isAnimal is not a function

// (4)，静态属性 static
class Animal4 {
  static num = 42;
  constructor() {
    // ...
  }
}

console.log(Animal4.num); // 42

// 4-2，TypeScript中类的用法：public、private、protected
// public：修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public的
// private：修饰的属性或方法是私有的，不能在声明它的类的外部被访问
// protected：修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也是允许被访问的。

// private：很多时候，我们希望有的属性只能在本类中使用，这个时候就可以使用private了。
class Person1 {
  private name;
  public constructor(name: string) {
    this.name = name;
  }
}

const person1 = new Person1("kevin");
// console.log(person1.name); // 属性“name”为私有属性，只能在类“Person1”中访问。
// person1.name = "Tom"; // 属性“name”为私有属性，只能在类“Person1”中访问。

// protected：如果我们希望有的属性只能在本类中使用，也允许在子类中使用，但是不允许在外部使用。
class Person2 {
  protected name;
  public constructor(name: string) {
    this.name = name;
  }
}

class Son extends Person2 {
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
}

// 参数属性：修饰符和readonly还可以用在构造函数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁
class Person3 {
  // public name: string;
  // constructor(name) {
  //   this.name = name;
  // }

  // 简写为
  constructor(public name: string) {}
}

// readonly：只读属性关键字，只允许出现在属性声明或索引签名或构造函数中
class Person4 {
  readonly name;
  public constructor(name: string) {
    this.name = name;
  }
}
const person5 = new Person4("Jack");
console.log(person5.name); // Jack
// person5.name = "kevin"; // 无法分配到 "name" ，因为它是只读属性。

// 需要注意的是：如果readonly和其他访问修饰符同时存在的话，需要写在其后面。
class Person6 {
  public constructor(public readonly name: string) {}
}

// 抽象类：abstract用于定义抽象类和其中的抽象方法
// 首先，抽象类是不允许被实例化的，只能被子类继承，其次，抽象类中的抽象方法必须被子类实现
abstract class Person7 {
  public name;
  public constructor(name: string) {
    this.name = name;
  }
  public abstract sayHi(): string;
}

class Son2 extends Person7 {
  public sayHi() {
    return "Hi Kevin";
  }
}

const person8 = new Son2("kevin");
console.log(person8.sayHi()); // Hi Kevin

/**
 * 5，类与接口
 *
 * 实现（implements）是面向对象中的一个重要概念，一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，
 * 这时候就可以把特性提取成接口（interfaces），用implements关键字来实现。这个特性大大提高了面向对象的灵活性。
 */
interface Alarm {
  alert(): void;
}

class Door {}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log("SecurityDoor alert");
  }
}

class Car implements Alarm {
  alert() {
    console.log("Car alert");
  }
}

// 5-1，一个类可以实现多个接口
interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Car1 implements Alarm, Light {
  alert() {
    console.log("Car alert");
  }

  lightOn() {
    console.log("Car light on");
  }

  lightOff() {
    console.log("Car light off");
  }
}

// 5-2，接口继承接口：接口之间可以是继承关系
interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}

// 5-3，接口继承类：常见的面向对象语言中，接口是不能继承类的，但是在TypeScript中却是可以的；
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

const point3d: Point3d = { x: 1, y: 2, z: 3 };

/**
 * 6，泛型：是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性;
 */
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

const arr3 = createArray(3, "x");
console.log("arr", arr3); // ['x', 'x', 'x']
const arr4 = createArray(3, 3);
console.log("arr", arr4); // [3, 3, 3]

// 6-1，多个类型参数：定义泛型时，可以一次性定义多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log(swap([7, "seven"])); // ['seven', 7]

// 6-2，泛型约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (const id in source) {
    target[id] = (<T>source)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 })); // {a: 1, b: 10, c: 3, d: 20}

// 6-3，泛型接口
interface CreateArray {
  <T>(length: number, value: T): Array<T>;
}

let createArrayFun: CreateArray;
createArrayFun = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
console.log(createArrayFun(4, 4)); // [4, 4, 4, 4]

// 6-4，泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 6-5，泛型参数的默认类型
function createArrayFunc2<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

console.log(createArrayFunc2(4, 5)); // [5, 5, 5, 5]

/**
 * 7，声明合并
 */
// 7-1，函数的合并：我们可以使用重载定义多个函数类型
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}

// 7-2，接口合并；接口中的属性在合并时会简单地合并到一个接口中
interface Alarm1 {
  price: number;
}

interface Alarm1 {
  weight: number;
}

// 相当于
interface Alarm {
  price: number;
  weight: number;
}

interface Alarm {
  price: number;
  // weight: string; // 同一变量不可以声明为不同的类型，后续属性声明必须属于同一类型。属性“weight”的类型必须为“number”，但此处却为类型“string”。
}

interface Alarm {
  price: number; // 虽然重复了，但是类型都是 `number`，所以不会报错
  weight: number;
}

// 接口中方法的合并，与函数的合并一样
interface Alarm {
  price: number;
  alert(s: string): string;
}

interface Alarm {
  weight: number;
  alert(s: string, n: number): string;
}

// 相当于
interface Alarm {
  price: number;
  weight: number;
  alert(s: string): string;
  alert(s: string, n: number): string;
}
