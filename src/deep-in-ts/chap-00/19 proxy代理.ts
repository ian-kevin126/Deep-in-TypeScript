export {}

//Proxy 代理
type Proxy<V>= {
    get():V,
    set(value:V):void;
}
type Proxify<T>= {
    [P in keyof T]:Proxy<T[P]>
}

function proxify<T>(obj:T): Proxify<T>{
  let result = <Proxify<T>>{};
  for(const key in obj){
      Object.defineProperty(result, key, {
          get: () => {
              console.log('get-- ', key);
              return obj[key];
          },
          set: (value) => {
              console.log('set-- ', key, value);
              obj[key] = value;
          },
      });
  }
    return result;
}

interface Props{
    name:string;
    age: string
}
let props: Props = {
    name:'zhufeng',
    age:'k'
};
let proxyProps:any = proxify<Props>(props);
console.log('proxyProps--', proxyProps);
console.log('proxyProps-name1---', proxyProps.name);
proxyProps.name = 'jiagou';
// proxyProps.age = 'k';
console.log('proxyProps-name2--', proxyProps.name);
// console.log('proxyProps-name333--', proxyProps);


// 例2: 取消代理
function unProxify<T>(t:Proxify<T>):T{
    let result:any  = {} as T;
    for(const k  in t){
        result[k]= t[k];
    }
    return result;
}
let originalProps = unProxify<Props>(proxyProps);
console.log('origin---', originalProps);

