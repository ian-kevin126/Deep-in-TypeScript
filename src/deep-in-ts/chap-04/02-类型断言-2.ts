console.log('******** ============ start ============ **********');

// 两个类中任意一个的属性和方法是另外一个类的属性和方法完全相同或子集，则这两个类可以相互断言，否则这两个类就不能相互断言
class People {
  constructor(public username: string, public age: number, public address: string) {}
}

class Stu {
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
let stuedConvert = people as Stu;
stuedConvert.study();

let stu = new Stu('dsada', 18, 'beijing');
let peopleConvert = stu as People;

// 一定要两个类的属性有完全重叠的部分，才可以互相断言，否则不可以，比如Stu中如果少了username，age，address中的任何一个，都不能互相断言

console.log('******** ============ end ============ **********');
export {};
