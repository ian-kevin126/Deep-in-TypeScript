/**
 * TypeScript 中提升幸福感的 10 个高级技巧【https://segmentfault.com/a/1190000039030887】
 */

/**
 * 1，【注释】：通过注释可以给TS类型做标记提示，编辑器会鼠标移动到类型上的时候有更好的提示：
 */
/** This is a cool guy. */
interface PersonType {
  /** This is name. */
  name: string;
}

const p: PersonType = {
  name: 'cool'
};

/**
 * 2，【接口继承】：和类一样，接口也可以相互继承，这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
 */
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square1 = <Square>{};
square1.color = 'blue';
square1.sideLength = 10;

// 一个接口可以继承多个接口，创建出多个接口的合成接口
interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square3 = <Square>{};
square3.color = 'blue';
square3.sideLength = 10;
square3.penWidth = 5.0;

/**
 * 3，【interface & type】：TypeScript 中定义类型的两种方式：接口（interface）和 类型别名（type alias）。
 */
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}

type Point1 = {
  x: number;
  y: number;
};

type SetPoint1 = (x: number, y: number) => void;

// 而且两者都可以扩展，但是语法有所不同。此外，请注意，接口和类型别名不是互斥的。接口可以扩展类型别名，反之亦然。
// 3-1，interface extends interface
interface PartialPointX {
  x: number;
}
interface Point extends PartialPointX {
  y: number;
}

// 3-2，Type alias extends type alias
type PartialPointX2 = { x: number };
type Point2 = PartialPointX & { y: number };

// 3-3，Interface extends type alias
type PartialPointX1 = { x: number };
interface Point3 extends PartialPointX1 {
  y: number;
}

// 3-4，Type alias extends interface
interface PartialPointX3 {
  x: number;
}
type Point4 = PartialPointX3 & { y: number };

/**
 * 4，【typeof】：获取一个变量或对象的类型
 */
interface Opt {
  timeout: number;
}
const defaultOption: Opt = {
  timeout: 500
};

// 有时候我们可以反过来
const defaultOption1 = {
  timeout: 500
};
type Opt1 = typeof defaultOption;
// 当一个 interface 总有一个字面量初始值时，可以考虑这种写法以减少重复代码，至少减少了两行代码是吧，哈哈~

/**
 * 5，【keyof】：TS允许我们遍历某种类型的属性，并通过keyof操作符提取其属性的名称。
 *
 * keyof 与 Object.keys 略有相似，只不过 keyof 取 interface 的键。
 */
const persion11 = {
  age: 3,
  text: 'hello world'
};

// type keys = "age" | "text"
type keys = keyof Point;

// 写一个方法获取对象里面的属性值时，一般人可能会这么写：
// function get1(o: object, name: string) {
//   return o[name];
// }

// const age1 = get1(persion, 'age');
// const text1 = get1(persion, 'text');
// 但是这样写会报错

// 因为object里面没有事先声明的key，当然如果把o:object修改为o:any就不会报错了，但是获取到的值就没有类型了，也变成了any了。
// 这时可以使用 keyof 来加强 get 函数的类型功能，有兴趣的同学可以看看 _.get 的 type 标记以及实现
function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}
const age1 = get(persion11, 'age');
const text1 = get(persion11, 'text');

/**
 * 6，查找类型
 */
interface Person212 {
  addr: {
    city: string;
    street: string;
    num: number;
  };
}

// 当需要使用addr的时候，除了把类型提出来
interface Address {
  city: string;
  street: string;
  num: number;
}

interface Person {
  addr: Address;
}

// 还可以
type Person322 = Person212['addr']; // This is Address.

// 比如：
const addr: Person['addr'] = {
  city: 'string',
  street: 'string',
  num: 2
};

// 有些场合后者会让代码更整洁、易读。

/**
 * 7，【查找类型 + 泛型 + keyof】
 *
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 */
interface API {
  '/user': { name: string };
  '/menu': { foods: string[] };
}
const get1 = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then(res => res.json());
};

// get1(''); 类型“""”的参数不能赋给类型“keyof API”的参数。
get1('/menu').then(user => user.foods);

/**
 * 8，类型断言：Vue组件里面经常会用到ref来获取子组件的属性或方法，但是往往都推断不出来有啥属性与方法，还会报错。
 */
function print() {
  // const helloRef = this.$refs.helloRef;
  // const helloRef = this.$refs.helloRef as any;
  // console.log("helloRef.msg: ", helloRef.msg); // helloRef.msg:  Welcome to Your Vue.js + TypeScript App
}
// 但是类型断言为 any 时是不好的，如果知道具体的类型，写具体的类型才好，不然引入 TypeScript 冒似没什么意义了。

/**
 * 9，显示泛型
 *
 * $('button') 是个 DOM 元素选择器，可是返回值的类型是运行时才能确定的，除了返回 any ，还可以
 */
function $<T extends HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}

// 不确定 input 的类型
// const input = $('input');

// Tell me what element it is.
const input = $<HTMLInputElement>('input');
console.log('input.value: ', input.value);

// 函数泛型不一定非得自动推导出类型，有时候显式指定类型就好。

/**
 * 10，DeepReadonly
 *
 * 被 readonly 标记的属性只能在声明时或类的构造函数中赋值。之后将不可改（即只读属性），否则会抛出 TS2540 错误。
 *
 * 与 ES6 中的 const 很相似，但 readonly 只能用在类（TS 里也可以是接口）中的属性上，相当于一个只有 getter 没有 setter 的属性的语法糖。
 *
 * 下面实现一个深度声明 readonly 的类型：
 */
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

const obje1 = { foo: { bar: 22 } };
const bedkas = obje1 as DeepReadonly<typeof obje1>;
// bedkas.foo.bar = 33; // Cannot assign to 'bar' because it is a read-only property.ts(2540)
