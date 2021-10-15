function FirstClassDecorator(params: any) {
  console.log(params); // aaa

  // 当修饰器带参数时 需要返回一个函数 返回的这个新的函数才是用来修饰对应的类的
  return (targetClass: any) => {
    let targetClassObj = new targetClass();
    targetClassObj.buy(); // 下单购买
    console.log(targetClass.name); // CustomerService
  };
}

@FirstClassDecorator('aaa')
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
