function MyMethodDecorator(str: string) {
  /**
   * 方法装饰器
   * @param targetClassPrototype 被修饰方法所在类的原型 如：RoleService.prototype
   * @param methodName 方法名
   * @param methodDescr 方法的描述符
   */
  return (targetClassPrototype: any, methodName: string, methodDescr: PropertyDescriptor) => {
    // 运行时设置拦截器 做一些操作
    const _methodDescr = methodDescr.value;
    methodDescr.value = function (...args: any[]) {
      console.log('我是methodDescr执行前运行的');
      _methodDescr.call(this, ...args);
      console.log('我是methodDescr执行后运行的');
    };
  };
}

class RoleService {
  public roleName: string = 'admin';
  constructor() {}

  @MyMethodDecorator('run decorator method')
  DistribRoles(...args: any[]) {
    // 分配角色
    console.log(this, '分配角色... 参数是', ...args);
  }
}

const instance = new RoleService();
instance.DistribRoles(1, 2, 3);

export default void 0;
