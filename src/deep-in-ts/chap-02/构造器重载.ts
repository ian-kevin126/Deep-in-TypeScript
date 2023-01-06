console.log('******** ============ start ============ **********');

type TypeChartParam = {
  width?: number;
  height?: number;
  radius?: number;
  // ...
};

// 计算创建正方形对象，可以给构造器传递宽和高，也可以给构造器传递一个包含了宽和高的形状参数对象，这样的场景就需要构造器重载
class Square {
  public width: number;
  public height: number;

  constructor(width_: number, height_: number); // 重载签名
  constructor(value: TypeChartParam); // 重载签名
  // 函数实现签名就不能用联合类型了，因为可能是一个number值，也可能是一个对象
  // constructor(valueOrWidth: number | TypeChartParam) {
  constructor(valueOrWidth: any, height_: number = 0) {
    if (typeof valueOrWidth === 'object') {
      this.width = valueOrWidth.width;
      this.height = valueOrWidth.height;
    } else {
      this.width = valueOrWidth;
      this.height = height_;
    }
    // 构造器函数有一个返回值，不写就是隐式的，写了就是显式的
    // 所以构造器重载就不需要关注返回值类型了
    // return this;
  }

  public getArea(): number {
    return this.height * this.width;
  }
}

const square_1 = new Square(40, 50);
console.log(square_1.getArea()); // 2000
const chartParamObj: TypeChartParam = { width: 50, height: 90 };
const square_2 = new Square(chartParamObj);
console.log(square_2.getArea()); // 4500

console.log('******** ============ end ============ **********');
export {};
