function UrlParam(params: any) {
  return (targetClassPrototype: any, methodName: string, paramsIndex: number) => {
    console.log('targetClassPrototype', targetClassPrototype); // 原型对象
    console.log('methodName', methodName); // 被装饰器修饰的方法名称 eat
    console.log('paramsIndex', paramsIndex); // 被装饰器修饰的方法的参数的位置 0
    targetClassPrototype.info = params;
  };
}

class People {
  eat(@UrlParam('地址信息') address: string, who: string) {
    console.log('address', address, this);
  }
}
new People().eat('北京', 'xk');

export default void 0;
