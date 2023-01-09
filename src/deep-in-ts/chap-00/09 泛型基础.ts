export {}
//创建一个长度为length的数组,里面的值用value填充

/* 
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

let result = createArray<string>(3,'x');
console.log(result);
*/


//类数组
/* 
function sum(){
    let args:IArguments = arguments;
    for(let a of args){
         console.log(a);
    }
}
sum(1,2,3); 
*/

/* 
let obj1 = {
  [Symbol.iterator]:()=>{
       let i=0;
      function next(){
         return {value:i++,done:false};
      }
      return {
        next
      }
  }
};
for(let key of obj1){
  console.log(key);
} 
*/

/* 
function * gen(){
    yield 1;
    yield 2;
}
let it = gen();
let {value,done} = it.next();
console.log(value,done);
*/

/*  
function sum() {
   let args: IArguments = arguments;
   for (let i = 0; i < args.length; i++) {
     console.log(args[i]);
   }
 }
 sum(1, 2, 3); */


 //例1：泛型类 
 class MyArray<T>{
    private list:T[]=[]
    add(value:T){
      this.list.push(value);
    }
    getMax():T{
      return this.list[0];
    }

 }
let array = new MyArray<number>();
array.add(1);
array.add(2);
array.add(3);
// console.log(array.getMax());


//例2：泛型类  与 new
function factory<T>( type : { new() : T } ) : T {
  return new type();
 }
 class Person{}
 
 let p = factory<Person>(Person);
// console.log('例2', p);


//例3：泛型接口
// 例3.1
interface Calculate<T> {
  (a : T,b : T) : T
}

let sum: Calculate<number> = function (a: number, b: number): number {
  return a + b;
};
sum(1,2);

// 例3.2
interface Calculate2 {
  <T>(a:T,b:T):T
}

let sum2: Calculate2 = function <T> (a: T, b: T): T {
  return a;
};
sum2<number>(1, 2);

// 例3.3
interface Calculate3<T>{
  <U>(a:T,b:T):U
}
let sum3: Calculate3<number> = function <U>(a: number, b: number): U {
  return a as any;
};
sum3<string>(1, 2);



//例4 泛型可以写多个
function swap<A,B>(tuple:[A,B]):[B,A]{
   return [tuple[1],tuple[0]];
}


//例5 默认泛型
interface T2<T=string>{
}
type T22 = T2;


//例6 泛型约束 
/*
function logger<T>(val:T){
  console.log(val.length);
}
*/

interface LengthWise{
  length:number
}
//非常非常非常重要
function logger2<T extends LengthWise>(val: T) {
  console.log(val.length);
}
let obj  = {
  length:10
}
type Obj = typeof obj;
logger2<Obj>(obj);


//例6.2 判断兼容不兼容跟extends继承没有一点关系 ,只看形状 有没有对应的属性
class GrandFather {
  grandFather:string
}
class Father extends GrandFather {
  father:string;
}
class Child extends Father{
  child:string
}
//extends：约束  
//或者说T是Father的子类型
function get<T extends Father>(){
}
let father = new Father();
let child = new Child();
father = child;