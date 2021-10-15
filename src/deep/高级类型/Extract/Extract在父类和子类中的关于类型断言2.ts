class People {
  constructor(public name?: string, public sex?: string) {}
  eat() {}
}

class ChinesePeople extends People {}
class ChinesePeople2 extends People {
  getComplexion() {}
}

/**
 * 一个父类对象的变量可以断言成子类的类型
 * 一个子类对象的变量也可以断言成父类的类型
 * 在父类和子类中的类型断言
 */

let people: People = new People();
let chinesePeople = people as ChinesePeople; // type => ChinesePeople
let p: People = chinesePeople as People;

export default void 0;
