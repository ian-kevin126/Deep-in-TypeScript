class TestClass {
  constructor(public name: string, public classno: number) {}
  eat() {
    console.log('名字为：' + this.name);
  }
}

class TestClass2 {
  constructor(public a: string, public b: number) {}
  back() {}
}

type Constructor<T> = new (...args: any[]) => T;

type ConstructorParamsType<T extends new (...args: any[]) => any> = T extends new (
  ...args: infer P
) => any
  ? P
  : never;

let constructorParamsType: ConstructorParamsType<typeof TestClass> = ['a', 1];

function createInstanceFactory<T>(Constructor: Constructor<T>, ...args: any[]) {
  console.log(`${Constructor.name} 被创建了`);
  return new Constructor(...args);
}

let res1 = createInstanceFactory(TestClass, '王五', 10);
res1.eat();

export default void 0;
