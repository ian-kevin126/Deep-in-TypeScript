console.log('******** ============ start ============ **********');

abstract class Vechile {
  static count: number = 3;
  public brand: string; // 品牌
  public vechileNo: string; // 车牌号
  public days: number; // 租赁天数
  public total: number = 0; // 支付的租赁总费用
  public deposit: number; // 押金
  constructor(brand_: string, vechileNo_: string, days_: number, deposit_: number) {
    this.brand = brand_;
    this.vechileNo = vechileNo_;

    this.days = days_;
    this.deposit = deposit_;
    console.log('constructor Vechile=>this.brand:', this.brand);
  }
  // 计算租赁车的价格 ( calculateRent)
  public calculateRent() {
    console.log('calculateRent来自Vechile=>this.brand:', this.brand);

    console.log(this.brand + ' 车牌号为:' + this.vechileNo + '开始被租');
    return 0;
  }
  //支付押金的方法( payDesposit)
  payDesposit() {
    console.log(this.brand + ' 车牌号为:' + this.vechileNo + ' 支付了:' + this.deposit);
  }

  //  安全检测方法（safeShow)
  public safeShow() {
    console.log('车规则....');
    console.log(this.brand + ' 车牌号为:' + this.vechileNo + ' 违规了:');
  }
}

// 子类Car类 独有属性为type_
class Car extends Vechile {
  // public brand: string = "nobrand"
  public type: string; //车的型号
  constructor(brand_: string, vechileNo_: string, days_: number, deposit_: number, type_: string) {
    //  Vechile.call(this,brand_, vechileNo_, days_, total_, deposit_)
    super(brand_, vechileNo_, days_, deposit_);
    this.type = type_;
  }
  // 根据车的型号来获取租用一天该型号车的租金
  public getPriceByType() {
    let rentMoneyByDay: number = 0; //每天的租金
    if (this.type === '普拉多巡洋舰') {
      rentMoneyByDay = 800;
    } else if (this.type === '凯美瑞旗舰版') {
      rentMoneyByDay = 400;
    } else if (this.type === '威驰智行版') {
      rentMoneyByDay = 200;
    }
    return rentMoneyByDay;
  }

  public calculateRent() {
    //方法重写 [override]
    // this.safeShow();// 寄生组合继承模式 middle()
    super.calculateRent(); //=Vechile.prototype.calculateRent.call(this)
    console.log('Car:', Car.count);
    console.log('this.brand:', this.brand);
    this.total += this.days * this.getPriceByType();
    return this.total;
  }
  public checkIsWeigui(isOverWeight: boolean) {
    if (isOverWeight) {
      this.total += this.total + 500;
    }
  }
}

class Bus extends Vechile {
  public seatNum: number; // 座位数
  constructor(
    brand_: string,
    vechileNo_: string,
    days_: number,
    deposit_: number,
    seatNum_: number
  ) {
    //  Vechile.call(this,brand_, vechileNo_, days_, total_, deposit_)
    super(brand_, vechileNo_, days_, deposit_); //使用父类的构造函数的好处
    this.seatNum = seatNum_;
    if (this.seatNum > 200) {
      throw new Error('座位数不能超过200');
    }
  }

  public getPriceBySeatNum() {
    //计算租赁价格
    let rentMoneyByDay: number = 0; //每天的租金
    if (this.seatNum <= 16) {
      rentMoneyByDay = 800;
    } else if (this.seatNum > 16) {
      rentMoneyByDay = 1600;
    }
    return rentMoneyByDay;
  }
  public calculateRent() {
    super.calculateRent();
    this.total += this.days * this.getPriceBySeatNum();
    return this.total;
  }

  public checkIsOverNum(isOverWeight: boolean) {
    if (isOverWeight) {
      this.total = this.total + 2000;
    }
  }
}

class Truck extends Vechile {
  ton!: number; // 座位数
  constructor(brand_: string, type_: string, days_: number, deposit_: number, ton_: number) {
    super(brand_, type_, days_, deposit_);
    this.ton = ton_;
    if (this.ton < 300 || this.ton > 2000) {
      throw new Error('吨数在300-2000吨之间');
    }
  }

  checkIsOverWeight(isOverWeight: boolean) {
    if (isOverWeight) {
      console.log('超载了');
      this.total = this.total + 2000;
    }
  }
  CalRentPriceByTon() {
    //计算租赁价格
    let rentMoneyByDay: number = 0; //每天的租金
    if (this.ton <= 500) {
      //500吨
      rentMoneyByDay = 750;
    } else if (this.ton > 500) {
      rentMoneyByDay = 1350;
    }
    return rentMoneyByDay;
  }
  public calculateRent() {
    return this.CalRentPriceByTon() * this.days;
  }

  public calDesposit() {
    return this.deposit;
  }
}

class Dahuoche extends Vechile {
  ton!: number; // 座位数
  constructor(brand_: string, type_: string, days_: number, deposit_: number, ton_: number) {
    super(brand_, type_, days_, deposit_);
    this.ton = ton_;
  }
  public calculateRent() {
    return 3000;
  }
}

class Customer {
  rentVechile(vechile: Vechile) {
    if (vechile instanceof Car) {
      vechile.checkIsWeigui(true);
    } else if (vechile instanceof Bus) {
      vechile.checkIsOverNum(true);
    } else if (vechile instanceof Truck) {
      vechile.checkIsOverWeight(true);
    }
    return vechile.calculateRent();
    //<Bus>vechile 效果= vechile as Bus
    //vechile as unknown
    //vechile.calculateRent()
    //(vechile as Bus).checkIsOverNum(true)
  }
}

//let car = new Car("普拉多", "京3A556", 3, 100000, "凯美瑞旗舰版")
let cust = new Customer();
let car = new Car('普拉多', '京3A556', 3, 100000, '凯美瑞旗舰版');
//let bus = new Bus("大巴", "琼7A556", 2, 30000, 16)
//let truck = new Truck("卡车", "琼9A556", 2, 30000, 50)
//let dahuoche = new Dahuoche("卡车", "琼9A556", 2, 30000, 50)
//cust.rentVechile(bus)
console.log(cust.rentVechile(car));
//cust.rentVechile(truck)
//cust.rentVechile(dahuoche)
//console.log("顾客最后的租金是:",);
//let vechile2: Vechile =car
//vechile2 = new Bus("大巴", "琼7A556", 2, 30000, 16)
//vechile2 = new Truck("卡车", "琼9A556", 2, 30000, 50)
// 1.多态的定义:
// 父类的对象变量可以接受任何一个子类的对象,从而用这个父类的对象变量来调用子类中重写的方法而输出不同的结果.
// 2.产生多态的条件:
//   1.必须存在继承关系  2.必须有方法重写
// 3.多态的好处:
//    利于项目的扩展【从局部满足了 开闭原则--对修改关闭,对扩展开放】
// 4.多态的局限性
//    无法直接调用子类独有方法，必须结合instanceof类型守卫来解决
//let vechile: Vechile = new Car("普拉多", "京3A556", 3, 100000, "凯美瑞旗舰版")

console.log('******** ============ end ============ **********');
export {};
