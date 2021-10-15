type _ReturnType = (targetClassPrototype: any, propertyKey: string | symbol) => void;

export default function Singleton(isSingleton: boolean): _ReturnType {
  return (targetClassPrototype, propertyKey) => {
    const metaSingleton = Reflect.getMetadata('singleton', targetClassPrototype, propertyKey);

    const PropServiceClass = Reflect.getMetadata('design:type', targetClassPrototype, propertyKey);
    const PropServiceImplClass = PropServiceClass.getServiceImplClass();
    let ServiceImplInstanceOrClass;

    // 如果是单例
    if (isSingleton) {
      if (!metaSingleton) {
        // Reflect.defineMetadata('singleton', isSingleton, targetClassPrototype, propertyKey);
        ServiceImplInstanceOrClass = PropServiceImplClass.getInstance();
      } else {
        console.warn('单例模式创建，使用了上一次的对象');
      }
    } else {
      ServiceImplInstanceOrClass = PropServiceImplClass;
    }
    Reflect.defineMetadata('singleton', isSingleton, targetClassPrototype, propertyKey);
    // 保存对象或者类
    Reflect.defineMetadata(
      'ServiceImplInstanceOrClass',
      ServiceImplInstanceOrClass,
      targetClassPrototype,
      propertyKey
    );
  };
}
