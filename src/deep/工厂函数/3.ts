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

function cross2<T extends object, U extends object>(objOne: T, objTwo: U): T & U {
  let combine = {} as T & U;
  Object.keys(objOne).forEach(key => (combine[key] = objOne[key]));
  Object.keys(objTwo).forEach(key => {
    if (!combine.hasOwnProperty(key)) {
      combine[key] = objTwo[key];
    }
  });

  return combine;
}

const c1 = cross(button, link);
const c2 = cross(c1, href);
console.log(c2);

const str: 'name' = 'name'
const obj = {
  name: 'xk'
}
console.log(obj[str]);

export default void 0;
