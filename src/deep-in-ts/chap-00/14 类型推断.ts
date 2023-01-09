export {}

// 例1 从赋的值中推断出来 类型从右向左流动 
let foo = 'd';
let bar = 'zhufeng';


// 例2：通过return关键字推荐返回值的类型
// 底部流出
function add(a:number,b:number){
    return a+b+'';
}
let c = add(1,3);


// 例3 类型定义， 从左向右流动
type Sum = (a:number,b:number)=>number;
type Sum2 = (a: string, b: string) => string;
let fn = (a, b) => {
    return a + b;
}
let sum: Sum = fn
let sum2: Sum2 = fn
//sum2 = sum1;

let person = {
    name:'zhufeng',
    age:11
}
let {name,age} = person;


// 例4 接口类型的推断
interface DefaultProps{
    name?:string;
    age?:number;
}
let defaultProps = { 
   name:'zhufeng',
   age:10
}
let props = {
    ...defaultProps,
    home:'北京'
}
// 注意其类型
type interfaceProps = typeof props;



// 例5.1  交叉类型
interface Bird{
    name:string;
    fly():void
}
interface Person{
    talk():void;
}
type BirdPerson = Bird&Person;

let p1:BirdPerson = {
    name:'zhufeng',
    fly(){},
    talk(){}
}
p1.fly();
p1.talk();

interface X{
    a:string|number;
    b:string
}
interface Y{
    a:number|boolean;
    c:string;
}
type XY = X&Y;
type YX = Y&X;
let xy:XY = {a:1,b:'',c:''}
let yx: YX = { a: 1, b: '', c: '' }


// 例5.2  联合类型  + 交叉类型 
type T1 = string | number;
type T2 = number| boolean;
type T3 = T1&T2;        // number   联合类型 +  交叉类型 
type T4 = T1 | T2;      // string | number | boolean    联合类型 +  联合类型 


//例6 mixin
interface AnyObject{
    [prop:string]:any
}

function mixin<T,U>(one:T,two:U){
    const result = <(T & U)>{};
    for(let key in one)
       (<T>result)[key] = one[key];

    for (let key in two)
       (<U>result)[key] = two[key];
   return result;  
}

const x = mixin({name:'zhufeng'},{age:11});
console.log(x.name,x.age);


// 例7 typeof typ
type Person3 ={
    name:string
}
let p3:Person3 = {
  name:'zhufeng'
}

let p4 = {
    name: 'zhufeng',
    age:10
}
type P4 = typeof p4;


//例8 索引访问操作符
interface Person5{
    name:string;
    age:number;
    job:{
        name:string
    }
}
let FrontEndJob: Person5['job'] = {
   name:'前端'
}


//例9 映射类型
interface Person6{
    name:string;
    age:number;
    gender:'male'|'female'
}

//批量把一个接口中的属性全部变成可选的
/* type PartialPerson = {
    [key in keyof Person6]?: Person6[key]
} */

type Partial<T> = {
    [key in keyof T]?: T[key]
}
type PPerson = Partial<Person6>


//interface和type区别是什么
//typeof 取一个值的类型
let o1 = {name:'zhufeng'};
type O1 = typeof o1;

type K6 = keyof Person6;
