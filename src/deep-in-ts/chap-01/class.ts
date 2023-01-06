console.log('******** ============ start ============ **********');

class Person {
  // 实例属性或者对象属性
  // public name: string | undefined; // 在ts4.0之前属性如果没有初始化会报错。解决办法：加一个undefined数据类型
  public name: string;
  public age: number;
  public phone: string;
  // 类中的引用类型
  //   public address: string[] = ['beijin', 'tianjin', 'shanghai'];
  public address: Array<string> = ['beijin', 'tianjin', 'shanghai'];
  // 函数
  public resolve: () => void = () => {};

  constructor(name: string, age: number, phone: string) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
}

const tom = new Person('tom', 121, '18213249987');

console.log('tom', tom.name); // tom
console.log('tom', tom.age); // 18
console.log('tom', tom.phone); // 18213249987
console.log('tom', tom.address); // ['beijin', 'tianjin', 'shanghai']

console.log('******** ============ end ============ **********');
export {};
