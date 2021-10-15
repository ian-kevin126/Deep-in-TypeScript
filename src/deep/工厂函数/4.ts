interface Button {
  btntype: string;
  text: string;
}
interface Link {
  alt: string;
  href: string;
}
interface Href {
  linktype: string;
  target: Openlocation;
}
enum Openlocation {
  self = 0,
  _blank,
  parent
}
let button: Button = {
  btntype: 'normal',
  text: '跳转到百度'
};
let link: Link = {
  alt: 'goto baidu',
  href: 'http://www.baidu.com'
};
let href: Href = {
  linktype: '外网',
  target: Openlocation._blank
};

interface Obj {
  [key: string]: any;
}

function cross<T extends Obj, U extends Obj>(objOne: T, objTwo: U): T & U {
  let combine: Obj = {};
  Object.keys(objOne).forEach(key => (combine[key] = objOne[key]));
  Object.keys(objTwo).forEach(key => {
    if (!combine.hasOwnProperty(key)) {
      combine[key] = objTwo[key];
    }
  });

  return combine as T & U;
}

// function cross<T extends Obj, U extends Obj>(target: T, source: U): T & U
// function cross<T extends Obj, U extends Obj, V extends Obj>(target: T, source1: U, source2: V): T & U & V
// function cross(target: object, ...sources: any[]): any {

// }

// Object.assign

// const c1 = cross(button, link);
// const c2 = cross(c1, href);
// console.log(c2);

// export default void 0;

// interface Obj2 {
//   [key: any]: any
// }

// const a: object = {}

// const aa = new Object()

// let a1 = new Object({ name: 'xxx' });
// a1 = []
// a1 = new Date()

// let a2: Object = { name: 'xxx' };
// a2 = new RegExp('\\d+')
// a2 = Function
// a2 = 1
// a2 = 'a'
// a2 = true
// a2 = null // error 不能将类型“null”分配给类型“Object”
// a2 = undefined // 不能将类型“undefined”分配给类型“Object”

// let a3 = { name: 'xxx' };
// a3 = []
// a3 = {}

export default void 0;
