class TestClass {
  constructor(public name: string, public age: number) {}
  eat() {
    console.log(this.name + ':' + 'eat');
  }
}

class TestClass2 {
  constructor(public a1: number, public b1: boolean) {}
}

type ConstructorParamsType<T extends { new (...args: any[]): any }> = T extends {
  new (...args: infer P): any;
}
  ? P
  : never;

// 工厂函数 批量创建实例
// 支持根据传入的类做参数推断提示
function createInstanceFactory<T, U extends { new (...args: any[]): any }>(
  Constructor: { new (...args: any[]): T },
  ...args: ConstructorParamsType<U>
): T {
  return new Constructor(...args);
}

let res1 = createInstanceFactory<TestClass, typeof TestClass>(TestClass, 'xuke', 10);
let res2 = createInstanceFactory<TestClass2, typeof TestClass2>(TestClass2, 20, true);

export default void 0;
