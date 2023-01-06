console.log('******** ============ start ============ **********');

class People {
  constructor(public username: string, public age: number, public address: string) {}
}

class Stu implements People {
  public username!: string;
  public age!: number;
  public address!: string;
  public phone!: string;

  constructor(username: string, age: number, address: string) {
    this.address = address;
  }

  public study() {
    console.log('study');
  }
}

let people = new People('wqwq', 21, 'beijing');
let stuedConvert = people as Stu; // 类型断言
let stuedConvert2 = <Stu>people; // 类型转换
stuedConvert.study();

let stu = new Stu('dsada', 18, 'beijing');
let peopleConvert = stu as People;

// 一定要两个类的属性有完全重叠的部分，才可以互相断言，否则不可以，比如Stu中如果少了username，age，address中的任何一个，都不能互相断言

console.log('******** ============ end ============ **********');
export {};
