console.log('******** ============ start ============ **********');

// 父类构造函数
function People(name, sex, phone) {
  this.name = name;
  this.sex = sex;
  this.phone = phone;
  this.showPhone = function () {
    console.log('phone: ', this.phone);
  };
}

People.prototype.friends = ['ian', 'tom'];
People.prototype.doEat = function () {
  console.log(this.name + '吃饭...');
};

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone); // 借用构造函数继承
  this.national = national;
}

let c = new ChinesePeople('kevin', 'male', '211121', 'china');
console.log(c.name); // kevin
console.log(c.national); // china
console.log(c.showPhone()); // phone:  211121

// 只能继承父类实例对象的属性和方法，不能继承原型对象的属性和方法
console.log(c.doEat()); // c.doEat is not a function

console.log('******** ============ end ============ **********');
export {};
