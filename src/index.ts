import 'reflect-metadata';

// import Person from './Person';
// Person;

// import Order from './order/Order';
// Order;

// import getMessage from './wx-news/methodOverLoad';
// getMessage;

// const a: number = 1;

// import MyLocalstorage from './singleCase/localStorage';

// const store = new MyLocalstorage();

// console.log(store);
// console.dir(MyLocalstorage);

// const store1 = MyLocalstorage.getInstance('store1');
// const store2 = MyLocalstorage.getInstance('store2');
// console.log(store1);
// console.log(store2);
// console.log(store1 === store2);
// console.dir(MyLocalstorage);

// import allvechile from './allvechile/allvechile';

// allvechile;

// import './pagination/test';

// interface Ref<T = any> {
//   value: T;
// }

// function ref<T>(value: T): Ref<T> {
//   return {
//     value
//   };
// }

// const count = ref(1);
// count.value++;
// console.log(count);

// import './高级类型/infer/工厂函数推断参数类型';
// import './高级类型/Extract/Extract在父类和子类中的应用.ts';

// import './Promise/test';

// import './装饰器/类装饰器/lClassDecorator';
// import './装饰器/类装饰器/lClassDecorator2';
// import './装饰器/类装饰器/1FactoryClassDecorator';
// import './装饰器/类装饰器/2FactoryClassDecorator';
// import './装饰器/方法装饰器/methodDecorator1';
// import './装饰器/方法装饰器/methodDecorator拦截器1';
// import './装饰器/属性装饰器/1';

// import './装饰器/类、属性、方法装饰器综合使用';
// import './装饰器/参数装饰器/1';
// import './装饰器/构造器参数装饰器/1';

// import './装饰器/装饰器执行的顺序/1';
// import './装饰器/metadata/defineMetadata';

// import './装饰器/依赖注入/index';

// import './basics/basics';

import './utility_types/1_partial';

// 这个语句的作用就是，可以避免在不同的文件中声明相同的变量时导致的同名报错。这一句就是告诉ts引擎只在本文件中搜索。
// 不写export，就会变成全局的变量。
export {};

// function get(path: string) {
//   return (classProperty: any, methodName: string, desc: PropertyDescriptor) => {
//     console.log(classProperty, methodName, desc);
//   };
// }
// class User {
//   @get('/login')
//   login() {}
// }

// new User();
