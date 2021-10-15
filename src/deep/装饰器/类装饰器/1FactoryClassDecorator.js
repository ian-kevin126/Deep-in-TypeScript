'use strict';
/**
 * 需求：对已经开发好的项目中的任何一个类，创建实例时，打印日志信息
 * 输出哪一个类被创建了，并输出传递了哪些参数信息
 */
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
function LoggerInfoDecorator(targetClass) {
  // 匿名类 return的这个新的类没有具体的名字
  return /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      console.log('日志信息...targetClass:', targetClass.name);
      return _this;
    }
    class_1.prototype.methodone = function () {
      console.log('methodone', this.name);
    };
    return class_1;
  })(targetClass);
}
var Test = /** @class */ (function () {
  function Test(name) {
    this.name = name;
  }
  Test.prototype.eat = function () {
    console.log(this.name, '吃饭');
  };
  Test = __decorate([LoggerInfoDecorator], Test);
  return Test;
})();
var res = new Test('wer'); // 日志信息...targetClass: Test
res.methodone(); // methodone wer
/**
 * 返回的实例 是被装饰器修饰过的 也就是装饰器函数中的那个匿名类构造出来的实例
 * 为什么可以这样用呢 看经过编译后的es5的代码，发现装饰器函数中如果返回一个新的值会把被装饰的类替换掉
 * 所以最终我们使用的这个Test类其实是用的LoggerInfoDecorator返回的新创建的类
 */
console.log(res);
exports['default'] = void 0;
