"use strict";
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
var tom = {
    name: 'tom',
    age: 18
};
var tom4 = {
    name: 'tom'
};
var tom6 = {
    name: 'tom',
    age: 18,
    gender: 'male'
};
var tom7 = {
    name: 'tom',
    age: 18,
    gender: 'male',
    id: 12112
};
// tom7.id = 212121321322; // 无法分配到 "id" ，因为它是只读属性。
/**
 * 二、数组的类型
 */
// 1，定义一个数组变量
var fibonacci = [1, 2, 3, 4, 5, 6];
var fibonacci1 = [1, 2, 3, 4, 55, 6];
var fibonacci2 = [1, 2, 3, 4, 5];
// 3，类数组：虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂得多，不过有一种情况例外，那就是它常用来表示【类数组】。
function sum() {
    // let args: number[] = arguments;
    // 上一句会报错：类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 24 项。
    // 因为arguments实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口。
    var args = arguments;
}
// 在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有length和callee两个属性
// 事实上常用的类数组都有自己的接口定义，如IArguments，NodeList，HTMLCollection等；
function sum1() {
    var args = arguments;
}
// 4，any在数组中的应用
var list = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
/**
 * 三、函数的类型
 */
// 1，函数定义
function add(x, y) {
    return x + y;
}
// add(1, 2, 3); 传入多余的参数是不允许的。
// 2，函数表达式
// 不要混淆TypeScript中的箭头【=>】和ES6中的【=>】，TS中的左边是入参类型（用括号括起来），右边是输出类型。
var myAdd = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
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
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + '' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tim = buildName('Tim');
// 需要注意的是：可选参数必须放在必需参数后面。换句话说，可选参数后面不允许再出现必需参数。
// 5，参数默认值
function buildName1(lastName, firstName) {
    if (lastName === void 0) { lastName = 'cat'; }
    return firstName + '' + lastName;
}
var tomcat1 = buildName('Tom', 'Cat');
var cat = buildName(undefined, 'Cat');
// 此时就不再受【可选参数必须接在必需参数后面】的限制了
// 6，剩余（rest）参数
// 事实上，items是一个数组，所以我们可以用数组的类型来定义它
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (i) { return array.push(i); });
}
var aaa = [];
push(aaa, 1, 2, 3);
/**
 * 7，函数重载
 *
 * 重载允许一个函数接收不同数量或类型的参数时，做出不同的处理。比如，我们需要实现一个函数reverse，输入数字123的时候，输出
 * 反转的数字321，输入字符串hello的时候，输出反转的字符串olleh。
 */
