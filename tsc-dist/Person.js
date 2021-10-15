"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 姓名 年龄 地址 身份证号 联系方法 家庭地址 微信号
var Person = /** @class */ (function () {
    /**
     * 创建对象一共做了三件事
     *   第一件事：在堆中为类的某个对象（实例）分配一个空间
     *   第二件事：调用对应的构造函数（构造器）new Person() 会自动匹配无参的构造器
     *     并且会把构造器中的各个参数赋值给对象属性
     *   第三件事：把对象赋值给对象变量（把实例赋值给实例变量）对象变量是一个集合
     */
    function Person(name, age, phone) {
        // 类上定义的属性一定是描述这个类本身特征的变量，不能把一些无关的变量定义成类的属性
        // 对象的变量=实例的变量=类的（非静态的）属性=简称属性
        // 实例属性或者对象属性
        // typescript4.0之前属性如果没有赋值 会报错 解决的方法：增加一个undefined
        // public name: string | undefined
        this.name = 'name';
        this.age = 0;
        this.phone = 'phone';
        this.address = ['济南市历下区'];
        this.resolve = function () { };
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    Person.prototype.doEat = function (who, address) {
        console.log("\u548C" + who + "\u548C\u5403\u996D\uFF0C\u5728" + address + "\u5403\u996D");
    };
    return Person;
}());
// 对象变量或者实例变量
var xk = new Person('徐轲', 18, '183100001234');
// 对象属性
// console.log(xk.name);
exports.default = Person;
