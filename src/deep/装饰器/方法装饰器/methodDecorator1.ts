function MyMethodDecorator(str: string) {
  console.log(str); // run decorator method
  return (targetClassPrototype: any, methodName: string, methodDescr: PropertyDescriptor) => {
    console.log('targetClassPrototype >>> ', targetClassPrototype);
    console.log('methodName >>> ', methodName);
    console.log('methodDescr >>> ', methodDescr);
    // methodDescr 描述这个属性的 是否可读写改删
    // 执行被装饰器修饰的方法
    methodDescr.value(); // => 分配角色...
  };
}

class RoleService {
  public roleName: string = 'admin';
  constructor() {}

  @MyMethodDecorator('run decorator method')
  DistribRoles() {
    // 分配角色
    console.log('分配角色...');
  }
}

export default void 0;
