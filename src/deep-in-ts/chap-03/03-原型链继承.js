console.log('******** ============ start ============ **********');

function Parent(name, age) {
  this.name = name;
  this.age = age;
}

function Son(favor, sex) {
  this.favor = favor;
  this.sex = sex;
}

// Son.prototype = new Parent('kevin', 18);
Son.prototype = Parent.prototype;
Son.prototype.constructor = Son;

const son = new Son('basketball', 'male');

console.log(Son);
console.log(Son.prototype);
console.log(son);
console.log(son.name); // kevin
console.log(son.age); // 18

console.log('******** ============ end ============ **********');
export {};
