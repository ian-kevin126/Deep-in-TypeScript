export function Controller<T extends new (...args: any[]) => any>(rootPath: string) {
  return (targetClass: T) => {
    Object.keys(targetClass.prototype).forEach(methodName => {
      const metaPath = Reflect.getMetadata('path', targetClass.prototype, methodName);
      console.log(metaPath);
    });
  };
}
