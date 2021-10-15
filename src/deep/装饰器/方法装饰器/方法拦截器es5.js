'use strict';
// 1. 底层JS 组合装饰器和目标类 __decorate函数
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    // argsnum 参数个数
    var argsnum = arguments.length;
    // targetinfo 被装饰器修饰的目标【类或属性或方法或方法参数，本案例为类】
    // argsnum=2 装饰器修饰的是类或者构造器参数，targetinfo=target[类名]
    // argsnum=4 装饰器修饰的是方法【第四个参数desc等于null] targetinfo=该方法的数据属性【desc = Object.getOwnPropertyDescriptor(target, key) 】
    // argsnum=3 装饰器修饰的是方法参数或者属性,targetinfo=undefined
    var targetinfo =
      argsnum < 3
        ? target
        : desc === null
        ? (desc = Object.getOwnPropertyDescriptor(target, key))
        : desc; //S100
    console.log('targetinfo', targetinfo);
    // decorator保存装饰器数组元素
    var decorator;
    // 元数据信息,支持reflect-metadata元数据
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') {
      targetinfo = Reflect.decorate(decorators, target, key, desc);
    }
    //  装饰器循环,倒着循环,说明同一个目标上有多个装饰器，执行顺序是倒着执行
    else
      for (var i = decorators.length - 1; i >= 0; i--) {
        if ((decorator = decorators[i])) {
          // 如果参数小于3【decorator为类装饰器或者构造器参数装饰器】执行decorator(targetinfo)直接执行decorator装饰器，并传递目标targetinfo，这里是类
          // 如果参数大于3【decorator为方法装饰器】 直接执行 decorator(target, key, targetinfo)
          // 如果参数等于3 【decorator为方法参数装饰器或者属性装饰器】 直接执行decorator(target, key)
          // targetinfo最终为各个装饰器执行后的返回值,但如果没有返回值,直接返回第S100行的targetinfo
          targetinfo =
            (argsnum < 3
              ? decorator(targetinfo)
              : argsnum > 3
              ? decorator(target, key, targetinfo)
              : decorator(target, key)) || targetinfo;

          // 此处的值是：方法装饰器中返回什么targetinfo就是什么 不返回默认为targetinfo
          console.log('targetinforesult:', targetinfo);
        }
      }
    return argsnum > 3 && targetinfo && Object.defineProperty(target, key, targetinfo), targetinfo;
  };
Object.defineProperty(exports, '__esModule', { value: true });
// 底层JS 组合装饰器和目标类 __decorate函数结束

// 2. 工具类
var StringUtil = /** @class */ (function () {
  function StringUtil() {}
  StringUtil.trimSpace = function (str) {
    return str.replace(/\s+/g, '');
  };
  return StringUtil;
})();

// 目标类
var RoleService = /** @class */ (function () {
  function RoleService() {
    this.roleName = '管理员';
  }
  RoleService.prototype.DistribRoles = function (userName, isValid) {
    console.log('分配角色.....');
  };
  var res = __decorate(
    [MethodInterceptor('DistribRoles方法')],
    RoleService.prototype,
    'DistribRoles',
    null
  );
  console.log('res', res);
  return RoleService;
})();

// 3. 装饰器方法
function MethodInterceptor(paramsValue) {
  console.log('方法装饰器....');
  return function (targetClassPrototype, methodName, methodDecri) {
    //targetMethodSave.value 表示原来目标类HttpClient的show()方法
    // 1.1 先保存目标类的方法到targetMethodSave
    console.log('进入方法装饰器：methodDecri:', methodDecri);
    var targetMethodSave = methodDecri.value;
    console.log('targetMethodSave:', targetMethodSave);
    // 1.2.让value函数建立新得函数对象空间
    //  value建立一个新的函数后,
    // RoleService对象调用DistribRoles;会执行value指向的新函数
    //  并不会执行原来RoleService目标类中DistribRoles方法
    //  这里建立的一个新函数就和后端 Java的spring AOP中的方法拦截器思想就完全一样
    methodDecri.value = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      console.log('this:', this);
      // 迭代所有参数
      args = args.map(function (arg) {
        if (typeof arg === 'string') {
          return StringUtil.trimSpace(arg);
        }
        return arg;
      });
      console.log(args);
      // 1.4.总结:这是一种典型的用方法装饰器扩大原来方法功能的案例
      // 1.5 但如果增强原来方法功能后,还想继续执行原来RoleService类中DistribRoles方法
      // 使用apply执行targetMethodSave原来函数
      targetMethodSave.apply(this, args);
    };
    //  方法执行之后，继续执行后续代码
    console.log('methodDecri.value:');

    // return '我是底层源码__decorate执行后的返回值';

    // 这个地方如果要写返回值 必须得是符合PropertyDescriptor类型的
    // 因为底层源码中会通过调用 Object.defineProperty(target, key, targetinfo)
    // 重写要修饰的方法的操作符 所以return的值不能乱写
  };
}
