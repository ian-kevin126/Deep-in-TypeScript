"use strict";
/**
 * TypeScript类的出现完全改变了前端领域项目代码编写模式，配合TypeScript静态语言，编译期间就能检查语法错误的优势
 * 【项目上线后隐藏语法的风险几乎为零，相比不用TypeScript开发项目，使用TypeScript后对前端项目尤其是大中型项目的开发或底层第三方插件、
 * 组件库的开发带来的优势已超乎想象】
 *
 * 相对于以前JavaScript不得不用构造函数来充当“类”，TypeScript类的出现可以说是一次技术革命。让开发出来的项目尤其是大中型项目的可读性好，可扩展性好了也不止一点半点。
 *
 * TypeScript类让前端开发人员开发和组织项目或阅读各大前端框架源码的思维方式变得先进了和生活化了许多。因为类是OOP【面向对象编程】的技术基石。
 *
 * TypeScript类是OOP的技术基石，包括类、属性封装、继承、多态、抽象、泛型。紧密关联的技术包括方法重写，方法重载，构造器，构造器重载，类型守卫，自定义守卫，静态方法、属性，关联引用属性，多种设计模式等。
 *
 * 什么是类？类就是拥有相同属性和方法的一系列对象的集合，类是一个模具，是从该类包含的所有具体对象中抽象出来的一个概念，类定义了它所包含的全体对象的静态特征（属性）和动态特征（方法）。
 *
 * 子类：继承父类的非私有属性和方法，同时也可以具备独有的属性和方法。
 *
 * 实例：new 出来的一个对象。
 */
var Person = /** @class */ (function () {
    function Person(_name, _age, _phone) {
        // public name: string | undefined; // TypeScript4.0之前属性如果没有赋值报错的解决办法，加一个undefined。
        // 类上定义的属性一定是描绘这个类本身特征的变量，不建议把一些无关的变量定义放在类属性上
        // 对象的变量/实例的 变量/类的【非静态属性】= 简称属性
        this.name = 'noname';
        this.age = 0;
        this.phone = "11122223333";
        this.name = _name;
        this.age = _age;
        this.phone = _phone;
    }
    Person.prototype.doEat = function (who, how) {
        return this.name + ", " + who + ", " + how;
    };
    return Person;
}());
var person = new Person('kevin', 12, '121313131');
