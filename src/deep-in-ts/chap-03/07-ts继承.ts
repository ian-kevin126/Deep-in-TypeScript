console.log('******** ============ start ============ **********');
// 父类
class Vehicle {
  public brand: string; // 品牌
  public vehicleNo: string; // 车牌号
  public days: number; // 租赁天数
  public total: number; // 支付的租赁总费用
  public deposit: number; // 押金

  constructor(brand_: string, vehicleNo_: string, days_: number, total_: number, deposit_: number) {
    this.brand = brand_;
    this.vehicleNo = vehicleNo_;
    this.days = days_;
    this.total = total_;
    this.deposit = deposit_;
  }

  // 私有的方法是不可以在子类中重写的
  private method_1() {}
  // 受保护的方法可以被子类重写或调用，但是不能在外部被调用
  protected method_2() {}
  // 只有共有的public才可以被外部调用
  public method_3() {}

  //   计算租赁加个
  public calculateRent() {
    return 0;
  }

  //   支付押金的方法
  public payDeposit() {
    console.log(this.brand + ' 车牌号为：' + this.vehicleNo + ' 支付了：' + this.deposit);
  }

  //   安全检测方法
  public safeShow() {
    console.log('车规则...');
    console.log(this.brand + ' 车牌号为：' + this.vehicleNo + '违规了');
  }
}

// 子类
class Car extends Vehicle {
  public type: string;

  constructor(
    brand_: string,
    vehicleNo_: string,
    days_: number,
    total_: number,
    deposit_: number,
    type_: string
  ) {
    // 1，super的使用方法一：可以帮助子类使用父类的构造函数
    // 等价于 Vehicle.call(this, brand_, vehicleNo_, days_, total_, deposit_)
    super(brand_, vehicleNo_, days_, total_, deposit_);
    this.type = type_;
  }

  public getPriceByType() {
    console.log(this.brand + ' 车牌号：' + this.vehicleNo + '开始被租');
    let rentMoneyByDay: number = 0; // 每天的租金

    if (this.type === '普拉多巡洋舰') {
      rentMoneyByDay = 800;
    } else if (this.type === '凯美瑞旗舰版') {
      rentMoneyByDay = 400;
    } else if (this.type === '威驰智行版') {
      rentMoneyByDay = 200;
    }

    return rentMoneyByDay;
  }

  // 重写父类的calculateRent方法
  public calculateRent() {
    // 2，super的使用方法二：调用父类的方法
    super.calculateRent(); // = Vehicle.prototype.calculateRent()
    console.log(this.brand + ' 车牌号：' + this.vehicleNo + '开始被租');
    return this.days * this.getPriceByType();
  }
}

const car_1 = new Car('普拉多巡洋舰', 'jing2111', 3, 50000, 1000, '普拉多巡洋舰');
console.log(car_1.calculateRent()); // 2400

console.log('******** ============ end ============ **********');
export {};
