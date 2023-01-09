 export {}

 /* 
 class Person{
    say(){}
 } 

function Person(){}
Object.defineProperty(Person.prototype,' say', {
    value:function say(){}
}); 
*/


//例1  命名空间，本质上闭包（立即执行函数）+  类装饰器
namespace a {
    function addNameEat(x: Function) {
        x.prototype.name = 'zhufeng';
        x.prototype.eat = function () { }
     }
 
    @addNameEat
    class Person {
        name: string;
        eat: Function;
        constructor() { }
    }
    let p: Person = new Person();
    //console.log(p.name);
    // p.eat();
}
 
// 例2 类装饰器工厂
namespace b{
    function addNameEatFactory(name: string) {
        return function addNameEat(x: Function) {
            x.prototype.name = name;
            x.prototype.eat = function () { }
        }
    }
    @addNameEatFactory('jiagou')
    class Person {
        name: string;
        eat: Function;
        constructor() { }
    }
    let p: Person = new Person();
    //console.log(p.name);
    //p.eat();
}


// 例3 类装饰器 ==> 新类替换旧类， 注意新类属性 可以多,但不能少
 namespace c{
     function replaceClass(constructor: Function) {
         return class {
             name: string;
             eat: Function;
             age:number;
             constructor() { }
         }
     }
     @replaceClass
     class Person {
         name: string;
         eat: Function;
         constructor() { }
     }
     let p: Person = new Person();
     //console.log(p.name);
     //p.eat();
}
 

//例4 类装饰器 ==> 装饰属性
 namespace d {
    // 4.1 如果装饰的是实例属性的话, target是构造函数的原型
    function upperCase(target:any,propertyKey:string){
        let value = target[propertyKey];
        const getter = ()=>value;
        const setter = (newVal:string)=>{value = newVal.toUpperCase()}
        if (delete target[propertyKey]){
            Object.defineProperty(target,propertyKey,{
                get:getter,
                set:setter,
                enumerable:true,
                configurable:true
            });
        }
    }

    //4.2 如果装饰的是静态属性的话,target是构造函数本身
    function staticPropertyDecorator(target: any, propertyKey: string) {
        console.log(target, propertyKey);
    }

    //4.3 装饰实例方法
    function noEnumerable(target: any, propertyKey: string,descriptor:PropertyDescriptor) {
        // console.log(target);
        // console.log(propertyKey);
        descriptor.enumerable=false;
     }

      //4.4 装饰实例方法，修改实例子方法为新的方法
     function toNumber(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
         let oldMethod = descriptor.value;
         descriptor.value = function (...args: any[]){
             args=args.map(item=>parseFloat(item));
             return oldMethod.apply(this, args);
         }
     }

    class Person{
        @upperCase
        name:string = 'zhufeng';//实例属性
        @staticPropertyDecorator
        static age:number=10;//静态属性
        @noEnumerable
        getName() { console.log(this.name); }//实例方法
        @toNumber
        sum(...args:any[]){//实例方法
            return args.reduce((accu: number, item: number)=>accu+item,0);
        }
      }
      let p = new Person();
      //console.log(p.name);
      //console.log(p.sum('1', '2', '3'));
 }


// 例5 类装饰器 ==> 参数装饰器
// 参数装饰器 在IOC容器里大放异彩  Nest.js大量的用到了参数装饰器
namespace e {

//target：静态成员就是构造函数，非静态成员就是构造函数原型；方法的名称；参数的索引
function addAge(target:any,methodName,paramIndex:number){
   //  console.log('例5.1----', target, methodName, paramIndex);
    target.age = 10;
}

class Person{
    age:number;
    login(username:string,@addAge password:string){
        console.log('例5.2----', this.age, username, password);
    }
  }

  let p = new Person();
  p.login('user','pwd');
 }


//例6 装饰器的执行顺序
namespace f {
    function ClassDecorator1(){
        return function(target){
            console.log('ClassDecorator1');
        }
     }

    function ClassDecorator2() {
        return function (target) {
            console.log('ClassDecorator2');
        }
    }

    function PropertyDecorator(name:string) {
        return function (target,propertyName) {
            console.log('PropertyDecorator', propertyName, name);
        }
    }

    function MethodDecorator() {
        return function (target, propertyName) {
            console.log('MethodDecorator', propertyName);
        }
    }

    function ParameterDecorator() {
        return function (target, methodName,index) {
            console.log('ParameterDecorator', methodName, index);
        }
    }

   @ClassDecorator1()
   @ClassDecorator2()  
   class Person{
       @PropertyDecorator('name')
       name:string = '';
       @PropertyDecorator('age')
       age:number=10;
       @MethodDecorator()
       hello(@ParameterDecorator() p1:string, @ParameterDecorator() p2:string){}
   }
 }

 /**
  * 执行顺序的规律
  * 1.类装饰器是最后执行的,后写的类装饰器先执行
  * 2.方法和就去参数中的装饰器先执行参数
  * 3. 就去和属性装饰器,谁在前面先执行谁
  * 
  * 一般从内往外执行 先内后外
  * 类比React组件的componentDidMount 先上后下 先内后外
  * 一定要学会知识的
  * koa 中间件 redux中间件
  * 
  */