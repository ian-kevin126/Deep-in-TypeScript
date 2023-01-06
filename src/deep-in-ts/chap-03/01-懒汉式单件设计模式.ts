console.log('******** ============ start ============ **********');

/**
 * 懒汉式单件设计模式：等到需要使用对象的时候才创建对象，按需创建
 * 第一步：把构造器设置为私有的，不允许外部来创建类的实例【对象】
 * 第二步：至少应该提供一个外部可访问的方法或属性，外部可以通过这个方法或属性来得到一个对象，所以应该把这个方法设置为静态方法
 * 第三步：外部调用第二步提供的方法来获取一个对象
 */
class MyLocalStorage {
  // 静态属性和对象属性【实例属性】是类中两大成员
  static localStorage: MyLocalStorage; // 引用静态属性

  count!: number;
  private static total: number = 0;
  private constructor() {
    console.log('这是TS的单件设计模式的静态方法的构造器');
  }

  // 提供一个外部可访问的方法，通过这个方法得到一个对象
  // 1，带static关键字的方法就是一个静态方法
  // 2，静态方法和对象无关，外部的对象变量不能调用静态方法和静态属性
  // 3，外部可以通过类名来调用静态方法和属性
  public static getInstance() {
    if (!this.localStorage) {
      // 如果静态对象属性指向创建对象
      console.log('我是一个undefined的静态属性，用来指向一个对象空间的静态属性');
      this.localStorage = new MyLocalStorage();
    }
    return this.localStorage;
  }

  public static addTotal() {
    this.total += 3;
  }

  public static getToTal() {
    return this.total;
  }

  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string) {
    let value = localStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  }
}

console.log(MyLocalStorage.getToTal());
MyLocalStorage.addTotal();
console.log(MyLocalStorage.getToTal());
MyLocalStorage.addTotal();
console.log(MyLocalStorage.getToTal());

console.log('******** ============ end ============ **********');
export {};
