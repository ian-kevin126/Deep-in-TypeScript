function Desc(params: any) {
  console.log(params);
  return (targetClass: any, methodName: string, paramsIndex: number) => {
    console.log('targetClass', targetClass); // 被修饰的类
    console.log('methodName', methodName); // undefined 第二个参数不存在
    console.log('paramsIndex', paramsIndex); // 构造器参数的位置 0
  };
}

class People {
  constructor(@Desc('地址信息') public name: string, public count: number) {}
  eat(address: string, who: string) {
    console.log('address', address, this);
  }
}
new People('北京', 20);

export default void 0;
