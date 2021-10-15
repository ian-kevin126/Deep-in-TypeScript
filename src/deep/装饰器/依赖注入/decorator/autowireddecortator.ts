import 'reflect-metadata';
import collectionInstance from '../collection';

type MyPropDecorator = (targetClassPrototype: any, propertyKey: string | symbol) => void;

/*
export default function Autowired(injectid: string): MyPropDecorator {
  return (targetClassPrototype, propertyKey) => {
    // PropClass=UserService类
    let PropClass = Reflect.getMetadata('design:type', targetClassPrototype, propertyKey);
    let PropClassObj = new PropClass();
    // 存储在容器中可能存在覆盖问题
    // collectionInstance.set(propertyKey, PropClassObj);

    // 由于targetClassPrototype原型+prepertyKey一起是绝对不会被覆盖的 充分保证了数据属性中的value的对象的唯一性
    Reflect.defineProperty(targetClassPrototype, propertyKey, {
      value: PropClassObj
    });
  };
}
*/

export default function Autowired(dependencyid: string, singleton?: boolean): MyPropDecorator {
  return (targetClassPrototype, propertyKey) => {
    let ServiceImplInstance;
    const ServiceImplInstanceOrClass = Reflect.getMetadata(
      'ServiceImplInstanceOrClass',
      targetClassPrototype,
      propertyKey
    );
    // 是否是单例模式
    const iSsingleton = Reflect.getMetadata('singleton', targetClassPrototype, propertyKey);

    if (iSsingleton) {
      ServiceImplInstance = ServiceImplInstanceOrClass;
    } else {
      ServiceImplInstance = new ServiceImplInstanceOrClass();
    }
    Reflect.defineProperty(targetClassPrototype, propertyKey, {
      value: ServiceImplInstance
    });
  };
}
