type MyPropDecorator = (targetClassPrototype: any, propertyKey: string | symbol) => void;

export function Inject(injectId: string): MyPropDecorator {
  return (targetClassPrototype, propertyKey) => {
    // 获取由第三方包自带的内置的元数据 （还可以获取自定义的元数据）
    // 可以拿到这个装饰器修饰的属性的类型
    const propertyType = Reflect.getMetadata('design:type', targetClassPrototype, propertyKey);
    console.log(propertyType);
  };
}
