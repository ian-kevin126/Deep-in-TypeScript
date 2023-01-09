import Order from './06-k extends keyof T/Order';

// key就是属性名 这里的key为address phone descri
let obj = { address: '博鳌', phone: 1111, descri: '顺利' };

//type myobjtype = typeof obj //S98
//type keyofobj = keyof myobjtype// S99 "address" | "phone" | "descri"
type keyofobjtype = keyof typeof obj; //S100=S98+S99的效果
let keyofobj: keyofobjtype = 'address';

type objType2 = { username: string; age: number };
type valueType = objType2['age'];
interface objType {
  username: string;
  age: number;
}

let obj2: objType = { username: '博鳌', age: 1111 };
type obj2keyofType = keyof objType; // obj2keyofType="username"|"age"

// 获取Order类上所有属性+所有的public方法名组成的联合类型
type keyofOrders = keyof Order; // keyofOrders="orderId" | "date" |"custname"|"phone"|"orderDetailArray" |"doEat"
let allvalue: keyofOrders = 'doEat';

// 注意：1类型的值只能是它自身就是1
type iBoolean = boolean | 1 | 0; //  iBoolean由boolean类型和1类型和0类型构成的联合类型
let iValid: iBoolean = 0;
if (Boolean(iValid)) {
  console.log('合法');
}

// 接口

export {};
