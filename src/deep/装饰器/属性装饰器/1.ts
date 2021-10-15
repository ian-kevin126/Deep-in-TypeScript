function loginProperty(str: string) {
  return function (targetClassPrototype: object, propertyName: string | symbol) {
    console.log('targetClassPrototype', targetClassPrototype);
    console.log('propertyName', propertyName);
  };
}

// 顾客目标类
class CustomerService {
  public custname: string = '王五';

  @loginProperty('顾客登记')
  public degree: string = 'xxx';

  constructor() {}

  show() {
    console.log('顾客姓名：' + this.custname);
  }
}

const res = new CustomerService();
console.log(res);

export default void 0;
