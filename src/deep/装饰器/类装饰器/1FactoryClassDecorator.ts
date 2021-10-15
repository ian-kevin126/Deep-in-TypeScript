/**
 * 需求：对已经开发好的项目中的任何一个类，创建实例时，打印日志信息
 * 输出哪一个类被创建了，并输出传递了哪些参数信息
 */

// 当装饰器返回一个参数时 返回的参数必须得是一个类
// 而装饰器的参数就是要修饰的类 给装饰器的参数添加类型时 这个类型必须是一个类的类型
// 因为在装饰器中规定了 装饰器的返回值与入参（不带参的）必须得是一个构造函数（函数的参数对应的值就是被修饰的类）
function LoggerInfoDecorator<T extends new (...args: any[]) => any>(params: string) {
  console.log(params);
  return (targetClass: T) => {
    // 匿名类 return的这个新的类没有具体的名字
    return class extends targetClass {
      constructor(...args: any) {
        super(...args);
        console.log('日志信息...targetClass:', targetClass.name);
      }
      methodone() {
        console.log('methodone', this.name);
      }
    };
  };
}

@LoggerInfoDecorator('我是参数')
class Test {
  name!: string;
  age!: number;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name, '吃饭');
  }
}

let res = new Test('wer'); // 日志信息...targetClass: Test
(res as any).methodone(); // methodone wer
/**
 * 返回的实例 是被装饰器修饰过的 也就是装饰器函数中的那个匿名类构造出来的实例
 * 为什么可以这样用呢 看经过编译后的es5的代码，发现装饰器函数中如果返回一个新的值会把被装饰的类替换掉
 * 所以最终我们使用的这个Test类其实是用的LoggerInfoDecorator返回的新创建的类
 */
console.log(res);

export default void 0;
