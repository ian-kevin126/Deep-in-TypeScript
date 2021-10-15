import 'reflect-metadata';

// const obj = {
//   name: 'xk',
//   age: 22,
//   info() {
//     console.log('信息');
//   }
// };

// Reflect.defineMetadata('metaobj', { name: 'metaobj-xk' }, obj);
// console.log(Reflect.getMetadata('metaobj', obj)); // { name: 'metaobj-xk' }

// Reflect.defineMetadata('metaage', 18, obj, 'age');
// console.log(Reflect.getMetadata('metaage', obj)); // undefined
// console.log(Reflect.getMetadata('metaage', obj, 'age')); // 18

// // 使用 Reflect.hasMetadata 查看对象或对象属性上是否存在某个元数据
// if (Reflect.hasMetadata('metaobj', obj)) {
//   console.log('存在 metaobj'); // ✔
// }
// if (Reflect.hasMetadata('metaage', obj)) {
//   console.log('存在 metaage'); // ✘
// }
// if (Reflect.hasMetadata('metaage', obj, 'age')) {
//   console.log('存在 metaage'); // ✔
// }

// 直接在类、方法上定义元数据
@Reflect.metadata('decribe', '都是地球人')
class People {
  @Reflect.metadata('descible', '姓名不能包含非法汉字')
  username = 'wangwu';
  @Reflect.metadata('importinfo', '吃烤鸭')
  @Reflect.metadata('importinfo2', '吃烤鸭2')
  eat(test1: string, test2: number): string {
    return 'functionName:eat';
  }
}

console.log(Reflect.getMetadataKeys(People.prototype, 'eat'));
/*
  Reflect.getMetadataKeys 返回值：
  [
    'design:returntype',
    'design:paramtypes',
    'design:type',      
    'importinfo2',      
    'importinfo'        
  ]
*/
console.log(Reflect.getMetadata('design:returntype', People.prototype, 'eat')); // String
console.log(Reflect.getMetadata('design:paramtypes', People.prototype, 'eat')); // [String, Number]
console.log(Reflect.getMetadata('design:type', People.prototype, 'eat')); // Function

export default void 0;
