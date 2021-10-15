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

// 慕课网高级TS课程之TS泛型函数重载+交叉类型+泛型约束真实应用场景代码片段
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
  let obj = {};
  let combine = obj as T & U;

  Object.keys(objOne).forEach(key => {
    (combine as any)[key] = (objOne as any)[key];
  });
  Object.keys(objTwo).forEach(key => {
    if (!(combine as any).hasOwnProperty(key)) {
      (combine as any)[key] = (objTwo as any)[key];
    }
  });
  if (objThree) {
    //如果有第三个对象传递进来实现交叉
    let combine2 = combine as typeof combine & V;
    Object.keys(objThree).forEach(key => {
      if (!(combine2 as any).hasOwnProperty(key)) {
        (combine2 as any)[key] = (objThree as any)[key];
      }
    });
    return combine2; // 三个对象交叉结果
  }
  return combine; // 两个对象交叉结果
}
let combine = cross(button, link);
console.log(combine);
//let combine2 = cross(combine, href)
//console.log(combine);
//console.log(combine2);
export {};
