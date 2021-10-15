import collectionInstance from './Collection';

type MyParamDecorator = (targetClass: Object, param: string, paramIndex: number) => void;

export function InjectContructor(injectId?: string): MyParamDecorator {
  return (targetClass, param, paramIndex) => {
    // 获取装饰器所在的构造函数的所有参数对应类型组成的数组
    const constructorParamsArr = Reflect.getMetadata('design:paramtypes', targetClass);
    // console.log('constructorParamsArr', constructorParamsArr);
    // constructorParamsArr[paramIndex] 所修饰的参数的类型
    const constructorParamTypeObj = constructorParamsArr[paramIndex];
    collectionInstance.set(injectId!, constructorParamTypeObj);
    console.log(1);
  };
}
