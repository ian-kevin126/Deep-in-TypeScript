"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll');
// handleEvent(document.getElementById("world"), 'dbclick'); // 类型“"dbclick"”的参数不能赋给类型“EventNames”的参数。
// 3，枚举：用于取值被限定在一定范围内的场景，枚举成员会被赋值为从0开始递增的数字，同时也会对枚举值到枚举名进行反向映射；
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days['Sun'] === 0); // true
console.log(Days['Mon'] === 1); // true
console.log(Days['Tue'] === 2); // true
console.log(Days['Sat'] === 6); // true
// 反向映射
console.log(Days[0] === 'Sun'); // true
console.log(Days[1] === 'Mon'); // true
console.log(Days[2] === 'Tue'); // true
console.log(Days[6] === 'Sat'); // true
// 我们还可以给枚举手动赋值
var Days1;
(function (Days1) {
    Days1[Days1["Sun"] = 7] = "Sun";
    Days1[Days1["Mon"] = 1] = "Mon";
    Days1[Days1["Tue"] = 2] = "Tue";
    Days1[Days1["Wed"] = 3] = "Wed";
    Days1[Days1["Thu"] = 4] = "Thu";
    Days1[Days1["Fri"] = 5] = "Fri";
    Days1[Days1["Sat"] = 6] = "Sat";
})(Days1 || (Days1 = {}));
console.log(Days1['Sun'] === 7); // true
console.log(Days1['Mon'] === 1); // true
console.log(Days1['Tue'] === 2); // true
console.log(Days1['Sat'] === 6); // true
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
var Animal = /** @class */ (function () {
    // public name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    // 简写模式
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal;
}());
var a = new Animal('Tom');
console.log(a.sayHi()); // My name is Tom
// (1)，类的继承：使用extends关键字来实现继承，子类中使用super关键字来调用父类的构造函数和方法
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.sayHi = function () {
        return "" + _super.prototype.sayHi.call(this); // 调用父类的 sayHi 方法
    };
    return Cat;
}(Animal));
var c = new Cat('Jerry');
console.log(c.sayHi()); // My name is Jerry
// (2)，存取器：getter和setter，可以改变属性的赋值和读取行为
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Object.defineProperty(Animal2.prototype, "name", {
        get: function () {
            return 'Jack';
        },
        set: function (val) {
            console.log('setter', val);
        },
        enumerable: false,
        configurable: true
    });
    return Animal2;
}());
var a1 = new Animal2('Jeerrr');
console.log(a1.name); // Jack
a1.name = 'Tommm'; // setter Tommm
// (3)，静态方法 static：修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
var Animal3 = /** @class */ (function () {
    function Animal3() {
    }
    Animal3.isAnimal = function (a) {
        return a instanceof Animal3;
    };
    return Animal3;
}());
// let a2 = new Animal3('JAck');
console.log(Animal3.isAnimal(a1)); // true
// console.log(a2.isAnimal(a2)); // Uncaught TypeError: a2.isAnimal is not a function
// (4)，静态属性 static
var Animal4 = /** @class */ (function () {
    function Animal4() {
        // ...
    }
    Animal4.num = 42;
    return Animal4;
}());
console.log(Animal4.num); // 42
// 4-2，TypeScript中类的用法：public、private、protected
// public：修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public的
// private：修饰的属性或方法是私有的，不能在声明它的类的外部被访问
// protected：修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也是允许被访问的。
// private：很多时候，我们希望有的属性只能在本类中使用，这个时候就可以使用private了。
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var person1 = new Person1('kevin');
// console.log(person1.name); // 属性“name”为私有属性，只能在类“Person1”中访问。
// person1.name = "Tom"; // 属性“name”为私有属性，只能在类“Person1”中访问。
// protected：如果我们希望有的属性只能在本类中使用，也允许在子类中使用，但是不允许在外部使用。
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    return Son;
}(Person2));
// 参数属性：修饰符和readonly还可以用在构造函数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁
var Person3 = /** @class */ (function () {
    // public name: string;
    // constructor(name) {
    //   this.name = name;
    // }
    // 简写为
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
// readonly：只读属性关键字，只允许出现在属性声明或索引签名或构造函数中
var Person4 = /** @class */ (function () {
    function Person4(name) {
        this.name = name;
    }
    return Person4;
}());
var person5 = new Person4('Jack');
console.log(person5.name); // Jack
// person5.name = "kevin"; // 无法分配到 "name" ，因为它是只读属性。
// 需要注意的是：如果readonly和其他访问修饰符同时存在的话，需要写在其后面。
var Person6 = /** @class */ (function () {
    function Person6(name) {
        this.name = name;
    }
    return Person6;
}());
// 抽象类：abstract用于定义抽象类和其中的抽象方法
// 首先，抽象类是不允许被实例化的，只能被子类继承，其次，抽象类中的抽象方法必须被子类实现
var Person7 = /** @class */ (function () {
    function Person7(name) {
        this.name = name;
    }
    return Person7;
}());
var Son2 = /** @class */ (function (_super) {
    __extends(Son2, _super);
    function Son2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Son2.prototype.sayHi = function () {
        return 'Hi Kevin';
    };
    return Son2;
}(Person7));
var person8 = new Son2('kevin');
console.log(person8.sayHi()); // Hi Kevin
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
// 5-3，接口继承类：常见的面向对象语言中，接口是不能继承类的，但是在TypeScript中却是可以的；
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
/**
 * 6，泛型：是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性;
 */
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
var arr3 = createArray(3, 'x');
console.log('arr', arr3); // ['x', 'x', 'x']
var arr4 = createArray(3, 3);
console.log('arr', arr4); // [3, 3, 3]
// 6-1，多个类型参数：定义泛型时，可以一次性定义多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([7, 'seven'])); // ['seven', 7]
// 6-2，泛型约束
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 })); // {a: 1, b: 10, c: 3, d: 20}
var createArrayFun;
createArrayFun = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
console.log(createArrayFun(4, 4)); // [4, 4, 4, 4]
// 6-4，泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
// 6-5，泛型参数的默认类型
function createArrayFunc2(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArrayFunc2(4, 5)); // [5, 5, 5, 5]
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return '';
}
