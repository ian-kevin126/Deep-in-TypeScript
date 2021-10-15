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

function cross<T extends object, U extends object>(objOne: T, objTwo: U): T & U;
function cross<T extends object, U extends object, V extends object>(
  objOne: T,
  objTwo: U,
  objThree: V
): T & U & V;
function cross<T extends object, U extends object, V extends object>(
  objOne: T,
  objTwo: U,
  objThree?: V
) {
  // 两个对象交叉
  let obj = {};
  let combine = obj as T & U;
  Object.keys(objOne).forEach(key => ((combine as any)[key] = (objOne as any)[key]));
  Object.keys(objTwo).forEach(key => {
    if (!combine.hasOwnProperty(key)) {
      (combine as any)[key] = (objTwo as any)[key];
    }
  });

  // 三个对象交叉
  if (objThree) {
    // combine = obj as T & U & V;
    combine = obj as typeof combine & V;
    Object.keys(objThree).forEach(key => {
      if (!combine.hasOwnProperty(key)) {
        (combine as any)[key] = (objThree as any)[key];
      }
    });
  }

  return combine;
}

export default void 0;

// let obj = {}; // 空对象可以断言成其他任意类型（除：undefined和null）是任何类型的一个子级
// let str = obj as undefined;

Object;