function reverseString(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 函数实现
function reverseStringFunc(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function getAnimalName(animal) {
    return animal.name;
}
// 而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：
function isFish(animal) {
    // 报错：类型“Cat | Fish”上不存在属性“swim”。类型“Cat”上不存在属性“swim”。
    // if (typeof animal.swim === "function") {
    //   return true;
    // }
    // 只需要加上类型断言就可以解决这个问题
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
// 需要注意的是：类型断言只能【欺骗】TypeScript编辑器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误。
function swim(animal) {
    animal.swim();
}
var tom12 = {
    name: 'Tom',
    run: function () {
        console.log('run');
    }
};
swim(tom12); // 这个例子编译时不会报错，单在运行时会报错 —— Uncaught TypeError: animal.swim is not a function`
// 原因是 (animal as Fish).swim(); 这段代码隐藏了animal可能为Cat的情况，将animal直接断言为Fish了。而TypeScript编译器
// 信任了我们的断言，故而在调用swim()时没有编译报错。但是，一旦传入了Cat类型的参数，由于Cat上并没有swim方法，导致运行时
// 错误。
// 总之，适用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。
// 2，将一个父类断言为更加具体的子类：当类之间有几成关系时，类型断言也是很常见的
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 0;
        return _this;
    }
    return ApiError;
}(Error));
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HttpError;
}(Error));
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
// 上面的例子中，我们声明了函数isApiError，它用来判断传入的参数是不是ApiError类型，为了实现这样一个函数，它的参数的类型
// 肯定是比较抽象的父类Error，这样的话这个函数就能接受Error或它的子类作为参数了。但是由于父类Error中没有code属性，故直接
// 获取error.code会报错，需要使用类型断言获取(error as ApiError).code。
// 实际上，我们还有更好的方法来判断error的类型：instanceof，因为ApiError是一个JavaScript的类型，能够通过instanceof直接判断。
function isApiError1(error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
function isApiError2(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
// 3，将任何一个类型断言为any：理想情况下，TypeScript的类型系统运转良好，每个值的类型都具体而精确，当我们引用一个在此类型上
// 不存在的属性或方法的时候，就会报错
var fooo = 1;
// fooo.length = 1; // 类型“number”上不存在属性“length”。
// 这种错误提示是非常有用的，但是有时候，我们非常确定这段代码不会报错，比如下面这个例子：
// window.fooo = 1; // 类型“Window & typeof globalThis”上不存在属性“fooo”。
// 但是，TypeScript编译时居然报错了，此时我们就可以使用as any临时将window断言为any类型：
window.foooo = 1;
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
function getCacheData(key) {
    return window.cache[key];
}
var tom23 = getCacheData('tom');
tom23.run();
var tom_1 = {
    name: 'tom',
    run: function () {
        console.log('run');
    }
};
var animal = tom_1;
function testAnimal(animal) {
    return animal;
}
function testCat(cat) {
    return cat;
}
function testCat1(cat) {
    return cat;
}
/**
 * 在上面的例子中，若直接使用 cat as Fish 肯定会报错，因为Cat和Fish互相不兼容。但是若使用双重断言，则可以打破【要使得A能够被断言为B，只需要A兼容B或者B
 * 兼容A即可】的限制，将任何一个类型断言为任何另一个类似。
 *
 * 若你使用了这种双重断言，那么十有八九是非常错误的，他很可能会导致运行时错误。
 *
 * 【除非迫不得已，千万别用双重断言】
 */
/**
 * 7，类型断言 VS 类型转换
 *
 * 类型断言只会影响TypeScript编译时的类型，类型断言语句在编译结果中会被删除。
 */
function toBoolean1(something) {
    return something;
}
toBoolean1(1); // 返回值为 1
// 在上面的例子中，将 something 断言为 boolean 虽然可以通过编译，但是并没有什么用，代码在编译后会变成：
function toBoolean2(something) {
    return something;
}
toBoolean2(1); // 返回值为 1
// 所以类型断言不是类型转换，它不会真的影响到变量的类型。
// 若要进行类型转换，需要直接调用类型转换的方法：
function toBoolean3(something) {
    return Boolean(something);
}
toBoolean3(1); // 返回值为 true
/**
 * 8，类型断言 VS 类型声明
 *
 */
function getCacheData1(key) {
    return window.cache[key];
}
var tom1 = getCacheData('tom');
tom1.run();
// 我们使用 as Cat将any类型断言为了Cat类型，但实际上还有其他方法可以解决这个问题：
function getCacheData2(key) {
    return window.cache[key];
}
var tom2 = getCacheData('tom');
tom2.run();
var anim = {
    name: 'tom'
};
var tom3 = anim;
var animal32 = {
    name: 'tom'
};
// let tom65: Cat = animal32;
// index.ts:12:5 - error TS2741: Property 'run' is missing in type 'Animal' but required in type 'Cat'.
// 则会报错，不允许将 animal 赋值为 Cat 类型的 tom。
// 这很容易理解，Animal 可以看作是 Cat 的父类，当然不能将父类的实例赋值给类型为子类的变量。
/**
 * 深入地讲，它们的核心区别就在于：
 * - animal 断言为 Cat，只需要满足 Animal 兼容 Cat 或 Cat 兼容 Animal 即可
 * - animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行
 *
 * 但是 Cat 并不兼容 Animal。
 *
 * 而在前一个例子中，由于 getCacheData('tom') 是 any 类型，any 兼容 Cat，Cat 也兼容 any，故：
 * const tom = getCacheData('tom') as Cat;
 * 等价于：
 * const tom: Cat = getCacheData('tom');
 *
 * 知道了它们的核心区别，就知道了类型声明是比类型断言更加严格的。所以为了增加代码的质量，我们最好优先使用类型声明，这也比类型断言的 as 语法更加优雅。
 */
/**
 * 9，类型断言 VS 泛型
 * 前置知识：https://ts.xcatliu.com/advanced/generics.html
 */
function getCacheData5(key) {
    return window.cache[key];
}
var tom322 = getCacheData5('tom');
tom322.run();
//  我们还有第三种方式可以解决这个问题，那就是泛型：
function getCacheData6(key) {
    return window.cache[key];
}
var tom344 = getCacheData6('tom');
tom344.run();
//  通过给 getCacheData 函数添加了一个泛型 <T>，我们可以更加规范的实现对 getCacheData 返回值的约束，这也同时去除掉了代码中的 any，是最优的一个解决方案。
