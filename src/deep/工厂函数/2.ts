type MyClassDecorator = <T>(targetClass: { new (...args: any[]): T }) => void;

function Colltroller(rootPath: string): MyClassDecorator {
  return <T>(targetClass: { new (...args: []): T }) => {};
}

function Colltroller2(rootPath: string): MyClassDecorator {
  return targetClass => {};
}

type T1 = {
  a: string;
  b: string;
};

type T2 = {
  b: string;
  c: string;
};

const obj = {
  a: 'a',
  b: 'b',
  c: 'a'
};

const aa: T1 & T2 = obj;

const bb: T1 | T2 = obj;

export default void 0;
