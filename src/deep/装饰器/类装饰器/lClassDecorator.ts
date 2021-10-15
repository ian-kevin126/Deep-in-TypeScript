function FirstClassDecorator(targetClass?: any) {
  // targetClass 指向了被修饰的类
  let targetClassObj = new targetClass();
  targetClassObj.buy(); // 下单购买
  console.log(targetClass.name); // CustomerService
}

@FirstClassDecorator
class CustomerService {
  public name: string = '下单';
  constructor() {}
  buy() {
    console.log(this.name + '购买');
  }
  placeOrder() {
    console.log(this.name + '下单购买');
  }
}

export default void 0;
