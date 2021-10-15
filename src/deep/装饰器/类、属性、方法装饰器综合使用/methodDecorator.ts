type MyMethodDecoratorType = (
  targetClassPrototype: any,
  methodName: string,
  methodDescr: PropertyDescriptor
) => void;

export function get(reqPath: string): MyMethodDecoratorType {
  return (targetClassPrototype, methodName, methodDescr) => {
    /**
     * path: 元数据key
     * reqPath: 元数据值
     * args[2, 3]: 想把设置的数据放到哪（目标）放到原型的方法上
     */
    Reflect.defineMetadata('path', reqPath, targetClassPrototype, methodName);
  };
}
