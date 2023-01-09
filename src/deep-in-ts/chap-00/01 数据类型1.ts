let arr1:number[] = [1,2,3];
let arr2: Array<number> = [4,5,6];

//2 元组类型tuple： 数量和类型固定的数组
let zhufeng: [string, number] = ['zhufeng',10];

//3 枚举：用于表示 只有特定数量成员的 对象 
// 普通枚举
enum Gender{
    GIRL,
    BOY
}
console.log(Gender['GIRL'], Gender[0])
console.log(Gender['BOY'], Gender[1])

//常量枚举
const enum Colors{
    RED,YELLOW,BLUE
}
let myColor = [Colors.RED, Colors.YELLOW, Colors.BLUE];
console.log('myColor', myColor)


//4 任意类型  any 
//如果变量定义为any类型,就跟JS差不多,不进行类型检查

//5 null undefined 是其它类型的子类型
// 如果说strictNullChecks的值为true,则不能把null undefined赋值给x
let x:number;
x=1;
// x=undefined;
// x=null; 


//----------------------------------------------------
//02 数据类型

// 6 非空断言
let element: (HTMLElement | null) = document.getElementById('root');
element!.style.color = 'green';


// 7 never 代表不会出现的值 
// 7.1 作为不会返回的函数的 返回值类型
function error(message:string):never{
   throw new Error('报错了');//直接异常结束 了
   console.log('ok');
}

function loop():never{
  while(true){}
  console.log('ok');
}

function fn(x:number|string){
    // 类型保护
    if(typeof x === 'number'){
        console.log(x);
    } else if (typeof x === 'string'){
        console.log(x);
    }else{
        console.log(x);  //never
    }
}

//7.2 void 代表没有任何类型 
//函数没有返回值, 那么就是void类型
//strictNullChecks=false时  null可以赋值 void；true则不行
function greeting():void{
    //return null;
}

//7.3 void never 区别
// - void 可被赋值为null / undefined； never不能包含任何类型
// - 返回类型为void的函数能正常执行； 但是返回never的函数 无法正常执行


//8 Symbol  es-next
const s1 = Symbol('key');
const s2 = Symbol('key');
// console.log(s1 === s2);


//9 BigInt
const max = Number.MAX_SAFE_INTEGER; //2**53-1
console.log(max+1 ===max+2);  // true

const max2 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(max2 + BigInt(1) === max2 +BigInt(2))   // false
// console.log(max2 + 1n === max2 + 2n);   

// number类型 和 bigint类型 不兼容
let foo:number;
let bar:bigint;
// foo = bar;
// bar =foo;




let isOk1: boolean = true;
let isOk2:boolean = Boolean(1);
//let isOk3: boolean = new Boolean(1);

//联合类型
// let name3 : string | number;
// console.log(name3!.toString());
// name3 = 3;
// console.log(name3.toFixed(2));
// name3='zhufeng';
// console.log(name3!.length);
//类型断言
let name4:string|number;
// console.log((name4! as number).toFixed(2));
// console.log((name4! as string).length);
//双重断言
// console.log(name4! as any as boolean);

//字面量类型和类型字面量
const up:'Up'= 'Up';
const down: 'Down' = 'Down';
const left: 'Left' = 'Left';
const right: 'Right' = 'Right';
type Direction ='Up'|'Down'|'Left'|'Right';
//可实现枚举的效果
function move(direction: Direction){
   
}
move("Down");
//类型字面量
type Person = {
    name:string,
    age:number
}
let p1: Person={
    name:'zhufeng',
    age:10
}
//字符串字面量和联合类型 
type T1 = '1'|'2'|'3';
type T2 = string|number|boolean;
let t1:T1 = '1';
let t2:T2 = true;


export {}

