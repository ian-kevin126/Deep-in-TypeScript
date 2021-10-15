// function Parent(name, age) {
//   this.name = name;
//   this.age = age;
// }
// // Parent.prototype.getNmae = function () {
// //   console.log(this.name, this);
// // };

// function Son(favor, sex) {
//   this.favor = favor;
//   this.sex = sex;
// }

// // Son.prototype = new Parent('xuke', 22);
// var son = new Son('code', 'man');
// window.son = son;
// console.log('son: ', son);

// function Parent(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Parent.prototype.getNmae = function () {
//   console.log(this.name, this);
// };

// function Son(favor, sex) {
//   Parent.call(this, 'xuke', 22);
//   this.favor = favor;
//   this.sex = sex;
// }

// Son.prototype = Parent.prototype;
// var son = new Son('code', 'man');
// window.son = son;
// console.log(son);

// function Parent(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Parent.prototype.getNmae = function () {
//   console.log(this.name, this);
// };

// function Son(favor, sex) {
//   Parent.call(this, 'xuke', 22);
//   this.favor = favor;
//   this.sex = sex;
// }
// const obj = Object.create(Parent.prototype);
// Son.prototype = obj;
// Son.prototype.constructor = Son;
// console.log(obj);
// Son.prototype.getFavor = function () {};

// var son = new Son('code', 'man');
// window.son = son;
// console.log(son);
