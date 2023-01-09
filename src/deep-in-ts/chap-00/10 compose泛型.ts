
export {}

// 例1 约束含义： 只多不少原则，适用于接口或对象属性，严格来说就是子类型
class Father {
  father: string;
}
class Child1 extends Father {
  child1: string;
}
class Child2 extends Father {
  child1: string;
}
interface Calculate{
  <T extends (string | number)>(a:T,b:T):void
}
let sum: Calculate = function <T extends (string | number)>(a: T, b: T): void {
};


// 例2 类型别名 type关键字
type Cart<T> = {list:T[]}|T[];
let c1:Cart<string> = {list:['1']};
let c2: Cart<number> = [1,2,3]; 
// Interface  和type的区别
// 待完善
// 原则： 能用interface实现的，就不要用type


// 例3 compose示例
console.log('0个 func的情况---',  compose()("zhufeng")  );

function add1(str){return str+'1'}
console.log('1个 func的情况---',  compose(add1)("zhufeng") );

function add2(str) {return str + "2";}
console.log('2个 func的情况---',  compose<string,any[],string>(add1, add2)("zhufeng"));


type Func<T extends any[], R> = (...a: T) => R;
/* zero functions */
export default function compose(): <R>(a: R) => R;
/* one functions */
export default function compose<F extends Function>(f: F): F;
/* two functions */
export default function compose<A, T extends any[], R>(
  f1: (a: A) => R,//A=zhufeng2 R=zhufeng21
  f2: Func<T, A>//T=zhufeng A=zhufeng2
): Func<T, R>;//T=zhufeng R =zhufeng21


/* three functions */
export default function compose<A, B, T extends any[], R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func<T, A>
): Func<T, R>;

/* four functions */
export default function compose<A, B, C, T extends any[], R>(
  f1: (c: C) => R,
  f2: (b: B) => C,
  f3: (a: A) => B,
  f4: Func<T, A>
): Func<T, R>;

/* rest */
export default function compose<R>(
  f1: (a: any) => R,
  ...funcs: Function[]
): (...args: any[]) => R;

export default function compose<R>(...funcs: Function[]): (...args: any[]) => R;

//redux里的compose实现
export default function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    return <T>(arg: T):T => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)));
}

//compose(add3,add2,add1)('zhufeng');
//add3(add2(add1("zhufeng")));
//let dispatch = thunk(promise(logger(store.dispatch)))
