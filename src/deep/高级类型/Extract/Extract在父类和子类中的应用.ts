/**
 * 1.从结果上详细对比Extract泛型约束和类型断言【父子类】
 * 2.从结果上详细对比Extract泛型约束和类型断言【联合类型】
 * 3.从结果上详细对比Extract泛型约束和类型断言【函数】
 * 4.Extract真实应用场景
 */

// type MyExtract<T, U> = T extends U ? T : never;

// type A = MyExtract<string | number | boolean, boolean | number>;

class People {
  constructor(public name: string, public sex: string) {}
  eat() {}
}

class ChinesePeople extends People {}

// 子类 extends 父类 返回true => 返回T类型
type peopleExtractType = Extract<ChinesePeople, People>; // ChinesePeople

// 父类 extends 子类 因为父类继承子类本身不成立，所以一般都为false
// T extends U 如果T的属性和方法比U的方法少或者等于 它会认为 U是T的上层 T比U的属性多就会被认为父子关系成立（条件是它俩是继承关系）
// 可以理解为 只要父类的属性或方法少于或等于子类的方法或属性 会被认为 T extends U 成立
// 如果我们给ChinesePeople添加几个属性和方法 下面的type将返回never
type peopleExtractType2 = Extract<People, ChinesePeople>; // People

// 此时 子类的属性多余了父类 不在满足作为父类的U（ChinesePeople2） 比作为子类的T（People） 属性或方法少的条件了
class ChinesePeople2 extends People {
  getComplexion() {}
}
type peopleExtractType3 = Extract<People, ChinesePeople2>; // never

export default void 0;

type A = Extract<string | number, string | number | symbol>; // type A = string | number
