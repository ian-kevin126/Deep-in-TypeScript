console.log('******** ============ start ============ **********');

function People(name, sex, phone) {
  this.name = name;
  this.sex = sex;
  this.phone = phone;
}

People.prototype.doEat = function () {
  console.log(this.name + '吃饭...');
};

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone);
  this.national = national;
}

// 1，创建一个寄生构造函数
function Middle() {
  this.count = 1;
}
Middle.prototype = People.prototype;
// 2，子类的原型指向寄生新创建的构造函数的对象
ChinesePeople.prototype = new Middle();
ChinesePeople.prototype.constructor = ChinesePeople;

const c_1 = new ChinesePeople('ian', 'male', '2122212', 'han');
const c_2 = new ChinesePeople('kevin', 'male', '211322', 'tujia');

console.log('c_1', c_1);
console.log('c_1', c_1.doEat());

console.log('******** ============ end ============ **********');
export {};
