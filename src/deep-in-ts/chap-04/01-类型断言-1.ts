console.log('******** ============ start ============ **********');

class People {
  public myUsername!: string;
  public myAge!: number;
  public address!: string;
  public phone: string;

  constructor() {}

  step() {
    console.log('People => step');
  }

  eat() {}
}

class Stu extends People {
  public username!: string;
  public age!: number;
  public address!: string;

  constructor(username: string, age: number, address: string, public phone: string) {
    super();
  }
  study() {}
}

let people = new People();
// let result = people as Stu; // 类型断言
let result = <Stu>people; // 类型转换
result.study(); // 编译的时候可以通过，可以获取到断言后类型的属性和方法，但不一定真的有这个方法

let stu = new Stu('wawa', 21, 'beijiing', '2113323');
stu as People; // 正确

console.log('******** ============ end ============ **********');
export {};
