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

// function createInstanceFactory<T>(
//   Constructor: Constructor<T>,
//   ...args: ConstructorParamsType<Constructor<T>>
// ): T {
//   console.log(`${Constructor.name} 被创建了`);
//   return new Constructor(...args);
// }

// let res1 = createInstanceFactory(TestClass, '王五', 10);
// res1.eat();

function createInstanceFactory<T, U extends new (...args: any[]) => any>(
  Constructor: Constructor<T>,
  ...args: ConstructorParamsType<U>
): T {
  console.log(`${Constructor.name} 被创建了`);
  return new Constructor(...args);
}

let res1 = createInstanceFactory<TestClass, typeof TestClass>(TestClass, '王五', 10);
res1.eat();

interface Ref<T = any> {
  value: T;
}

function isRef<T>(value: Ref<T> | unknown): value is Ref {
  if (value && typeof value === 'object' && (value as Ref<T>).value) {
    return true;
  }
  return false;
}

function unref<T>(ref: T): T extends Ref<infer U> ? U : T {
  return isRef(ref) ? ref.value : ref;
}

export default void 0;
