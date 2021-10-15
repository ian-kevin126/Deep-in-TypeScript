function LoggerInfoDecorator<T extends new (...args: any[]) => any>(params: string) {
  return (targetClass: T) => {
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

@LoggerInfoDecorator<typeof Test>('我是参数')
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

let res = new Test('wer');

let wrapperFn = LoggerInfoDecorator<typeof Test>('我是参数');
/*
  LoggerInfoDecorator<new (...args: any[]) => Test>('我是参数')
    === LoggerInfoDecorator<typeof Test>('我是参数')
    === LoggerInfoDecorator('我是参数')
*/
let ConstructorFn = wrapperFn(Test);
let instance = new ConstructorFn('wer');

export default void 0;
